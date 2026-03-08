import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-dark flex items-center justify-center px-6">
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Let us guide you back to a warm cup of CHAIVO chai."
        path="/404"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <span className="text-8xl mb-4 block">🍵</span>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-saffron mb-4">404</h1>
        <p className="font-heading text-2xl text-cream mb-3">
          This cup is empty.
        </p>
        <p className="text-cream/50 mb-8 leading-relaxed">
          The page you're looking for has been moved, removed, or perhaps it never existed.
          But don't worry — there's always a warm chai waiting for you back home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-saffron text-white px-8 py-3 rounded-full font-semibold hover:bg-saffron-dark transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            to="/menu"
            className="border-2 border-cream/20 text-cream px-8 py-3 rounded-full font-semibold hover:border-saffron hover:text-saffron transition-all duration-300"
          >
            View Menu
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
