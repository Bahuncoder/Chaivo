import SEO from '../components/SEO';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <main className="pt-20">
      <SEO
        title="Contact Us — Get in Touch with CHAIVO"
        description="Contact CHAIVO for franchise opportunities, partnerships, press inquiries or just to say namaste. Email hello@chaivo.com or call +977 1 456 7890. Based in Kathmandu, Nepal."
        path="/contact"
      />
      <Contact />
    </main>
  );
}
