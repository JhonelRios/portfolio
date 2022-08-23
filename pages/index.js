import Head from 'next/head';

import ProfileCard from '../components/ProfileCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <ProfileCard />
      </section>
    </>
  );
}
