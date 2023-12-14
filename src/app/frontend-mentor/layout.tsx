import styles from "./styles.module.css";

export default function FrontendPracticeLayout({ children }: { children: React.ReactNode }) {
  return <main className={styles.main}>{children}</main>;
}
