/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { JsxChild, JsxElement } from "typescript";

const previewUrl = "https://www.saluteukraine.com/";
const previewThumbnail =
  "https://res.cloudinary.com/dxjzrhogi/image/upload/v1677942627/salute-ukraine/stop-putin-large_iw6baf.png";
const previewThumbnailAlt = "hand holding sign that says 'STOP PUTIN'";
const previewTitle = "Salute Ukraine! Volunteer now 💪";
const previewDescription = "Tech professionals rallying global public support for Ukraine.";

export default function Flag() {
  return (
    <>
      <Head>
        <title>Salute Ukraine! Volunteer now 💪</title>
        <meta name="description" content={previewDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={previewTitle} />
        <meta property="og:description" content={previewDescription} />
        <meta name="image" property="og:image" content={previewThumbnail} />
        <meta property="og:image:alt" content={previewThumbnailAlt} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={previewUrl} />

        <meta name="twitter:site" content="@SaluteUkraine" />
        <meta name="twitter:creator" content="@SaluteUkraine" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <main className="flex flex-col items-center bg-white">
        <header className="header flex flex-row p-4 pb-3 items-center text-center gap-x-2 md:gap-x-8">
          <a href="https://www.saluteukraine.com/">
            <h1 className="headline text-4xl font-bold">Salute Ukraine!</h1>
          </a>
          <a href="https://www.saluteukraine.com/">
            <img
              src="https://res.cloudinary.com/dxjzrhogi/image/upload/v1678725336/salute-ukraine/icons/salute-ukraine_rtesqx.svg"
              alt="Icon of Ukrainian soldier giving salute gesture"
              width="70"
              height="70"
            />
          </a>
        </header>
        <section className="hero w-full shadow">
          <div className="flex flex-col items-center justify-center gap-y-4  p-4">
            <div className="w-full">
              <h2 className="text-2xl font-bold text-center">
                We are technology professionals rallying global public support for Ukraine.
              </h2>
            </div>
          </div>
          <div className="icons bg-white flex flex-row flex-wrap justify-center p-4 gap-8 text-black underline">
            <Icon name="YouTube" href="https://www.youtube.com/@SaluteUkraine" />
            <Icon name="Instagram" href="https://www.instagram.com/saluteukraine/" />
            <Icon name="Facebook" href="https://www.facebook.com/SaluteUkraineNYC" />
            <Icon name="Telegram" href="https://t.me/SaluteUkraine" />
            <Icon name="Twitter" href="https://twitter.com/SaluteUkraine" />
            <Icon name="E-Mail" href="mailto:lily.dayton.3@gmail.com" />
          </div>
        </section>
        <div className="grid grid-cols-1 p-8 pt-4">
          <div className="mb-3">
            <h3 className="font-bold text-xl">Volunteers Needed!</h3>
            <ol className="list-disc list-inside">
              <li>Hosts & co-hosts for videos and podcasts</li>
              <li>
                Translation, especially Ukrainian, German, French, Japanese, Korean, Chinese,
                Spanish, Hebrew, and Turkish.
              </li>
              <li>Video editing</li>
              <li>Image editing & illustration</li>
              <li>UX & web design</li>
              <li>Software development (React + Next.js)</li>
            </ol>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dxjzrhogi/image/upload/v1677264833/salute-ukraine/save-ukrainian-children_qsrrlt.webp"
              alt="Girl draped in Ukrainian flag holding sign saying 'Save Ukrainian Children'"
              width="500"
              height="500"
            />
          </div>
        </div>
        <div className="contact text-xl p-4 pb-12 shadow-xl rounded  w-full flex flex-col gap-y-2">
          <div className="text-center text-white">
            Contact{" "}
            <a className="underline" href="mailto:lily.dayton.3@gmail.com">
              Lily Dayton
            </a>{" "}
            to learn more!
          </div>
        </div>
      </main>
    </>
  );
}

type IconProps = {
  href: string;
  name: string;
};

function Icon({ href, name }: IconProps) {
  return (
    <a href={href}>
      <button
        type="button"
        className="text-white bg-[#2b58b8] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm text-center flex flex-col items-center justify-between dark:focus:ring-[#3b5998]/55 mr-2 mb-2 w-28 h-28 p-3 pt-6">
        <svg
          className="w-10 h-10 -ml-1"
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`${iconPaths[name].viewport[0]} ${iconPaths[name].viewport[1]} ${iconPaths[name].viewport[2]} ${iconPaths[name].viewport[3]}`}>
          <path fill="currentColor" d={iconPaths[name].path}></path>
        </svg>
        {name}
      </button>
    </a>
  );
}

type IconMap = {
  [name: string]: { path: string; viewport: number[] };
};

