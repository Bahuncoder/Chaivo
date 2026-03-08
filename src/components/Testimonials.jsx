import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Food Blogger',
    location: 'Kathmandu',
    rating: 5,
    text: 'The Chaivo Royal is unlike anything I\'ve ever tasted. The saffron cardamom blend is luxurious — it\'s like drinking liquid gold. This is what premium chai should taste like.',
  },
  {
    name: 'James Mitchell',
    role: 'Tea Enthusiast',
    location: 'London',
    rating: 5,
    text: 'As someone who\'s tried chai from every corner of the world, CHAIVO is genuinely special. The Ilam Gold has this incredible depth of flavor that you simply can\'t find anywhere else.',
  },
  {
    name: 'Anisha Gurung',
    role: 'Wellness Coach',
    location: 'New York',
    rating: 5,
    text: 'Chaivo Zen has become my daily ritual. The tulsi and ginger combination is perfect — warming, grounding, and authentically Nepali. It\'s not just tea, it\'s self-care.',
  },
  {
    name: 'David Thapa',
    role: 'Restaurateur',
    location: 'Pokhara',
    rating: 5,
    text: 'I grew up drinking chai in the hills of Nepal. CHAIVO brings that exact warmth and nostalgia, elevated to an international standard. My family is proud of what they\'ve built.',
  },
  {
    name: 'Sophie Chen',
    role: 'Travel Writer',
    location: 'Singapore',
    rating: 5,
    text: 'I first tried CHAIVO at a pop-up in Singapore and was hooked instantly. The masala spice blend is perfectly balanced — bold but never overpowering. Can\'t wait for a permanent location.',
  },
  {
    name: 'Rajan Koirala',
    role: 'Tea Farmer',
    location: 'Ilam, Nepal',
    rating: 5,
    text: 'CHAIVO doesn\'t just buy our tea — they understand it. They visit our gardens, know our families. This is how Nepali chai should reach the world — with respect and authenticity.',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(rating)].map((_, i) => (
        <FaStar key={i} className="text-saffron text-sm" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section aria-label="Customer testimonials" className="py-24 md:py-32 bg-warm-brown">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-saffron text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            What People Say
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream mb-4">
            Loved Around the World
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto">
            From Nepali tea farmers to London food critics — hear what our community says about CHAIVO.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-cream/5 hover:border-saffron/20 transition-all duration-500"
            >
              <FaQuoteLeft className="text-saffron/30 text-2xl mb-4" />
              <StarRating rating={t.rating} />
              <p className="text-cream/70 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-saffron/20 flex items-center justify-center">
                  <span className="text-saffron font-bold text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <cite className="text-cream text-sm font-semibold not-italic block">{t.name}</cite>
                  <span className="text-cream/40 text-xs">{t.role} · {t.location}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
