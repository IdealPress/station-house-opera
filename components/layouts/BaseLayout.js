import Head from "next/head";

import { Navigation, Footer } from "components";

import styles from "./BaseLayout.module.css";

export default function BaseLayout({ children }) {
  return (
    <div className={styles.base}>
      <Head>
        <title>Station House Opera</title>
        <meta
          name="description"
          content="Station House Opera website description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
