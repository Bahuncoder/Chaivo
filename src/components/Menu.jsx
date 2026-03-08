import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const menuItems = [
  {
    name: 'Chaivo Classic',
    desc: 'Original Nepali milk chai — bold, creamy, timeless',
    ingredients: 'Ilam black tea, whole milk, cane sugar, cardamom',
    badges: ['vegetarian'],
    cal: '120 cal',
    sizes: { S: '$4', M: '$5', L: '$6' },
    price: '$5',
    icon: '☕',
  },
  {
    name: 'Chaivo Gold',
    desc: 'Ilam premium first flush — rare and refined',
    ingredients: 'First flush Ilam tea, spring water, raw honey',
    badges: ['vegan', 'organic'],
    cal: '50 cal',
    sizes: { S: '$6', M: '$7', L: '$8' },
    price: '$7',
    icon: '🏆',
  },
  {
    name: 'Chaivo Spice',
    desc: 'Himalayan masala blend — warm and aromatic',
    ingredients: 'CTC tea, ginger, cinnamon, cloves, black pepper, milk',
    badges: ['vegetarian', 'spicy'],
    cal: '130 cal',
    sizes: { S: '$5', M: '$6', L: '$7' },
    price: '$6',
    icon: '🌶️',
  },
  {
    name: 'Chaivo Zen',
    desc: 'Tulsi ginger wellness chai — soothe the soul',
    ingredients: 'Holy basil, ginger root, lemongrass, green tea, honey',
    badges: ['vegan', 'caffeine-light'],
    cal: '40 cal',
    sizes: { S: '$5', M: '$6', L: '$7' },
    price: '$6',
    icon: '🍃',
  },
  {
    name: 'Chaivo Royal',
    desc: 'Saffron cardamom luxury chai — fit for royalty',
    ingredients: 'Kashmiri saffron, green cardamom, Ilam tea, whole milk, raw cane sugar',
    badges: ['vegetarian', 'premium'],
    cal: '150 cal',
    sizes: { S: '$8', M: '$9', L: '$11' },
    price: '$9',
    icon: '👑',
  },
  {
    name: 'Chaivo Ice',
    desc: 'Cold brew chai modern twist — smooth and chill',
    ingredients: 'Cold-steeped Ilam tea, oat milk, vanilla, ice',
    badges: ['vegan', 'gluten-free'],
    cal: '90 cal',
    sizes: { S: '$5', M: '$6', L: '$7' },
    price: '$6',
    icon: '🧊',
  },
];

const badgeStyles = {
  vegan: 'bg-forest/10 text-forest',
  vegetarian: 'bg-forest/10 text-forest',
  organic: 'bg-forest/10 text-forest',
  'gluten-free': 'bg-saffron/10 text-saffron-dark',
  'caffeine-light': 'bg-saffron/10 text-saffron-dark',
  spicy: 'bg-terracotta/10 text-terracotta',
  premium: 'bg-saffron/10 text-saffron-dark',
};

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
      <p className="text-warm-brown/60 text-sm leading-relaxed mb-2">
        {item.desc}
      </p>
      {item.badges && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {item.badges.map((badge) => (
            <span key={badge} className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${badgeStyles[badge] || 'bg-cream text-warm-brown/50'}`}>
              {badge}
            </span>
          ))}
        </div>
      )}
      {item.ingredients && (
        <p className="text-warm-brown/40 text-xs mb-3 leading-relaxed">
          <span className="font-semibold text-warm-brown/50">Ingredients:</span> {item.ingredients}
        </p>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {item.sizes ? (
            Object.entries(item.sizes).map(([size, price]) => (
              <span key={size} className="text-xs text-warm-brown/50">
                <span className="font-semibold">{size}</span> {price}
              </span>
            ))
          ) : (
            <span className="text-saffron font-bold text-lg" aria-label={`Price: ${item.price}`}>{item.price}</span>
          )}
        </div>
        <span className="text-[10px] text-warm-brown/30">{item.cal}</span>
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
