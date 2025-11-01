import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Leaf, Heart, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import aboutus from '../assets/aboutus_1.jpg'

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Carbon-neutral tours with sustainable practices'
    },
    {
      icon: Heart,
      title: 'Local Impact',
      description: 'Supporting communities and conservation efforts'
    },
    {
      icon: Award,
      title: 'Expert Guides',
      description: 'Certified naturalists with deep local knowledge'
    }
  ];

  return (
    <section id="about" ref={ref} className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="subheading text-sm mb-4" style={{ color: 'var(--alpine-blue)', letterSpacing: '0.15em' }}>
              ABOUT US
            </div>
            <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--forest-green)' }}>
              Where Adventure Meets Tranquility
            </h2>
            <p className="text-lg mb-8 opacity-80">
              For over a decade, Emudu Trekkers has been crafting extraordinary experiences in the world's most breathtaking mountain and lake destinations. We believe in the transformative power of nature and are committed to sharing it responsibly.
            </p>
            <p className="text-lg mb-12 opacity-80">
              Our passion is connecting travelers with pristine wilderness while preserving these sacred landscapes for future generations. Every journey is designed to inspire wonder, foster connection, and create lasting memories.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--forest-green)' }}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{feature.title}</h3>
                    <p className="opacity-70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden"
          >
            <ImageWithFallback
              src={aboutus}
              alt="Mountain Lake Landscape"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
