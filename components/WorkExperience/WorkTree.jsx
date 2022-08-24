import WorkCard from './WorkCard';

import styles from '../../styles/components/work-tree.module.css';

export default function WorkTree({ worksList = [] }) {
  return (
    <article className={styles.tree}>
      {worksList.map(work => (
        <>
          <div
            className={styles.dot_container}
            style={{ order: work.id - 1 }}
            key={work.id}
          >
            <div className={styles.dot} />
          </div>

          <article
            className={work.id % 2 !== 0 ? styles.right : styles.left}
            style={{ order: work.id % 2 !== 0 ? work.id - 1 : work.id - 2 }}
            key={work.id}
          >
            <WorkCard work={work} />
          </article>
        </>
      ))}
    </article>
  );
}
