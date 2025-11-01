import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import heroVideo from '../assets/hero_n.mp4'

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={heroVideo}
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl mb-6 text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Seven Lakes.<br />One unforgettable journey.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90 text-white"
          >
            Experience serene lakes and towering Himalayan peaks on a trek crafted for true mountain explorers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/tours">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text- pointer"
                style={{ backgroundColor: 'var(--forest-green)' }}
              >
                Explore Tours
              </Button>
            </Link>
            {/* <Button
              onClick={scrollToAbout}
              size="lg"
              variant="outline1"
              className="rounded-full px-8 py-6 text-lg border-2 border-white hover:bg-white/10"
              style={{ color: 'var(--forest-green)' }}
            >
              Our Story
            </Button> */}
            {/* <button
              onClick={scrollToAbout}
              style={{ color: 'var(--forest-green)' }}
              className="
                inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all
                rounded-full text-lg h-8 px-8 py-6
                border-2 border-white
                bg-white text-red-500
                hover:bg-white/10 hover:text-white
              "
            >
              Our Story
            </button> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
