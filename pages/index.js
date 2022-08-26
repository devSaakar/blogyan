import Head from 'next/head'
import Image from 'next/image'
import EnrolledList from '../src/components/EnrolledList'
import OnboardForm from '../src/components/OnboardForm'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blogyan</title>
        <meta name="description" content="Blogyan is an community to share your knowledge of Web Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Blogyan!</a>
        </h1>

        <OnboardForm />
        <EnrolledList />
      </main>
    </div>
  )
}
