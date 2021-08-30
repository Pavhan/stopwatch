import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Offline</title>
        <meta name="description" content="Offline" />
        <link rel="icon" href="/favicon.ico" />
		<link rel='manifest' href='/manifest.json' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Offline !!!
        </h1>

        <p className={styles.description}>
		Nejste připojeni k internetu
        </p>
		</main>
    </div>
  )
}