const iconPaths: IconMap = {
  "E-Mail": {
    path: "M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z",
    viewport: [100, 100, 300, 300],
  },
  Facebook: {
    path: "M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z",
    viewport: [100, 115, 320, 250],
  },
  Twitter: {
    path: "M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z",
    viewport: [100, 100, 320, 320],
  },
  LinkedIn: {
    path: "M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z",
    viewport: [100, 100, 300, 300],
  },
  YouTube: {
    path: "M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z",
    viewport: [85, 85, 342, 342],
  },
  Telegram: {
    path: "M392.192 485.952c6.869 4.864 15.723 6.08 23.616 3.093c7.893 -3.008 13.696 -9.749 15.445 -17.92c18.539 -87.125 63.509 -307.648 80.384 -386.901c1.28 -5.973 -0.853 -12.181 -5.547 -16.171c-4.693 -3.989 -11.2 -5.141 -17.003 -2.987c-89.451 33.109 -364.928 136.469 -477.525 178.133c-7.147 2.645 -11.797 9.515 -11.563 17.045c0.256 7.552 5.333 14.101 12.651 16.299c50.496 15.104 116.779 36.117 116.779 36.117c0 0 30.976 93.547 47.125 141.12c2.027 5.973 6.699 10.667 12.864 12.288c6.144 1.6 12.715 -0.085 17.301 -4.416c25.941 -24.491 66.048 -62.357 66.048 -62.357c0 0 76.203 55.872 119.424 86.656Zm-234.88 -185.109l35.819 118.144l7.957 -74.816c0 0 138.389 -124.821 217.28 -195.968c2.304 -2.091 2.624 -5.589 0.704 -8.043c-1.899 -2.453 -5.397 -3.029 -8.021 -1.365c-91.435 58.389 -253.739 162.048 -253.739 162.048Z",
    viewport: [0, 0, 512, 512],
  },
  Twitch: {
    path: "M45.845 0l-34.389 87.872v359.168h122.261v64.96h68.779l64.96 -64.96h99.349l133.739 -133.739v-313.301h-454.699zm408.832 290.389l-76.416 76.416h-122.261l-64.96 64.96v-64.96h-103.168v-320.96h366.805v244.544zm-76.416 -156.651v133.589h-45.845v-133.589h45.845zm-122.261 0v133.589h-45.845v-133.589h45.845z",
    viewport: [0, 0, 512, 512],
  },
  Instagram: {
    path: "M 256 46.144531 C 324.351562 46.144531 332.457031 46.398438 359.464844 47.636719 C 428.84375 50.792969 461.246094 83.710938 464.40625 152.574219 C 465.644531 179.5625 465.878906 187.667969 465.878906 256.019531 C 465.878906 324.394531 465.621094 332.480469 464.40625 359.464844 C 461.226562 428.265625 428.90625 461.246094 359.464844 464.40625 C 332.457031 465.644531 324.394531 465.898438 256 465.898438 C 187.648438 465.898438 179.542969 465.644531 152.554688 464.40625 C 83.007812 461.226562 50.773438 428.160156 47.617188 359.445312 C 46.378906 332.457031 46.121094 324.375 46.121094 256 C 46.121094 187.648438 46.398438 179.5625 47.617188 152.554688 C 50.792969 83.710938 83.113281 50.773438 152.554688 47.617188 C 179.5625 46.398438 187.648438 46.144531 256 46.144531 Z M 256 0 C 186.476562 0 177.769531 0.296875 150.464844 1.535156 C 57.492188 5.800781 5.824219 57.386719 1.558594 150.441406 C 0.296875 177.769531 0 186.476562 0 256 C 0 325.523438 0.296875 334.25 1.535156 361.558594 C 5.800781 454.527344 57.386719 506.199219 150.441406 510.464844 C 177.769531 511.703125 186.476562 512 256 512 C 325.523438 512 334.25 511.703125 361.558594 510.464844 C 454.441406 506.199219 506.238281 454.613281 510.441406 361.558594 C 511.703125 334.25 512 325.523438 512 256 C 512 186.476562 511.703125 177.769531 510.464844 150.464844 C 506.28125 57.578125 454.632812 5.824219 361.578125 1.558594 C 334.25 0.296875 325.523438 0 256 0 Z M 256 124.542969 C 183.402344 124.542969 124.542969 183.402344 124.542969 256 C 124.542969 328.597656 183.402344 387.476562 256 387.476562 C 328.597656 387.476562 387.457031 328.617188 387.457031 256 C 387.457031 183.402344 328.597656 124.542969 256 124.542969 Z M 256 341.332031 C 208.875 341.332031 170.667969 303.148438 170.667969 256 C 170.667969 208.875 208.875 170.667969 256 170.667969 C 303.125 170.667969 341.332031 208.875 341.332031 256 C 341.332031 303.148438 303.125 341.332031 256 341.332031 Z M 392.660156 88.640625 C 375.679688 88.640625 361.921875 102.398438 361.921875 119.359375 C 361.921875 136.320312 375.679688 150.078125 392.660156 150.078125 C 409.621094 150.078125 423.359375 136.320312 423.359375 119.359375 C 423.359375 102.398438 409.621094 88.640625 392.660156 88.640625 Z M 392.660156 88.640625",
    viewport: [0, 0, 512, 512],
  },
};
