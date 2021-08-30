import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Page.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>O běhu</title>
        <meta name="description" content="O běhu" />
        <link rel="icon" href="/favicon.ico" />
		<link rel='manifest' href='/manifest.json' />
      </Head>

      <main className={styles.main}>
		  <ul className={styles.menu}>
			  <li><Link href="/">Domů</Link></li>
			  <li><Link href="/about">O nás</Link></li>
			</ul>
        <h1 className={styles.title}>
          O běhu
        </h1>

        <p className={styles.description}>
		Odměny pro první 3 závodníky každé kategorie
        </p>
		<Image src="/about.jpg" alt="o nás" width="800" height="533" />
      </main>
    </div>
  )
}
