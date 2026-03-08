import SEO from '../components/SEO';
import Locations from '../components/Locations';

export default function LocationsPage() {
  return (
    <main className="pt-20">
      <SEO
        title="Locations — Find CHAIVO Premium Chai Near You"
        description="CHAIVO is opening premium Himalayan chai cafes in Kathmandu (Nepal), London (UK), and New York (USA). Find the nearest CHAIVO location and experience authentic Nepali chai."
        path="/locations"
      />
      <Locations />
    </main>
  );
}
