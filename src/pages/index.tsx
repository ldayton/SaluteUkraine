import Head from "next/head";
import Image from "next/image";

const title = "Salute Ukraine!";
const tagline = "Send your message of support now.";
const socialTitle = title + " " + tagline;
const url = "https://www.saluteukraine.com";
const thumbnail = "https://www.saluteukraine.com/favicon.ico";
const description = "Send your love & support to Ukraine. Record your message now.";

export default function Flag() {
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
              <li>Software development (React + Next.js)</li>
              <li>
                Translation, especially Ukrainian, German, French, Japanese, Korean, Chinese,
                Spanish, Hebrew, and Turkish.
              </li>
              <li>Video editing</li>
              <li>Image editing & illustration</li>
              <li>UX & web design</li>
            </ol>
          </div>
          <div>
            <Image
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
                <a className="underline" href="lily.dayton.3@gmail.com">
                  Email
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
                  href="https://www.facebook.com/profile.php?id=100090066385190">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
