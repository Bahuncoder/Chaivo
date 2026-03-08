import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { GiTeapot } from 'react-icons/gi';

const footerLinks = [
  { to: '/menu', label: 'Menu' },
  { to: '/our-story', label: 'Story' },
  { to: '/locations', label: 'Locations' },
  { to: '/contact', label: 'Contact' },
];

const socialLinks = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaTiktok, href: '#', label: 'TikTok' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-cream/80" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <GiTeapot className="text-saffron text-xl" />
              <span className="font-heading text-2xl font-bold text-cream">
                CHAIVO
              </span>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed">
              Born in the Himalayas. <br />
              Premium Nepali chai, crafted with soul.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-cream mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-cream/50 text-sm hover:text-saffron transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-cream mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {['Careers', 'Press', 'Franchise', 'Privacy'].map((item) => (
                <li key={item}>
                  <span className="text-cream/50 text-sm hover:text-saffron transition-colors duration-300 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-cream mb-4">
              Stay Connected
            </h4>
            <p className="text-cream/50 text-sm mb-4">
              Subscribe for chai tips, new blends, and launch updates.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 mb-6"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 bg-cream/10 rounded-full text-sm text-cream placeholder:text-cream/30 border border-cream/10 focus:border-saffron/40 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-saffron px-5 py-2.5 rounded-full text-sm font-semibold text-white hover:bg-saffron-dark transition-colors"
              >
                Join
              </button>
            </form>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center text-cream/60 hover:bg-saffron hover:text-white transition-all duration-300"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm">
            Coming to Kathmandu, London, New York
          </p>
          <p className="text-cream/40 text-sm">
            © 2025 Chaivo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
