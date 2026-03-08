import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function PrivacyPage() {
  return (
    <main className="bg-cream">
      <SEO
        title="Privacy Policy — CHAIVO"
        description="Learn how CHAIVO collects, uses, and protects your personal information. Our commitment to your privacy and data security."
        path="/privacy"
      />

      <section className="bg-dark pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-cream mb-4"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-cream/40 text-sm">Last updated: March 1, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-warm-brown">
          <div className="space-y-10 text-warm-brown/70 text-sm leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">1. Information We Collect</h2>
              <p>
                When you visit chaivo.com, we may collect information you provide directly — such as your name, email address, and message when you use our contact form or subscribe to our newsletter. We also automatically collect certain technical data, including your IP address, browser type, device information, and pages visited, through cookies and similar technologies.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you newsletters and promotional materials (with your consent)</li>
                <li>Improve our website and user experience</li>
                <li>Analyze site traffic and usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">3. Cookies & Tracking</h2>
              <p>
                We use cookies to enhance your browsing experience and analyze our website traffic. You can control cookie preferences through the cookie consent banner on our site or through your browser settings. We use Google Analytics for traffic analysis — this data is anonymized and aggregated.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">4. Data Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our website, conducting our business, or servicing you — provided those parties agree to keep this information confidential. We may also share data when required by law.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">5. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Newsletter subscribers can unsubscribe at any time.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">6. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, delete, or port your personal data. You may also object to or restrict certain processing. To exercise these rights, contact us at{' '}
                <a href="mailto:privacy@chaivo.com" className="text-saffron hover:underline">privacy@chaivo.com</a>.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">7. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">8. Children's Privacy</h2>
              <p>
                Our website is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-warm-brown mb-3">10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:{' '}
                <a href="mailto:privacy@chaivo.com" className="text-saffron hover:underline">privacy@chaivo.com</a>
              </p>
              <p className="mt-2">
                CHAIVO Tea Company<br />
                Thamel, Kathmandu 44600<br />
                Nepal
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
