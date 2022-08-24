import styles from '../../styles/components/work-card.module.css';

export default function WorkCard({ work }) {
  const workEndDate = work.endDate || 'Current';

  return (
    <article className={styles.card}>
      <img src={work.iconSrc} alt={work.name} />

      <div className={styles.title}>
        <h3>{work.name}</h3>

        <h4>{work.charge}</h4>
      </div>

      <div className={styles.description}>
        <small>
          {work.startDate} - {workEndDate}
        </small>

        <p>{work.description}</p>
      </div>
    </article>
  );
}
