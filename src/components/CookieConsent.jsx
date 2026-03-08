import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('chaivo-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('chaivo-cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('chaivo-cookie-consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-dark/95 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-cream/10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="flex-1">
                <h3 className="text-cream font-semibold text-base mb-1">We Value Your Privacy 🍵</h3>
                <p className="text-cream/50 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                  By clicking "Accept All", you consent to our use of cookies.{' '}
                  <a href="/privacy" className="text-saffron hover:underline">Read our Privacy Policy</a>.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={decline}
                  className="px-5 py-2.5 rounded-full text-sm font-medium text-cream/60 border border-cream/20 hover:border-cream/40 transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={accept}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold bg-saffron text-white hover:bg-saffron-dark transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
