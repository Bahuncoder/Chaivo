import SEO from '../components/SEO';
import Menu from '../components/Menu';

export default function MenuPage() {
  return (
    <main className="pt-20">
      <SEO
        title="Chai Menu — Signature Himalayan Tea Blends"
        description="Explore CHAIVO's premium chai menu: Classic Nepali milk chai, Ilam Gold first flush, Himalayan Spice masala, Zen tulsi ginger, Royal saffron cardamom, and Ice cold brew chai. Prices from $5-$9."
        path="/menu"
      />
      <Menu />
    </main>
  );
}
