import type { BufferAttribute } from "three";
import * as THREE from "three";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let flag: THREE.Mesh;

const [sizeW, sizeH, segW, segH] = [30, 20, 30, 20];
const [h, v, w, s] = [0.5, 0.3, 0.2, 0.5];
const flagImageUrl =
  "https://res.cloudinary.com/dxjzrhogi/image/upload/v1675883647/drops/support-ukraine/640px-Flag_of_Ukraine__28with_coat_of_arms_2_29.svg_b0b8ca.png";

export async function initAnimation(canvas: HTMLCanvasElement, colorHex: string): Promise<void> {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(colorHex);
  camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 1, 1000);
  camera.position.set(0, 0, 40);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas,
  });
  const light = new THREE.DirectionalLight("#FFFFFF");
  light.position.set(10, 50, 100);
  scene.add(light);
  const ambientLight = new THREE.AmbientLight("#999999");
  scene.add(ambientLight);

  const poleGeometry = new THREE.CylinderGeometry(0.5, 0.5, 40, 16, 1);
  const poleMaterial = new THREE.MeshPhongMaterial({
    color: "#AFBCCE",
    specular: "#999999",
    shininess: 30,
  });
  const pole = new THREE.Mesh(poleGeometry, poleMaterial);
  pole.position.set(-15, 0, 0);
  scene.add(pole);

  const flagGeometry = new THREE.PlaneGeometry(sizeW, sizeH, segW, segH);
  flag = new THREE.Mesh(flagGeometry);
  flag.position.y += 10;
  const flagTexture = await loadTexture(flagImageUrl);
  flag.material = new THREE.MeshLambertMaterial({
    map: flagTexture,
    side: THREE.DoubleSide,
  });
  scene.add(flag);
  tick();
}

async function loadTexture(imageUrl: string): Promise<THREE.Texture> {
  const loader = new THREE.TextureLoader();
  return loader.load(imageUrl, (texture: THREE.Texture) => {
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;
  });
}

function tick() {
  for (let y = 0; y < segH + 1; y++) {
    for (let x = 0; x < segW + 1; x++) {
      const i = (x + y * (segW + 1)) * 3;
      const positions = (flag.geometry.attributes.position as BufferAttribute)
        .array as Array<number>; // FIXME verify these types
      const time = (Date.now() * s) / 50;
      positions[i + 2] = (Math.sin(h * x + v * y - time) * w * x) / 4;
    }
  }
  flag.geometry.attributes.position.needsUpdate = true;
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
}
