import styles from '../styles/components/profile-card.module.css';

export default function ProfileCard() {
  return (
    <article className={styles.card}>
      <img src="/profile.png" alt="Jhonel's picture" />

      <div className={styles.description}>
        <h2>Hi!</h2>
        <h2>
          I'm <span>Jhonel.</span>
        </h2>

        <p>
          I am a creative and self-taught web developer. I want to continue learning about
          web development and improve my knowledge into topics such as SEO, accessibility
          and web performance.
        </p>
      </div>
    </article>
  );
}
