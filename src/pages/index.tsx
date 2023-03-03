/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

const previewUrl = "https://www.saluteukraine.com/";
const previewThumbnail =
  "https://res.cloudinary.com/dxjzrhogi/image/upload/v1677289933/salute-ukraine/stop-putin_ghpniw.webp";
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
        <header className="header flex flex-row p-4 pb-3 items-center text-center">
          <h1 className="headline text-3xl font-bold">Salute Ukraine!</h1>
        </header>
        <section className="hero w-full shadow-xl">
          <div className="text-xl flex flex-col items-center gap-y-4  p-4 font-bold ">
            <h2 className="text-xl text-center">
              We are technology professionals rallying global public support for Ukraine.
            </h2>
          </div>
        </section>
        <div className="grid grid-cols-1 p-8 pt-4">
          <div className="mb-3">
            <h3 className="font-bold text-xl">We need volunteers in these areas:</h3>
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
        <div className="contact text-xl p-4 shadow-xl rounded  w-full flex flex-col gap-y-2">
          <div className="text-center">Contact Lily Dayton to learn more!</div>
          <div className="pl-8 pr-8 self-center">
            <ul className="list-disc list-inside items-start">
              <li>
                <a
                  className="underline"
                  href="https://www.youtube.com/channel/UCLNXzp2NKjrEfmWjTJJykcA"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.linkedin.com/in/lily-dayton/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.facebook.com/profile.php?id=100090066385190"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a className="underline" href="mailto:lily.dayton.3@gmail.com">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
