import styles from '../styles/components/profile-card.module.css';

import { SiLinkedin, SiGithub } from 'react-icons/si';

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

        <footer className={styles.footer}>
          <a
            href="https://www.linkedin.com/in/jhonelrios/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin />
          </a>

          <a
            href="https://github.com/JhonelRios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </a>
        </footer>
      </div>
    </article>
  );
}
