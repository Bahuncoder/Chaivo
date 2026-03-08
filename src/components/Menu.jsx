import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const menuItems = [
  {
    name: 'Chaivo Classic',
    desc: 'Original Nepali milk chai — bold, creamy, timeless',
    price: '$5',
    icon: '☕',
  },
  {
    name: 'Chaivo Gold',
    desc: 'Ilam premium first flush — rare and refined',
    price: '$7',
    icon: '🏆',
  },
  {
    name: 'Chaivo Spice',
    desc: 'Himalayan masala blend — warm and aromatic',
    price: '$6',
    icon: '🌶️',
  },
  {
    name: 'Chaivo Zen',
    desc: 'Tulsi ginger wellness chai — soothe the soul',
    price: '$6',
    icon: '🍃',
  },
  {
    name: 'Chaivo Royal',
    desc: 'Saffron cardamom luxury chai — fit for royalty',
    price: '$9',
    icon: '👑',
  },
  {
    name: 'Chaivo Ice',
    desc: 'Cold brew chai modern twist — smooth and chill',
    price: '$6',
    icon: '🧊',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

function MenuCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-saffron/5 hover:border-saffron/20 cursor-pointer"
      role="article"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
        {item.icon}
      </div>
      <h3 className="font-heading text-xl font-bold text-warm-brown mb-2 group-hover:text-saffron transition-colors duration-300">
        {item.name}
      </h3>
      <p className="text-warm-brown/60 text-sm leading-relaxed mb-4">
        {item.desc}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-saffron font-bold text-lg" aria-label={`Price: ${item.price}`}>{item.price}</span>
        <span className="text-xs font-semibold tracking-wider uppercase text-saffron/0 group-hover:text-saffron transition-all duration-300">
          Add to order →
        </span>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: '-80px' });

  return (
    <section id="menu" aria-label="CHAIVO chai menu" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-saffron text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Our Menu
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-warm-brown mb-4">
            Crafted with Himalayan Soul
          </h2>
          <p className="text-warm-brown/60 max-w-xl mx-auto">
            Every cup tells a story — from the misty peaks of Nepal to a moment
            of warmth in your hands.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item, i) => (
            <MenuCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
