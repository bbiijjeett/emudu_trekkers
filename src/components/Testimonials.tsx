import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Card } from './ui/card';
import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Seattle, USA',
      image: 'https://images.unsplash.com/photo-1613056711000-0a74fc9f31a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhpa2luZyUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjE3NDg4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      text: 'The Alpine Summit Trek exceeded all expectations. Our guide was incredibly knowledgeable, and the landscapes were absolutely breathtaking. This trip reignited my love for the mountains.'
    },
    {
      name: 'James Chen',
      location: 'Toronto, Canada',
      image: 'https://images.unsplash.com/photo-1653828051305-0446bd6ec223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBvdXRkb29yJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc2MTczNDc1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      text: 'Emudu Trekkers delivered an unforgettable experience. The attention to eco-friendly practices and supporting local communities made me feel good about my travel choices. Highly recommended!'
    },
    {
      name: 'Emma Rodriguez',
      location: 'Barcelona, Spain',
      image: 'https://images.unsplash.com/photo-1622646771382-1c9c090d3c37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRyYXZlbGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNzQwMTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      text: 'The Lake Kayaking Retreat was pure magic. Paddling through crystal-clear waters surrounded by mountains was a dream come true. The entire experience was perfectly organized and deeply peaceful.'
    }
  ];

  return (
    <section id="testimonials" ref={ref} className="py-32 px-6 lg:px-8" style={{ backgroundColor: 'var(--white)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="subheading text-sm mb-4" style={{ color: 'var(--alpine-blue)', letterSpacing: '0.15em' }}>
            TESTIMONIALS
          </div>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--forest-green)' }}>
            Traveler Stories
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-70">
            Hear from adventurers who've experienced the magic of our mountain and lake tours
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300 h-full border-0">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" style={{ color: 'var(--earth)' }} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="mb-8 text-lg opacity-80 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-heading)' }}>{testimonial.name}</p>
                    <p className="text-sm opacity-70">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '2,500+', label: 'Happy Travelers' },
            { number: '25+', label: 'Destinations' },
            { number: '98%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-4xl md:text-5xl mb-2"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--forest-green)' }}
              >
                {stat.number}
              </motion.p>
              <p className="opacity-70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
