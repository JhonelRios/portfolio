import { useState } from 'react';
import { SiGithub } from 'react-icons/si';
import { MdOutlineOpenInNew } from 'react-icons/md';

import styles from '../../styles/components/portfolio-card.module.css';

export default function PortfolioCard({ project = {} }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <article
      className={styles.card}
      style={{ backgroundImage: `url(/portfolio/${project.image})` }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && (
        <section className={styles.controls}>
          <div className={styles.title}>
            <h3>{project.name}</h3>

            <p>{project.description}</p>
          </div>

          <div className={styles.actions}>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <SiGithub />
            </a>

            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <MdOutlineOpenInNew />
            </a>
          </div>
        </section>
      )}
    </article>
  );
}
