import Head from "next/head";

import Link from "next/link";
import Stars from "../components/stars/stars.component";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dreams</title>
        <meta
          name="description"
          content="Dream workshop"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Stars />

      <div className={styles.container}>
        <div className={styles.headingsBox}>
          <h1 className={styles.heading}> Welcome </h1>
          <h3 className={styles.headingThree}> to dream workshop </h3>
        </div>

        <div className={styles.linksContainer}>
          <Link href="/write" className={styles.linkBoxWrite}>
            <p> Write your own dream </p>
          </Link>
          <div className={styles.prophecy}></div>
          <Link href="/dreams" className={styles.linkBoxRead}>
            <p> Read other people&apos;s dreams </p>
          </Link>
        </div>
      </div>
    </>
  );
}
