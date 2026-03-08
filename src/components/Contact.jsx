import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" aria-label="Contact CHAIVO" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-saffron text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-warm-brown mb-4">
            We'd Love to Hear From You
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-warm-brown/70 leading-relaxed">
              Whether you're interested in franchise opportunities, partnerships,
              or just want to say namaste — we're here for you.
            </p>
            {[
              { icon: HiMail, label: 'hello@chaivo.com' },
              { icon: HiPhone, label: '+977 1 456 7890' },
              { icon: HiLocationMarker, label: 'Kathmandu, Nepal' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="text-xl text-saffron" />
                </div>
                <span className="text-warm-brown/80">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <div className="bg-forest/5 rounded-2xl p-12 text-center">
                <div className="text-5xl mb-4">🙏</div>
                <h3 className="font-heading text-2xl font-bold text-forest mb-2">
                  Dhanyabad!
                </h3>
                <p className="text-warm-brown/60">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-5 py-4 bg-cream rounded-xl border border-saffron/10 focus:border-saffron/40 focus:outline-none transition-colors text-warm-brown placeholder:text-warm-brown/40"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-5 py-4 bg-cream rounded-xl border border-saffron/10 focus:border-saffron/40 focus:outline-none transition-colors text-warm-brown placeholder:text-warm-brown/40"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    required
                    className="w-full px-5 py-4 bg-cream rounded-xl border border-saffron/10 focus:border-saffron/40 focus:outline-none transition-colors text-warm-brown placeholder:text-warm-brown/40 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-saffron text-white py-4 rounded-full font-semibold tracking-wide hover:bg-saffron-dark transition-all duration-300 hover:shadow-lg hover:shadow-saffron/30"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
