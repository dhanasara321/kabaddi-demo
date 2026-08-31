import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveMatch from './components/LiveMatch';
import UpcomingMatches from './components/UpcomingMatches';
import Teams from './components/Teams';
import Players from './components/Players';
import Leaderboard from './components/Leaderboard';
import Highlights from './components/Highlights';
import News from './components/News';
import Statistics from './components/Statistics';
import StadiumSection from './components/StadiumSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import CustomCursor from './components/primitives/CustomCursor';
import NoiseOverlay from './components/primitives/NoiseOverlay';

function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <NoiseOverlay />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <LiveMatch />
        <UpcomingMatches />
        <Teams />
        <Players />
        <Leaderboard />
        <Highlights />
        <News />
        <Statistics />
        <StadiumSection />
        <CTA />
      </main>
      <Footer />
      <MobileNav />
      <div className="h-16 lg:hidden" />
    </div>
  );
}

export default App;
