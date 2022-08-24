import Head from 'next/head';

import ProfileCard from '../components/ProfileCard';
import WorkTree from '../components/WorkExperience/WorkTree';

import { worksList } from '../utils/worksList';

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

      <section>
        <h2>Experience</h2>

        <WorkTree worksList={worksList} />
      </section>
    </>
  );
}
