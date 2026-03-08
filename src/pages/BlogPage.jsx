import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiClock, HiArrowRight } from 'react-icons/hi';
import SEO from '../components/SEO';

const posts = [
  {
    slug: 'origins-of-nepali-chai',
    title: 'The Origins of Nepali Chai: A Journey Through the Himalayas',
    excerpt:
      'Long before chai became a global phenomenon, Nepali tea farmers in the hills of Ilam were crafting something extraordinary. Discover how centuries of tradition shaped the chai we love today.',
    category: 'Heritage',
    readTime: '6 min read',
    date: 'March 2, 2026',
  },
  {
    slug: 'perfect-masala-chai-at-home',
    title: 'How to Brew the Perfect Masala Chai at Home',
    excerpt:
      'Our head chai artisan shares the secrets to brewing authentic masala chai in your own kitchen — from spice ratios to milk frothing techniques.',
    category: 'Recipes',
    readTime: '4 min read',
    date: 'February 18, 2026',
  },
  {
    slug: 'ilam-tea-gardens',
    title: 'Inside Ilam: Meeting the Farmers Behind CHAIVO\'s Tea',
    excerpt:
      'We traveled to the misty hills of Ilam, Nepal to visit the organic tea gardens that supply CHAIVO\'s signature blends. Here\'s what we found.',
    category: 'Sourcing',
    readTime: '8 min read',
    date: 'February 5, 2026',
  },
  {
    slug: 'chai-health-benefits',
    title: '7 Science-Backed Health Benefits of Drinking Chai',
    excerpt:
      'From antioxidant-rich black tea to anti-inflammatory spices like ginger and cardamom — here\'s what the research says about your daily cup.',
    category: 'Wellness',
    readTime: '5 min read',
    date: 'January 20, 2026',
  },
  {
    slug: 'sustainability-commitment',
    title: 'Our 2026 Sustainability Report: From Farm to Cup',
    excerpt:
      'Transparency matters. Here\'s how CHAIVO is working toward carbon-neutral operations, zero-waste packaging, and fair wages for every farmer.',
    category: 'Sustainability',
    readTime: '7 min read',
    date: 'January 8, 2026',
  },
  {
    slug: 'chai-vs-coffee',
    title: 'Chai vs. Coffee: Why More People Are Making the Switch',
    excerpt:
      'The chai movement is growing. We explore why health-conscious consumers are choosing chai over coffee — and what makes CHAIVO different.',
    category: 'Culture',
    readTime: '5 min read',
    date: 'December 15, 2025',
  },
];

const categoryColors = {
  Heritage: 'bg-forest/10 text-forest',
  Recipes: 'bg-saffron/10 text-saffron-dark',
  Sourcing: 'bg-terracotta/10 text-terracotta',
  Wellness: 'bg-forest/10 text-forest',
  Sustainability: 'bg-forest/10 text-forest',
  Culture: 'bg-saffron/10 text-saffron-dark',
};

export default function BlogPage() {
  return (
    <main className="bg-cream">
      <SEO
        title="The CHAIVO Journal — Stories, Recipes & Tea Culture"
        description="Explore the CHAIVO Journal for stories about Himalayan tea heritage, brewing guides, sustainability updates, and the global chai culture."
        path="/journal"
      />

      {/* Hero */}
      <section className="bg-dark pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-saffron text-sm font-semibold tracking-[0.3em] uppercase mb-4"
          >
            The Journal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold text-cream mb-6"
          >
            Stories from the <span className="text-saffron">Hills</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/50 text-lg max-w-2xl mx-auto"
          >
            Heritage, recipes, wellness, and the global chai movement — told from CHAIVO's perspective.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cream rounded-2xl p-8 md:p-12 border border-saffron/10"
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[posts[0].category]} mb-4`}>
              {posts[0].category}
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-warm-brown mb-4">
              {posts[0].title}
            </h2>
            <p className="text-warm-brown/60 leading-relaxed mb-6 max-w-3xl">
              {posts[0].excerpt}
            </p>
            <div className="flex items-center gap-4 text-warm-brown/40 text-sm">
              <span>{posts[0].date}</span>
              <span className="flex items-center gap-1"><HiClock /> {posts[0].readTime}</span>
            </div>
          </motion.article>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border border-saffron/10 hover:shadow-lg hover:border-saffron/20 transition-all duration-500 group"
              >
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category]} mb-4`}>
                  {post.category}
                </span>
                <h3 className="font-heading text-lg font-bold text-warm-brown mb-3 group-hover:text-saffron transition-colors">
                  {post.title}
                </h3>
                <p className="text-warm-brown/50 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-warm-brown/40">
                  <div className="flex items-center gap-3">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><HiClock /> {post.readTime}</span>
                  </div>
                  <HiArrowRight className="text-saffron opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-cream mb-4">
            Never Miss a Story
          </h2>
          <p className="text-cream/40 mb-8 text-sm">
            Subscribe to The CHAIVO Journal and get the latest articles, recipes, and behind-the-scenes stories delivered to your inbox.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-3 rounded-full bg-cream/5 border border-cream/10 text-cream placeholder-cream/30 focus:outline-none focus:border-saffron transition-colors"
            />
            <button
              type="submit"
              className="bg-saffron text-white px-6 py-3 rounded-full font-semibold hover:bg-saffron-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
