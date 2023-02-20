const constraints = {
  audio: true,
  video: { width: 1280, height: 720 },
};

export class Webcam {
  requestPermission(): void {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        const video = document.querySelector("video");
        if (!video) {
          throw new Error("can't find video");
        }
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
          video.play();
        };
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
  }
}
