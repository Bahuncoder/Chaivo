import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { to: '/menu', label: 'Menu' },
    { to: '/our-story', label: 'Our Story' },
    { to: '/locations', label: 'Locations' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      aria-label="Main navigation"
      role="navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/chaivo-logo.svg" alt="CHAIVO" className="w-8 h-8" />
            <span className={`font-heading text-2xl font-bold tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-warm-brown' : 'text-cream'
            }`}>
              CHAIVO
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-saffron ${
                  scrolled ? 'text-warm-brown' : 'text-cream'
                } ${location.pathname === link.to ? 'text-saffron' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/coming-soon"
              className="bg-saffron text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-saffron-dark transition-all duration-300 hover:shadow-lg hover:shadow-saffron/30"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden text-2xl transition-colors duration-300 ${
              scrolled ? 'text-warm-brown' : 'text-cream'
            }`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cream/98 backdrop-blur-lg border-t border-saffron/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block text-base font-medium tracking-wide transition-colors hover:text-saffron ${
                    location.pathname === link.to ? 'text-saffron' : 'text-warm-brown'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/coming-soon"
                className="block text-center bg-saffron text-white px-6 py-3 rounded-full font-semibold tracking-wide hover:bg-saffron-dark transition-all duration-300 mt-4"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
