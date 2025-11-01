import { motion, useScroll, useTransform } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function StickyButton() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [400, 500], [0, 1]);
  const y = useTransform(scrollY, [400, 500], [100, 0]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    // If we're on the home page, scroll to contact section
    if (location.pathname === '/') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to contact page
      navigate('/contact');
    }
  };

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-8 right-8 z-40 hidden md:block"
    >
      <Button
        onClick={handleClick}
        size="lg"
        className="rounded-full px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
        style={{ backgroundColor: 'var(--forest-green)' }}
      >
        Plan Your Trip
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </motion.div>
  );
}
