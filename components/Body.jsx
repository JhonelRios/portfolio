import styles from '../styles/components/body.module.css';

export default function Body({ children }) {
  return <main className={styles.main}>{children}</main>;
}
