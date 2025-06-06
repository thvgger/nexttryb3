import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

      <Head>
        <title>Events App</title>
      </Head>

      <nav className={styles.navbar}>
        <div className={styles.logo}v>
          <a className={styles.givon} href="/">
            <Image src="/Trybe_logo.png" alt="Trybe Logo" width={70} height={40} />
          </a>
        </div>
      

        <div className={styles.links}>
          <a href='/'>Home</a>
          <a href='/events'>About</a>
          <a href='/about-us'>Games</a>
          <a href='/about-us'>Team</a>
        </div>

      </nav>

      <main className={styles.main}>
        {/* Your main content */}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}