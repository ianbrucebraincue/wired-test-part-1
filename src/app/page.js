import styles from "./page.module.css";
import Header from './components/header/Header.jsx';
import FontShowcase from "./components/fontsShowcase/FontsShowcase.jsx";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <FontShowcase />
      </main>
    </div>
  );
}
