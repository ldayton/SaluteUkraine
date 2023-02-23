import Head from "next/head";
import Image from "next/image";
import saveUkrainianChildrenPic from "public/save-ukrainian-children.webp";

const title = "Salute Ukraine!";
const tagline = "Send your message of support now.";
const socialTitle = title + " " + tagline;
const url = "https://www.saluteukraine.com";
const thumbnail = "https://";
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
      <main className="flex flex-col items-center gap-y-4 bg-white">
        <header className="header flex flex-row p-8 pb-6">
          <h1 className="headline text-5xl font-bold">Salute Ukraine!</h1>
        </header>
        <section className="hero w-full shadow-xl">
          <div className="text-xl flex flex-col items-center gap-y-4  p-12 font-bold ">
            <h2 className="text-2xl">
              We are technology professionals rallying global public support for Ukraine.
            </h2>
          </div>
        </section>
        <div className="grid grid-cols-2 p-12 pt-8 pb-8">
          <div>
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
              src={saveUkrainianChildrenPic}
              alt="Girl draped in Ukrainian flag holding sign saying 'Save Ukrainian Children'"
            />
          </div>
        </div>
        <div className="contact text-2xl p-8 shadow-xl rounded">
          Contact Lily Dayton by{" "}
          <a className="underline" href="lily.dayton.3@gmail.com">
            email
          </a>{" "}
          or on{" "}
          <a className="underline" href="https://www.linkedin.com/in/lily-dayton/">
            LinkedIn
          </a>{" "}
          to learn more.
        </div>
      </main>
    </>
  );
}
