import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Button } from "@mui/material";
import { Webcam } from "@/lib/webcam";

const title = "Salute Ukraine!";
const tagline = "Send your message of support now.";
const socialTitle = title + " " + tagline;
const url = "https://www.saluteukraine.com";
const thumbnail = "https://";
const description = "Send your love & support to Ukraine. Record your message now.";

export default function Home() {
  return (
    <>
      <Head>
        <title>Salute Ukraine! Send your love & support</title>
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
      <main className={styles.main}>
        <div>Salute Ukraine!</div>
        <video width={500} height={500} className="video border-2 border-black border-double" />
        <Button onClick={recordMessage} variant="outlined">
          Record Your Message
        </Button>
      </main>
    </>
  );
}

function recordMessage() {
  const webcam = new Webcam();
  webcam.requestPermission();
}
