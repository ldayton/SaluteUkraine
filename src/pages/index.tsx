import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Salute Ukraine! Send your love & support</title>
        <meta
          name="description"
          content="Send your love & support to Ukraine. Record your message now."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
    </>
  );
}
