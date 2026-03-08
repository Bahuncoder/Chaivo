import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.3 }}
      onAnimationComplete={() => setLoading(false)}
      className="fixed inset-0 z-[200] bg-dark flex flex-col items-center justify-center"
    >
      {/* Logo animation */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center gap-3 mb-6"
      >
        <img src="/chaivo-logo.svg" alt="" className="w-12 h-12" />
        <span className="font-heading text-4xl font-bold text-cream tracking-wider">
          CHAIVO
        </span>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-saffron/60 text-sm tracking-[0.3em] uppercase"
      >
        Born in the Himalayas
      </motion.p>

      {/* Loading bar */}
      <motion.div
        className="mt-8 w-48 h-0.5 bg-cream/10 rounded-full overflow-hidden"
      >
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
          className="h-full bg-saffron rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
