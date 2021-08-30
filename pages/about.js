import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>O běhu</title>
        <meta name="description" content="O běhu" />
        <link rel="icon" href="/favicon.ico" />
		<link rel='manifest' href='/manifest.json' />
      </Head>

      <main className={styles.main}>
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
