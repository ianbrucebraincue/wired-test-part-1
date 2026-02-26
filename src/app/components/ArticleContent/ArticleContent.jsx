import styles from "./ArticleContent.module.css";

export default function ArticleContent({children}) {
  return (
    <section className={styles.articleContent}>
      {children}
    </section>
  );
}