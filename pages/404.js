import Head from 'next/head'
import styles from '../styles/Page.module.css'

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Strána neexistuje</title>
        <meta name="description" content="Strána neexistuje" />
        <link rel="icon" href="/favicon.ico" />
		<link rel='manifest' href='/manifest.json' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
		Strána neexistuje
        </h1>

        <p className={styles.description}>
         Sorry, jako!
        </p>
      </main>
    </div>
  )
}
