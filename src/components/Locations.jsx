import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiLocationMarker } from 'react-icons/hi';

const locations = [
  {
    city: 'Kathmandu',
    country: 'Nepal',
    status: 'Coming 2026',
    desc: 'Our flagship — where it all begins',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    status: 'Coming 2027',
    desc: 'Bringing Himalayan warmth to the heart of London',
  },
  {
    city: 'New York',
    country: 'United States',
    status: 'Coming 2027',
    desc: 'Premium chai experience in the city that never sleeps',
  },
];

export default function Locations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="locations" aria-label="CHAIVO locations" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-saffron text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Find Us
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-warm-brown mb-4">
            Opening Soon Near You
          </h2>
          <p className="text-warm-brown/60 max-w-xl mx-auto">
            We're expanding from the Himalayas to the world's greatest cities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 border border-saffron/5 hover:border-saffron/20"
            >
              <div className="w-14 h-14 bg-saffron/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                <HiLocationMarker className="text-2xl text-saffron" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-warm-brown mb-1">
                {loc.city}
              </h3>
              <p className="text-warm-brown/50 text-sm mb-3">{loc.country}</p>
              <p className="text-warm-brown/60 text-sm mb-4">{loc.desc}</p>
              <span className="inline-block bg-saffron/10 text-saffron text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full">
                {loc.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
