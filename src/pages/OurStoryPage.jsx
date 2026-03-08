import SEO from '../components/SEO';
import OurStory from '../components/OurStory';

export default function OurStoryPage() {
  return (
    <main className="pt-20">
      <SEO
        title="Our Story — From Himalayan Tea Gardens to Your Cup"
        description="Discover the CHAIVO story: born in the Ilam tea region of Eastern Nepal, we partner directly with Nepali tea farmers to bring centuries of Himalayan chai heritage to the world."
        path="/our-story"
      />
      <OurStory />
    </main>
  );
}
