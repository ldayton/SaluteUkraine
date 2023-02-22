import Head from "next/head";
import { useEffect } from "react";
import { initAnimation } from "@/lib/waving-flag";

const title = "Salute Ukraine!";
const tagline = "Send your message of support now.";
const socialTitle = title + " " + tagline;
const url = "https://www.saluteukraine.com";
const thumbnail = "https://";
const description = "Send your love & support to Ukraine. Record your message now.";

export default function Flag() {
  useEffect(() => {
    const canvas = document.getElementById("ukraine-flag") as HTMLCanvasElement | null;
    if (canvas) {
      initAnimation(canvas, "#fafaed");
    }
  });

  return (
    <>
      <Head>
        <title>Salute Ukraine! Record your message of support now.</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={socialTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={thumbnail} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />

        <meta name="twitter:title" content={socialTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={thumbnail} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="flex flex-col items-center gap-y-4 p-8">
        <h1 className="headline text-5xl font-bold">Salute Ukraine!</h1>
        <h2 className="tagline text-xl">Connecting Ukrainians with free people around the world</h2>
        <canvas id="ukraine-flag" width="500" height="500" />
        <div className="helpus max-w-3xl text-xl flex flex-col gap-y-4">
          <p>
            We are technology professionals using our talents to rally global public support for Ukraine, through the power of user generated video.
            We have a simple message: <strong>democracy is non-negotiable</strong>!
          </p>
          <div>
            Can you help? We need specialists in these areas:
            <ol className="list-disc list-inside">
              <li>
                Translation, especially Ukrainian, German, French, Japanese, Korean, Chinese,
                Spanish, Hebrew, and Turkish.
              </li>
              <li>Video editing (e.g., Premiere Pro and After Effects)</li>
              <li>Image editing (Photoshop)</li>
              <li>Illustration (e.g., Illustrator, Figma)</li>
              <li>Software development (Typescript, React, Next.js, CSS)</li>
              <li>UX & web design</li>
              <li>Copywriting</li>
            </ol>
          </div>
          <p>
            Contact Lily Dayton by <a href="lily.dayton.3@gmail.com">email</a> or on{" "}
            <a href="https://www.linkedin.com/in/lily-dayton/">LinkedIn</a> to learn more.
          </p>
        </div>
      </main>
    </>
  );
}
