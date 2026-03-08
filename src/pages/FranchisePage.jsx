import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiCheckCircle, HiGlobeAlt, HiCurrencyDollar, HiSupport } from 'react-icons/hi';
import SEO from '../components/SEO';

const benefits = [
  {
    icon: HiGlobeAlt,
    title: 'Proven Concept',
    desc: 'A unique Himalayan chai brand with no direct competitor in the premium chai space.',
  },
  {
    icon: HiCurrencyDollar,
    title: 'Strong Unit Economics',
    desc: 'High-margin tea products with low waste and efficient operations.',
  },
  {
    icon: HiSupport,
    title: 'Full Support',
    desc: 'Site selection, build-out, training, marketing, and ongoing operational guidance.',
  },
  {
    icon: HiCheckCircle,
    title: 'Ethical Sourcing',
    desc: 'Direct partnerships with Nepali tea farmers — a story your customers will love.',
  },
];

const steps = [
  { num: '01', title: 'Apply', desc: 'Submit your franchise inquiry form with your background and preferred market.' },
  { num: '02', title: 'Discovery', desc: 'Introductory call with our franchise team to explore mutual fit.' },
  { num: '03', title: 'Review', desc: 'Receive our Franchise Disclosure Document and financial overview.' },
  { num: '04', title: 'Approval & Launch', desc: 'Sign the franchise agreement, begin training, and open your doors.' },
];

export default function FranchisePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-cream">
      <SEO
        title="Franchise with CHAIVO — Bring Himalayan Chai to Your City"
        description="Own a CHAIVO franchise and bring premium Himalayan chai to your community. Learn about our franchise model, investment requirements, and how to apply."
        path="/franchise"
      />

      {/* Hero */}
      <section className="bg-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-saffron/20 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-saffron text-sm font-semibold tracking-[0.3em] uppercase mb-4"
          >
            Franchise Opportunity
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold text-cream mb-6"
          >
            Bring CHAIVO to <span className="text-saffron">Your City</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/50 text-lg max-w-2xl mx-auto"
          >
            Join the Himalayan chai movement. We're seeking passionate partners
            to bring CHAIVO's warmth to communities around the world.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-warm-brown text-center mb-12">
            Why CHAIVO?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <b.icon className="text-4xl text-saffron mx-auto mb-3" />
                <h3 className="font-heading font-bold text-warm-brown text-lg mb-1">{b.title}</h3>
                <p className="text-warm-brown/50 text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-warm-brown text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-saffron/10"
              >
                <span className="text-saffron text-3xl font-heading font-bold">{s.num}</span>
                <h3 className="font-heading text-xl font-bold text-warm-brown mt-2 mb-2">{s.title}</h3>
                <p className="text-warm-brown/50 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-dark">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-cream text-center mb-4">
            Start Your Journey
          </h2>
          <p className="text-cream/40 text-center mb-10">
            Fill out the form below and our franchise team will be in touch within 48 hours.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <span className="text-5xl mb-4 block">🏔️</span>
              <h3 className="font-heading text-2xl text-saffron font-bold mb-2">
                Dhanyabad!
              </h3>
              <p className="text-cream/50">
                We've received your inquiry. Our franchise team will reach out soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  className="w-full px-5 py-3 rounded-xl bg-cream/5 border border-cream/10 text-cream placeholder-cream/30 focus:outline-none focus:border-saffron transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  className="w-full px-5 py-3 rounded-xl bg-cream/5 border border-cream/10 text-cream placeholder-cream/30 focus:outline-none focus:border-saffron transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-3 rounded-xl bg-cream/5 border border-cream/10 text-cream placeholder-cream/30 focus:outline-none focus:border-saffron transition-colors"
                />
                <input
                  type="text"
                  placeholder="Preferred City / Market *"
                  required
                  className="w-full px-5 py-3 rounded-xl bg-cream/5 border border-cream/10 text-cream placeholder-cream/30 focus:outline-none focus:border-saffron transition-colors"
                />
              </div>
              <textarea
                placeholder="Tell us about your background and why you'd like to partner with CHAIVO..."
                rows={4}
                className="w-full px-5 py-3 rounded-xl bg-cream/5 border border-cream/10 text-cream placeholder-cream/30 focus:outline-none focus:border-saffron transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-saffron text-white py-4 rounded-full font-semibold text-lg hover:bg-saffron-dark transition-all duration-300 hover:shadow-lg hover:shadow-saffron/30"
              >
                Submit Franchise Inquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
