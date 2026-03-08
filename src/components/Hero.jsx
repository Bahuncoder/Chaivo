import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header role="banner" aria-label="CHAIVO hero section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-warm-brown to-dark" />
        {/* Mountain silhouette SVG */}
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 400V250L120 200L240 280L360 150L480 220L600 100L720 180L840 80L960 160L1080 60L1200 140L1320 120L1440 200V400H0Z"
            fill="#1a0e08"
            fillOpacity="0.6"
          />
          <path
            d="M0 400V300L180 260L360 320L540 200L720 280L900 160L1080 240L1260 180L1440 260V400H0Z"
            fill="#1a0e08"
            fillOpacity="0.4"
          />
        </svg>
        {/* Saffron warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-saffron/20 via-transparent to-terracotta/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-saffron text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6">
            Premium Nepali Himalayan Chai Experience
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight mb-8"
        >
          Born in the Himalayas.
          <br />
          <span className="text-saffron">Brewed for the World.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-cream/70 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          From the mist-covered gardens of Ilam to your cup — discover the world's
          finest Himalayan chai, crafted with centuries of Nepali tradition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/menu"
            className="bg-saffron text-white px-8 py-4 rounded-full font-semibold text-base tracking-wide hover:bg-saffron-dark transition-all duration-300 hover:shadow-xl hover:shadow-saffron/30 hover:-translate-y-0.5"
          >
            Explore Menu
          </Link>
          <Link
            to="/our-story"
            className="border-2 border-cream/40 text-cream px-8 py-4 rounded-full font-semibold text-base tracking-wide hover:bg-cream/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Our Story
          </Link>
        </motion.div>

        {/* Floating Chai Cup with Steam */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative animate-float">
            {/* Steam wisps */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-1 h-8 bg-cream/30 rounded-full animate-steam" />
              <div className="w-1.5 h-10 bg-cream/20 rounded-full animate-steam-delay" />
              <div className="w-1 h-6 bg-cream/25 rounded-full animate-steam-delay-2" />
            </div>
            {/* Cup */}
            <div className="text-6xl md:text-7xl">🍵</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-2.5 bg-saffron rounded-full" />
        </motion.div>
      </motion.div>
    </header>
  );
}
