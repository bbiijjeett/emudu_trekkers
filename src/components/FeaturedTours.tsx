import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Clock, Users, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toursData } from './tour-data';

export function FeaturedTours() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="tours" ref={ref} className="py-32 px-6 lg:px-8" style={{ backgroundColor: 'var(--white)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="subheading text-sm mb-4" style={{ color: 'var(--alpine-blue)', letterSpacing: '0.15em' }}>
            ADVENTURE AWAITS
          </div>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--forest-green)' }}>
            Featured Tours
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-70">
            Carefully curated experiences that showcase the world's most spectacular mountain and lake destinations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {toursData.map((tour, index) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0">
                <div className="relative h-80 overflow-hidden group">
                  <ImageWithFallback
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                    <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--forest-green)' }}>
                      ₹{tour.price}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 opacity-70">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{tour.location}</span>
                  </div>
                  
                  <h3 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {tour.title}
                  </h3>
                  
                  <p className="mb-6 opacity-70">{tour.description}</p>
                  
                  <div className="flex items-center gap-6 mb-6 text-sm opacity-70">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{tour.groupSize} people</span>
                    </div>
                  </div>
                  
                  <Link to={`/tours/${encodeURIComponent(tour.title.toLowerCase().replace(/\s+/g, '-'))}`} className="w-full">
                    <Button
                      className="w-full rounded-full"
                      style={{ backgroundColor: 'var(--forest-green)' }}
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
