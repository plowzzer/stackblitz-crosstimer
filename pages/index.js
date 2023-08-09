import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Main from './components/main';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Main />
    </div>
  );
}
