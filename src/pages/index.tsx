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
        <header className="header flex flex-row p-4 pb-3 items-center text-center shadow">
          <h1 className="headline text-4xl font-bold">Salute Ukraine!</h1>
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
            <Icon
              name="Telegram"
              path="icons/telegram_syolpz.svg"
              href="https://t.me/SaluteUkraine"
            />
            <Icon
              name="YouTube"
              path="icons/youtube_hvxem0.svg"
              href="https://www.youtube.com/channel/UCLNXzp2NKjrEfmWjTJJykcA"
            />
            <Icon
              name="LinkedIn"
              path="icons/linkedin_togz5a.svg"
              href="https://www.linkedin.com/in/lily-dayton/"
            />
            <Icon
              name="Facebook"
              path="icons/facebook_s2xkqt.svg"
              href="https://www.facebook.com/profile.php?id=100090066385190"
            />
            <Icon
              name="E-Mail"
              path="icons/email_vwkeyr.svg"
              href="mailto:lily.dayton.3@gmail.com"
            />
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
        <div className="contact text-xl p-4 shadow-xl rounded  w-full flex flex-col gap-y-2">
          <div className="text-center">
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
  path: string;
};

function Icon({ href, name, path }: IconProps) {
  const size = 40;
  return (
    <div className="flex flex-col items-center text-center" style={{ width: 70, height: 70 }}>
      <a className="flex flex-col items-center w-full h-full justify-between" href={href} target="_blank">
        <img
          src={`https://res.cloudinary.com/dxjzrhogi/image/upload/w_${size},h_${size},c_fill/v1677879795/salute-ukraine/${path}`}
          alt={`${name} Logo`}
          width={size}
          height={size}
        />
        <div>{`${name}`}</div>
      </a>
    </div>
  );
}
