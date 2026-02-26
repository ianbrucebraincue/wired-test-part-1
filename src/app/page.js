import styles from "./page.module.css";
import Header from './components/Header/Header.jsx';
import ParallaxHeroImage from './components/ParallaxHeroImage/ParallaxHeroImage.jsx';
import ArticleContent from './components/ArticleContent/ArticleContent.jsx';
import IntroSection from './components/IntroSection/IntroSection.jsx';
import FontsShowcase from "./components/FontsShowcase/FontsShowcase.jsx";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <ParallaxHeroImage />

        <ArticleContent>
          <IntroSection />
          <FontsShowcase /> 
        </ArticleContent>
      </main>
    </div>
  );
}
