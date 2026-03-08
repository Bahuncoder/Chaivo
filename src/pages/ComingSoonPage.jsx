import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { GiTeapot } from 'react-icons/gi';
import SEO from '../components/SEO';

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

  function calcTimeLeft() {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}

export default function ComingSoonPage() {
  const countdown = useCountdown('2026-12-01T00:00:00');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <SEO
        title="Coming Soon — The World's First Premium Himalayan Chai Chain"
        description="CHAIVO is launching soon. Be the first to experience authentic Nepali Himalayan chai. Sign up for early access and launch updates. Opening in Kathmandu, London & New York."
        path="/coming-soon"
      />
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-warm-brown/90 to-dark" />
        <svg
          className="absolute bottom-0 w-full opacity-30"
          viewBox="0 0 1440 500"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 500V350L100 300L250 380L400 200L550 320L700 120L850 280L1000 80L1150 200L1300 150L1440 250V500H0Z"
            fill="#E8834A"
            fillOpacity="0.15"
          />
          <path
            d="M0 500V400L200 350L400 420L600 280L800 380L1000 200L1200 320L1440 280V500H0Z"
            fill="#1a0e08"
            fillOpacity="0.5"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <GiTeapot className="text-saffron text-4xl animate-pulse-glow" />
            <span className="font-heading text-4xl md:text-5xl font-bold text-cream tracking-wider">
              CHAIVO
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-saffron/80 text-sm tracking-[0.3em] uppercase font-semibold mb-6"
        >
          The World's First Premium Himalayan Chai Chain
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-3xl md:text-5xl font-bold text-cream mb-12"
        >
          Something Extraordinary <br />
          <span className="text-saffron">Is Brewing</span>
        </motion.h1>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4 sm:gap-8 mb-14"
        >
          {Object.entries(countdown).map(([label, value]) => (
            <div key={label} className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cream/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-cream/10 mb-2">
                <span className="font-heading text-2xl sm:text-3xl font-bold text-cream">
                  {String(value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-cream/40 text-xs uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Email signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-md mx-auto mb-12"
        >
          {subscribed ? (
            <div className="bg-forest/20 rounded-full px-6 py-4 text-cream">
              🙏 Dhanyabad! You'll be the first to know.
            </div>
          ) : (
            <>
              <p className="text-cream/50 text-sm mb-4">
                Be first to know when we open
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3.5 bg-cream/10 backdrop-blur-sm rounded-full text-cream placeholder:text-cream/30 border border-cream/10 focus:border-saffron/40 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-saffron px-6 py-3.5 rounded-full font-semibold text-white hover:bg-saffron-dark transition-all duration-300 hover:shadow-lg hover:shadow-saffron/30"
                >
                  Notify Me
                </button>
              </form>
            </>
          )}
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center gap-4"
        >
          {[
            { icon: FaInstagram, label: 'Instagram' },
            { icon: FaTiktok, label: 'TikTok' },
            { icon: FaFacebookF, label: 'Facebook' },
          ].map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="w-12 h-12 bg-cream/10 backdrop-blur-sm rounded-full flex items-center justify-center text-cream/60 hover:bg-saffron hover:text-white transition-all duration-300 border border-cream/10"
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
