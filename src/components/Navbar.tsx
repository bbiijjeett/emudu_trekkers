// import { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { motion } from 'motion/react';
// import { Mountain, Menu, X } from 'lucide-react';
// import { Button } from './ui/button';
// import logo from '../assets/logo.png'

// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Handle scrolling to hash on page load or hash change
//   useEffect(() => {
//     const hash = location.hash.replace('#', '');
//     if (hash) {
//       setTimeout(() => {
//         const element = document.getElementById(hash);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 100);
//     }
//   }, [location]);

//   // const handleSectionClick = (sectionId: string) => {
//   //   setIsMobileMenuOpen(false);
    
//   //   // If we're already on the home page, just scroll
//   //   if (location.pathname === '/') {
//   //     const element = document.getElementById(sectionId);
//   //     if (element) {
//   //       element.scrollIntoView({ behavior: 'smooth' });
//   //     }
//   //   } else {
//   //     // Navigate to home page with hash
//   //     navigate(`/#${sectionId}`);
//   //   }
//   // };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2 cursor-pointer" onClick={closeMobileMenu}>
//             {/* <Mountain className="w-8 h-8" style={{ color: 'var(--forest-green)' }} /> */}
//              <img src={logo} className="h-12 w-12" />
//             <span className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
//               Emudu Trekkers
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link
//               to="/about"
//               className="hover:opacity-70 transition-opacity"
//             >
//               About
//             </Link>
//             <Link
//               to="/tours"
//               className="hover:opacity-70 transition-opacity"
//             >
//               Tours
//             </Link>
//             <Link
//               to="/contact"
//               className="hover:opacity-70 transition-opacity"
//             >
//               Contact
//             </Link>
//             {/* <button
//               onClick={() => handleSectionClick('destinations')}
//               className="hover:opacity-70 transition-opacity pointer"
//             >
//               Destinations
//             </button>
//             <button
//               onClick={() => handleSectionClick('testimonials')}
//               className="hover:opacity-70 transition-opacity pointer"
//             >
//               Reviews
//             </button> */}
//             <Link to="/tours">
//               <Button
//                 className="rounded-full px-6 hover:scale-105 transition-transform"
//                 style={{ backgroundColor: 'var(--forest-green)' }}
//               >
//                 Book
//               </Button>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="md:hidden pb-6 space-y-4"
//           >
//             <Link
//               to="/about"
//               onClick={closeMobileMenu}
//               className="block w-full text-left py-2 hover:opacity-70"
//             >
//               About
//             </Link>
//             <Link
//               to="/tours"
//               onClick={closeMobileMenu}
//               className="block w-full text-left py-2 hover:opacity-70"
//             >
//               Tours
//             </Link>
//             <Link
//               to="/contact"
//               onClick={closeMobileMenu}
//               className="block w-full text-left py-2 hover:opacity-70"
//             >
//               Contact
//             </Link>
//             {/* <button
//               onClick={() => handleSectionClick('destinations')}
//               className="block w-full text-left py-2 hover:opacity-70"
//             >
//               Destinations
//             </button>
//             <button
//               onClick={() => handleSectionClick('testimonials')}
//               className="block w-full text-left py-2 hover:opacity-70"
//             >
//               Reviews
//             </button> */}
//             <Link to="/tours" onClick={closeMobileMenu}>
//               <Button
//                 className="w-full rounded-full"
//                 style={{ backgroundColor: 'var(--forest-green)' }}
//               >
//                 Book
//               </Button>
//             </Link>
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   );
// }

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; // <= change if using motion-one
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/logo.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto scroll to section if hash exists
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMobileMenuOpen(false); // close menu on route change
  }, [location]);

  const textColor = isScrolled ? 'text-gray-900' : 'text-white';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${
          location.pathname === '/'
            ? isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-sm'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={logo} className="h-12 w-12" alt="Emudu Trekkers logo" />
            <span className={`text-xl font-semibold ${textColor}`} style={{ fontFamily: 'var(--font-heading)' }}>
              Emudu Trekkers
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-8 text-gray-900`}>
            <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
            <Link to="/tours" className="hover:opacity-70 transition-opacity">Tours</Link>
            <Link to="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>

            <Link to="/tours">
              <Button
                className="rounded-full px-6 hover:scale-105 transition-transform"
                style={{ backgroundColor: 'var(--forest-green)' }}
              >
                Book
              </Button>
            </Link>
          </div>

          {/* Mobile - Toggle */}
          <button className={`md:hidden text-gray-900`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 space-y-4 text-gray-900" 
          >
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">About</Link>
            <Link to="/tours" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">Tours</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2">Contact</Link>

            <Link to="/tours" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full rounded-full" style={{ backgroundColor: 'var(--forest-green)' }}>
                Book
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
