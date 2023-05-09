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
          <div className="icons bg-white flex flex-row flex-wrap justify-center pl-2 pt-4 pb-2 gap-2 text-black underline">
            <Icon name="YouTube" href="https://www.youtube.com/@SaluteUkraine" />
            <Icon name="Instagram" href="https://www.instagram.com/saluteukraine/" />
            <Icon name="Facebook" href="https://www.facebook.com/SaluteUkraineNYC" />
            <Icon name="TikTok" href="https://www.tiktok.com/@saluteukraine" />
            <Icon name="Twitter" href="https://twitter.com/SaluteUkraine" />
            <Icon name="Telegram" href="https://t.me/SaluteUkraine" />
            <Icon name="LinkedIn" href="https://www.linkedin.com/company/saluteukraine/" />
            <Icon name="Reddit" href="https://www.reddit.com/r/SaluteUkraine/" />
            <Icon name="Discord" href="https://discord.gg/9BBYpFyq" />
          </div>
        </section>
        <div className="grid grid-cols-1 p-8 pt-4">
          <div className="mb-3">
            <h3 className="font-bold text-xl">Volunteers Needed!</h3>
            <ol className="list-disc list-inside">
              <li>Hosts and interview guests</li>
              <li>Social media managers</li>
              <li>Ukrainian language translation</li>
              <li>Video & image editing</li>
              <li>Web development (React + Next.js)</li>
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
  TikTok: {
    path: "M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z",
    viewport: [0, 0, 22, 22],
  },
  Instagram: {
    path: "M 256 46.144531 C 324.351562 46.144531 332.457031 46.398438 359.464844 47.636719 C 428.84375 50.792969 461.246094 83.710938 464.40625 152.574219 C 465.644531 179.5625 465.878906 187.667969 465.878906 256.019531 C 465.878906 324.394531 465.621094 332.480469 464.40625 359.464844 C 461.226562 428.265625 428.90625 461.246094 359.464844 464.40625 C 332.457031 465.644531 324.394531 465.898438 256 465.898438 C 187.648438 465.898438 179.542969 465.644531 152.554688 464.40625 C 83.007812 461.226562 50.773438 428.160156 47.617188 359.445312 C 46.378906 332.457031 46.121094 324.375 46.121094 256 C 46.121094 187.648438 46.398438 179.5625 47.617188 152.554688 C 50.792969 83.710938 83.113281 50.773438 152.554688 47.617188 C 179.5625 46.398438 187.648438 46.144531 256 46.144531 Z M 256 0 C 186.476562 0 177.769531 0.296875 150.464844 1.535156 C 57.492188 5.800781 5.824219 57.386719 1.558594 150.441406 C 0.296875 177.769531 0 186.476562 0 256 C 0 325.523438 0.296875 334.25 1.535156 361.558594 C 5.800781 454.527344 57.386719 506.199219 150.441406 510.464844 C 177.769531 511.703125 186.476562 512 256 512 C 325.523438 512 334.25 511.703125 361.558594 510.464844 C 454.441406 506.199219 506.238281 454.613281 510.441406 361.558594 C 511.703125 334.25 512 325.523438 512 256 C 512 186.476562 511.703125 177.769531 510.464844 150.464844 C 506.28125 57.578125 454.632812 5.824219 361.578125 1.558594 C 334.25 0.296875 325.523438 0 256 0 Z M 256 124.542969 C 183.402344 124.542969 124.542969 183.402344 124.542969 256 C 124.542969 328.597656 183.402344 387.476562 256 387.476562 C 328.597656 387.476562 387.457031 328.617188 387.457031 256 C 387.457031 183.402344 328.597656 124.542969 256 124.542969 Z M 256 341.332031 C 208.875 341.332031 170.667969 303.148438 170.667969 256 C 170.667969 208.875 208.875 170.667969 256 170.667969 C 303.125 170.667969 341.332031 208.875 341.332031 256 C 341.332031 303.148438 303.125 341.332031 256 341.332031 Z M 392.660156 88.640625 C 375.679688 88.640625 361.921875 102.398438 361.921875 119.359375 C 361.921875 136.320312 375.679688 150.078125 392.660156 150.078125 C 409.621094 150.078125 423.359375 136.320312 423.359375 119.359375 C 423.359375 102.398438 409.621094 88.640625 392.660156 88.640625 Z M 392.660156 88.640625",
    viewport: [0, 0, 512, 512],
  },
  Reddit: {
    path: "m128.39,239.7c-61.32,0-111.22-35.45-111.36-79.07-.11-1.64-.15-3.29-.13-4.94-1.84-1.12-3.6-2.46-5.25-4.01-6.25-5.85-9.83-13.77-10.1-22.32-.27-8.56,2.81-16.7,8.67-22.94,5.84-6.23,13.76-9.82,22.31-10.09,7.07-.22,13.86,1.84,19.52,5.87,19.87-12.59,42.52-19.77,65.99-20.9l12.45-58.5c.02-.15.04-.3.08-.44.64-2.91,2.38-5.4,4.9-7,2.51-1.6,5.5-2.12,8.4-1.47l44.38,8.87c2.98.6,4.91,3.49,4.31,6.47-.59,2.98-3.5,4.9-6.47,4.31l-44.75-8.94c0,.06-.02.12-.03.18l-12.06,56.69c23.23,1.64,53.78,9.18,74.41,21.82,5.14-3.71,11.25-5.83,17.58-6.05,17.65-.57,32.53,13.24,33.18,30.84.2,11.11-5.42,21.49-14.54,27.46.03,1.7-.02,3.39-.13,5.08-.15,43.62-50.04,79.07-111.36,79.07h0ZM33.55,107.32c-.23,0-.46,0-.68.01-5.61.18-10.8,2.53-14.63,6.62-3.86,4.1-5.88,9.45-5.7,15.06.18,5.61,2.53,10.8,6.62,14.63,1.75,1.64,3.64,2.91,5.59,3.77,2.12.94,3.42,3.1,3.27,5.4-.16,2.4-.16,4.84,0,7.24,0,.12.01.25.01.37,0,37.64,45.02,68.27,100.36,68.27s100.36-30.62,100.36-68.27c0-.13,0-.25,0-.38.16-2.4.16-4.84,0-7.24-.15-2.21,1.04-4.3,3.03-5.29,7.21-3.61,11.78-11.12,11.64-19.14-.42-11.46-10.25-20.5-21.81-20.15-5.11.18-10,2.25-13.77,5.84-1.87,1.78-4.74,2.02-6.88.56-20.43-13.92-55.64-21.96-78.46-22.47-24.23.41-47.65,7.81-67.73,21.4-2.13,1.44-4.98,1.21-6.85-.55-3.93-3.69-9.01-5.7-14.38-5.7v.02Zm91.5,105.9c-16.24,0-32.21-5.33-45.3-15.16-2.43-1.82-2.91-5.27-1.09-7.7,1.83-2.43,5.27-2.91,7.7-1.09,11.89,8.94,26.57,13.54,41.34,12.9h.46c14.78.58,29.46-3.96,41.34-12.9,1.67-1.25,3.89-1.46,5.76-.52,1.86.93,3.04,2.84,3.04,4.92v.72c0,2.74-2.01,5.02-4.63,5.43-13.39,9.25-29.53,13.94-45.74,13.35-.96.04-1.92.06-2.88.06h0Zm-57.74-66.73c0-10.02,8.17-18.19,18.19-18.19s18.19,8.17,18.19,18.19-8.17,18.19-18.19,18.19c-10.07-.1-18.19-8.17-18.19-18.19Zm103.02,19.5h-.9l.14-.68c-10.02,0-18.19-8.17-18.19-18.19s8.17-18.19,18.19-18.19,18.19,8.17,18.19,18.19c.4,10.02-7.41,18.46-17.43,18.87h0Zm34.84-111.77c-12.63,0-22.9-10.27-22.9-22.9s10.27-22.9,22.9-22.9,22.9,10.27,22.9,22.9-10.27,22.9-22.9,22.9Zm0-34.79c-6.56,0-11.9,5.34-11.9,11.9s5.34,11.9,11.9,11.9,11.9-5.34,11.9-11.9-5.34-11.9-11.9-11.9Z",
    viewport: [0, 0, 250, 250],
  },
  Discord: {
    path: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z",
    viewport: [0, 0, 600, 600],
  },
};
