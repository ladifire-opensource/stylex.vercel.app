import Head from 'next/head';
// import styles from '../styles/Home.module.css';

import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
    logo: {
        height: "1em"
    },
    container: {
        minHeight: "100vh",
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    main: {
        paddingTop: "5rem",
        paddingBottom: "5rem",
        paddingLeft: 0,
        paddingRight: 0,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        margin: 0,
        lineHeight: 1.15,
        fontSize: "4rem",
        textAlign: "center",
    },
    description: {
        textAlign: "center",
        lineHeight: 1.5,
        fontSize: "1.5rem"
    },
    code: {},
    grid: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: 800,
        marginTop: "3rem"
    },
    card: {
        margin: "1rem",
        flexBasis: "45%",
        padding: "1.5rem",
        textAlign: "left",
        border: "1px solid #eaeaea"
    },
    footer: {},
});

export default function Home() {
  return (
    <div className={stylex(styles.container)}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={stylex(styles.main)}>
        <h1 className={stylex(styles.title)}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={stylex(styles.description)}>
          Get started by editing{' '}
          <code className={stylex(styles.code)}>pages/index.js</code>
        </p>

        <div className={stylex(styles.grid)}>
          <a href="https://nextjs.org/docs" className={stylex(styles.card)}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={stylex(styles.card)}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={stylex(styles.card)}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={stylex(styles.card)}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={stylex(styles.footer)}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={stylex(styles.logo)} />
        </a>
      </footer>
    </div>
  )
}
