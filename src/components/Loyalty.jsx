import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { GiTeapot } from 'react-icons/gi';
import { HiStar, HiGift, HiSparkles } from 'react-icons/hi';

const tiers = [
  {
    name: 'Seedling',
    icon: HiSparkles,
    range: '0 – 99 pts',
    perks: ['Free chai on your birthday', 'Early access to new blends', 'Member-only newsletter'],
    color: 'forest',
  },
  {
    name: 'Blossom',
    icon: HiGift,
    range: '100 – 499 pts',
    perks: ['Everything in Seedling', 'Free upgrade to large', '10% off merchandise', 'Invite to tasting events'],
    color: 'saffron',
  },
  {
    name: 'Summit',
    icon: HiStar,
    range: '500+ pts',
    perks: ['Everything in Blossom', 'Free chai every 5th visit', 'Priority ordering', 'Exclusive Summit blends', 'Annual Ilam tea garden tour lottery'],
    color: 'terracotta',
  },
];

export default function Loyalty() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section aria-label="CHAIVO Rewards loyalty program" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-saffron text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Chaivo Rewards
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-warm-brown mb-4">
            Every Sip, Rewarded
          </h2>
          <p className="text-warm-brown/60 max-w-xl mx-auto">
            Join CHAIVO Rewards and earn points with every purchase. Climb from
            Seedling to Summit and unlock exclusive perks along the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
              className={`bg-white rounded-2xl p-8 border-2 transition-all duration-500 hover:shadow-xl ${
                i === 2 ? 'border-saffron shadow-lg' : 'border-saffron/10'
              }`}
            >
              <tier.icon className={`text-3xl mb-4 text-${tier.color}`} />
              <h3 className="font-heading text-2xl font-bold text-warm-brown mb-1">
                {tier.name}
              </h3>
              <p className="text-saffron text-sm font-semibold mb-5">{tier.range}</p>
              <ul className="space-y-3">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-warm-brown/70 text-sm">
                    <GiTeapot className="text-saffron text-sm mt-0.5 flex-shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/coming-soon"
            className="inline-block bg-saffron text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-saffron-dark transition-all duration-300 hover:shadow-lg hover:shadow-saffron/30"
          >
            Join Chaivo Rewards — It's Free
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
