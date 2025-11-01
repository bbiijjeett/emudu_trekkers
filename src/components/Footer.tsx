import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mountain, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleSectionClick = (sectionId: string) => {
    // If we're already on the home page, just scroll
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="py-16 px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8" style={{ color: 'var(--forest-green)' }} />
              <span className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                Emudu Trekkers
              </span>
            </div>
            <p className="opacity-70 mb-6">
              Creating unforgettable mountain and lake experiences since 2015
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Quick Links</h4>
            <ul className="space-y-3 opacity-70">
              <li>
                <Link to="/about" className="hover:opacity-70 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:opacity-70 transition-opacity">
                  Tours
                </Link>
              </li>
              <li>
                <button onClick={() => handleSectionClick('destinations')} className="hover:opacity-70 transition-opacity">
                  Destinations
                </button>
              </li>
              <li>
                <Link to="/contact" className="hover:opacity-70 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Resources</h4>
            <ul className="space-y-3 opacity-70">
              <li><a href="#" className="hover:opacity-70 transition-opacity">Travel Guide</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Packing List</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">FAQs</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Stay Updated</h4>
            <p className="opacity-70 mb-4">
              Subscribe to our newsletter for travel tips and exclusive offers
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ focusRing: 'var(--forest-green)' }}
              />
              <button
                className="px-4 py-2 rounded-full text-white"
                style={{ backgroundColor: 'var(--forest-green)' }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 opacity-70">
          <p className="text-sm">
            © 2025 Emudu Trekkers. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:opacity-70 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
