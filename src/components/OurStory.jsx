import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const timeline = [
  { year: 'Origins', text: 'Centuries of Nepali chai tradition in the Himalayan foothills' },
  { year: 'Ilam', text: 'Hand-picked tea leaves from the finest gardens of Ilam, Nepal' },
  { year: 'Craft', text: 'Blended by master chai makers using generations-old recipes' },
  { year: 'Global', text: 'Bringing authentic Himalayan chai experience to the world' },
];

export default function OurStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="our-story" aria-label="Our story" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-saffron text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-warm-brown mb-6 leading-tight">
              From Himalayan Tea Gardens to Your Cup
            </h2>
            <div className="space-y-4 text-warm-brown/70 leading-relaxed">
              <p>
                Nestled in the misty hills of Eastern Nepal, the Ilam tea region
                has been producing some of the world's finest teas for over a
                century. CHAIVO was born from a deep reverence for this heritage.
              </p>
              <p>
                We partner directly with Nepali tea farmers, ensuring fair
                trade practices while preserving the artisanal methods passed
                down through generations. Every leaf is hand-picked at the
                perfect moment, then masterfully blended into our signature
                chai recipes.
              </p>
              <p>
                CHAIVO isn't just a cup of tea — it's a journey to the
                Himalayas, a story of culture, craftsmanship, and the warm
                embrace of Nepali hospitality.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12 space-y-6">
              {timeline.map((step, i) => (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-saffron/10 rounded-xl flex items-center justify-center">
                    <span className="text-saffron font-bold text-xs tracking-wider uppercase">
                      {step.year}
                    </span>
                  </div>
                  <p className="text-warm-brown/70 text-sm pt-4">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-forest/20 via-saffron/10 to-terracotta/15 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-8xl mb-6">🏔️</div>
                <p className="font-heading text-2xl text-warm-brown/40 italic">
                  Ilam Tea Gardens
                </p>
                <p className="text-warm-brown/30 text-sm mt-2">
                  Eastern Nepal, 1,200m elevation
                </p>
              </div>
            </div>
            {/* Decorative corner accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-saffron/10 rounded-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-forest/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
