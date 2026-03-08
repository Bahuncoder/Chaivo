import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import OurStoryPage from './pages/OurStoryPage';
import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage';
import ComingSoonPage from './pages/ComingSoonPage';
import CareersPage from './pages/CareersPage';
import FranchisePage from './pages/FranchisePage';
import BlogPage from './pages/BlogPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

function AnimatedPage({ children }) {
  return (
    <motion.div {...pageTransition}>
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      <LoadingScreen />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
          <Route path="/menu" element={<AnimatedPage><MenuPage /></AnimatedPage>} />
          <Route path="/our-story" element={<AnimatedPage><OurStoryPage /></AnimatedPage>} />
          <Route path="/locations" element={<AnimatedPage><LocationsPage /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
          <Route path="/coming-soon" element={<AnimatedPage><ComingSoonPage /></AnimatedPage>} />
          <Route path="/careers" element={<AnimatedPage><CareersPage /></AnimatedPage>} />
          <Route path="/franchise" element={<AnimatedPage><FranchisePage /></AnimatedPage>} />
          <Route path="/journal" element={<AnimatedPage><BlogPage /></AnimatedPage>} />
          <Route path="/privacy" element={<AnimatedPage><PrivacyPage /></AnimatedPage>} />
          <Route path="/terms" element={<AnimatedPage><TermsPage /></AnimatedPage>} />
          <Route path="*" element={<AnimatedPage><NotFoundPage /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <CookieConsent />
    </>
  );
}

export default App;
