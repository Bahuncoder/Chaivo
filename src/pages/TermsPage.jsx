import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function TermsPage() {
  return (
    <main className="bg-cream">
      <SEO
        title="Terms of Service — CHAIVO"
        description="Read the terms and conditions governing your use of the CHAIVO website and services."
        path="/terms"
      />

      <section className="bg-dark pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-cream mb-4"
          >
            Terms of Service
          </motion.h1>
          <p className="text-cream/40 text-sm">Last updated: March 1, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-10 text-warm-brown/70 text-sm leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the CHAIVO website (chaivo.com), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">2. Use of Website</h2>
              <p>
                You may use our website for lawful purposes only. You agree not to use our website in any way that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party's use of the website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">3. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, images, audio, video, and software — is the property of CHAIVO Tea Company or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws. The CHAIVO name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of CHAIVO Tea Company.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">4. Product Information</h2>
              <p>
                We make every effort to display our products accurately. However, we do not guarantee that product descriptions, pricing, or other content on our site is accurate, complete, or current. Menu items, prices, and availability may vary by location and are subject to change without notice.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">5. User Submissions</h2>
              <p>
                Any information or content you submit through our website (such as contact form messages, franchise inquiries, or newsletter sign-ups) is subject to our Privacy Policy. You represent that any information you provide is accurate and that you have the right to provide it.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">6. Limitation of Liability</h2>
              <p>
                CHAIVO Tea Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the website. This includes damages for loss of profits, data, or other intangible losses.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We do not control and are not responsible for the content or privacy practices of these sites. We encourage you to read the terms and privacy policies of any third-party websites you visit.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">8. Modifications</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">9. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of Nepal, without regard to conflict of law principles. Any disputes arising from these terms shall be resolved in the courts of Kathmandu, Nepal.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">10. Contact</h2>
              <p>
                For questions about these Terms of Service, contact us at{' '}
                <a href="mailto:legal@chaivo.com" className="text-saffron hover:underline">legal@chaivo.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
