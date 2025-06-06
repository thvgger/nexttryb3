import Head from "next/head";
import Image from "next/image";
import styles from './page.module.css';
import Link from "next/link"
import ghostmw3 from './ghostmw3.jpg';

export default function Home() {
  return (
    <div className={styles.page}>

      <Head>
        <title>Practicing NextJS</title>
      </Head>

      <div className="nav">
        <Image src="/Trybe_logo.png" width={100} height={50} alt="Logo" />
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/">Games</Link>
          <Link href="/">Devs</Link>
        </nav>
        <button className="contact-btn">Contact Us</button>
      </div>

      <main className={styles.main}>
        <div className={styles.hero}>
          <Image
            src={ghostmw3}
            alt="Hero"
            width={1200}
            height={400}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
            style={{ width: '100%', height: 'auto'}}
          />
          <div className={styles.hero_contents}>
            <h1>Ìjáyà</h1>
            <p>
              Experience the next generation of African storytelling in gaming.
            </p>
            <Link href="/" className={styles.hero_btn}>View More</Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}