import PortfolioCard from './PortfolioCard';

import styles from '../../styles/components/portfolio-grid.module.css';

export default function PortfolioGrid({ projectsList = [] }) {
  return (
    <section className={styles.container}>
      {projectsList.map(project => (
        <PortfolioCard project={project} key={project.id} />
      ))}
    </section>
  );
}
