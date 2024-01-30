import styles from "./styles.module.css";

export default function FrontendPracticeComponentsLayout({ children }: { children: React.ReactNode }) {
  return <main className={styles.main}>{children}</main>;
}
