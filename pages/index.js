import Head from "next/head";

import Link from "next/link";

import styles from "../styles/Home.module.scss";

import stars from "../styles/Stars.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dreams</title>
        <meta
          name="description"
          content="Generated by create next app"
          lang="en"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={stars.starsBox}>
        <div className={stars.stars1}></div>
        <div className={stars.stars2}></div>
        <div className={stars.stars3}></div>
      </div>
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
