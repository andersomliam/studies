import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Curso Next.js</title>
        <meta name="keywords" content="Next, React, Node, Typescript, Javascritp" />
        <meta name="description" content="Lima Anderson - Desenvolvedor Front-End Javascript" />
      </Head>

      <h1 className={styles.title}>Hello Next.js</h1>
    </>
  )
}
