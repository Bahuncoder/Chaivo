import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiLocationMarker, HiClock, HiHeart } from 'react-icons/hi';
import SEO from '../components/SEO';

const positions = [
  {
    title: 'Chai Artisan (Barista)',
    type: 'Full-Time',
    location: 'Kathmandu, Nepal',
    description:
      'Craft exceptional chai experiences for every guest. You\'ll master our signature blends, create latte art, and bring the CHAIVO spirit to life behind the bar.',
    perks: ['Competitive pay + tips', 'Free chai every shift', 'Health insurance', 'Career growth path'],
  },
  {
    title: 'Store Manager',
    type: 'Full-Time',
    location: 'Kathmandu, Nepal',
    description:
      'Lead a team of passionate chai artisans. You\'ll manage daily operations, uphold our quality standards, and create a welcoming space that feels like a Himalayan retreat.',
    perks: ['Salary + performance bonus', 'Full benefits package', 'Equity options', 'Leadership training'],
  },
  {
    title: 'Brand & Marketing Lead',
    type: 'Full-Time',
    location: 'Remote / Kathmandu',
    description:
      'Shape how the world discovers CHAIVO. You\'ll lead campaigns, manage our social presence, partner with creators, and build our brand across global markets.',
    perks: ['Flexible remote work', 'Creative autonomy', 'Travel opportunities', 'Equity options'],
  },
  {
    title: 'Tea Sourcing Specialist',
    type: 'Full-Time',
    location: 'Ilam, Nepal',
    description:
      'Work directly with Nepali tea farmers to source the finest leaves. You\'ll build relationships, ensure quality standards, and support ethical sourcing practices.',
    perks: ['Ilam-based role', 'Travel to tea gardens', 'Direct farmer partnerships', 'Impact-driven work'],
  },
];

const values = [
  { icon: '🏔️', title: 'Rooted in Heritage', desc: 'We honor our Nepali origins in everything we do.' },
  { icon: '🤝', title: 'People First', desc: 'Our team is family — we grow together.' },
  { icon: '🌱', title: 'Sustainability', desc: 'From farm to cup, we choose the planet.' },
  { icon: '✨', title: 'Craft & Quality', desc: 'Good enough is never enough.' },
];

export default function CareersPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [expandedJob, setExpandedJob] = useState(null);

  return (
    <main className="bg-cream">
      <SEO
        title="Careers at CHAIVO — Join the Chai Revolution"
        description="Join the CHAIVO team and help bring premium Himalayan chai to the world. Explore open positions in our cafes, marketing, and sourcing teams."
        path="/careers"
      />

      {/* Hero */}
      <section className="bg-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-saffron/10 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-saffron text-sm font-semibold tracking-[0.3em] uppercase mb-4"
          >
            Join the Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold text-cream mb-6"
          >
            Brew Something <span className="text-saffron">Extraordinary</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/50 text-lg max-w-2xl mx-auto"
          >
            We're building the world's most beloved chai brand — born in the
            Himalayas, one cup at a time. Come be part of the story.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-warm-brown text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-4xl block mb-3">{v.icon}</span>
                <h3 className="font-heading font-bold text-warm-brown text-lg mb-1">{v.title}</h3>
                <p className="text-warm-brown/50 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section ref={ref} className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-heading text-3xl font-bold text-warm-brown text-center mb-4"
          >
            Open Positions
          </motion.h2>
          <p className="text-center text-warm-brown/50 mb-12 max-w-lg mx-auto">
            We're always looking for passionate people. Don't see a fit? Send your CV to{' '}
            <a href="mailto:careers@chaivo.com" className="text-saffron hover:underline">
              careers@chaivo.com
            </a>
          </p>

          <div className="space-y-4">
            {positions.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="bg-white rounded-xl border border-saffron/10 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedJob(expandedJob === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-saffron/5 transition-colors"
                >
                  <div>
                    <h3 className="font-heading text-lg font-bold text-warm-brown">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-1">
                      <span className="flex items-center gap-1 text-warm-brown/50 text-sm">
                        <HiLocationMarker className="text-saffron" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-warm-brown/50 text-sm">
                        <HiClock className="text-saffron" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <span className="text-saffron text-2xl">{expandedJob === i ? '−' : '+'}</span>
                </button>
                {expandedJob === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-warm-brown/60 text-sm leading-relaxed mb-4">{job.description}</p>
                    <h4 className="text-warm-brown font-semibold text-sm mb-2 flex items-center gap-1">
                      <HiHeart className="text-saffron" /> Perks
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {job.perks.map((perk) => (
                        <li key={perk} className="text-warm-brown/50 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-saffron rounded-full" /> {perk}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:careers@chaivo.com?subject=Application: ${encodeURIComponent(job.title)}`}
                      className="inline-block bg-saffron text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-saffron-dark transition-colors"
                    >
                      Apply Now
                    </a>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
