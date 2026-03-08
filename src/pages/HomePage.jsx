import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import OurStory from '../components/OurStory';
import Locations from '../components/Locations';
import Contact from '../components/Contact';

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chaivo.com/' },
    { '@type': 'ListItem', position: 2, name: 'Menu', item: 'https://chaivo.com/menu' },
    { '@type': 'ListItem', position: 3, name: 'Our Story', item: 'https://chaivo.com/our-story' },
    { '@type': 'ListItem', position: 4, name: 'Locations', item: 'https://chaivo.com/locations' },
    { '@type': 'ListItem', position: 5, name: 'Contact', item: 'https://chaivo.com/contact' },
  ],
};

export default function HomePage() {
  return (
    <>
      <SEO
        description="CHAIVO — the world's first premium Himalayan chai chain. Authentic Nepali tea from Ilam tea gardens. Experience handcrafted masala chai, first flush gold tea, saffron blends and more. Opening in Kathmandu, London & New York."
        path="/"
        jsonLd={breadcrumbLd}
      />
      <Hero />
      <Menu />
      <OurStory />
      <Locations />
      <Contact />
    </>
  );
}
