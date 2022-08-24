import Head from 'next/head';
import { projectsList } from '../utils/projectsList';

import PortfolioGrid from '../components/Portfolio/PortfolioGrid';

export default function Projects() {
  return (
    <>
      <Head>
        <title>My projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h2>Projects</h2>

        <PortfolioGrid projectsList={projectsList} />
      </section>
    </>
  );
}
