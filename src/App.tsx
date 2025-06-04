import HeroSection from './components/hero.tsx';
import AboutSection from './components/hero.tsx';
import { AchievementsTimeline } from './components/AchievementsTimeline.tsx';
import { CertificationsGrid } from './components/AchievementsTimeline.tsx';
import { ArticlesSection } from './components/ArticlesSection';

function App() {
  return (
    <main className="bg-[#0e0e10] text-gray-100 font-sans">
      <HeroSection />
      <AboutSection />
      <AchievementsTimeline />
      <CertificationsGrid />
      <ArticlesSection />
      {/* Next sections here */}
    </main>
  );
}

export default App;