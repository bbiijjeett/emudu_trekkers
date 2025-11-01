import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

export function DestinationMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const destinations = [
    { id: 1, name: 'Swiss Alps', country: 'Switzerland', top: '35%', left: '51%' },
    { id: 2, name: 'Canadian Rockies', country: 'Canada', top: '28%', left: '18%' },
    { id: 3, name: 'Patagonia', country: 'Argentina & Chile', top: '75%', left: '25%' },
    { id: 4, name: 'New Zealand', country: 'New Zealand', top: '82%', left: '88%' },
    { id: 5, name: 'Norwegian Fjords', country: 'Norway', top: '22%', left: '54%' },
    { id: 6, name: 'Himalayas', country: 'Nepal', top: '38%', left: '72%' },
  ];

  return (
    <section id="destinations" ref={ref} className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="subheading text-sm mb-4" style={{ color: 'var(--alpine-blue)', letterSpacing: '0.15em' }}>
            EXPLORE THE WORLD
          </div>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--forest-green)' }}>
            Our Destinations
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-70">
            Explore the world's most stunning mountain and lake regions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          {/* Simplified World Map Background */}
          <div className="relative w-full aspect-[2/1] bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl overflow-hidden border-2 border-gray-200">
            {/* Continents represented as abstract shapes */}
            <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20">
              {/* North America */}
              <path d="M 150 80 Q 180 60 220 80 L 250 120 Q 260 150 240 180 L 200 200 Q 170 190 150 160 Z" fill="var(--forest-green)" />
              {/* South America */}
              <path d="M 220 280 L 240 350 Q 250 400 230 450 L 200 480 Q 180 470 190 430 L 180 350 Z" fill="var(--forest-green)" />
              {/* Europe */}
              <path d="M 480 100 Q 520 90 550 110 L 560 150 Q 550 170 520 160 L 480 140 Z" fill="var(--forest-green)" />
              {/* Asia */}
              <path d="M 600 120 Q 700 100 800 140 L 820 200 Q 800 250 720 240 L 640 220 Q 600 180 600 120 Z" fill="var(--forest-green)" />
              {/* Africa */}
              <path d="M 480 200 Q 520 200 540 240 L 550 320 Q 540 380 500 360 L 460 300 Q 460 240 480 200 Z" fill="var(--forest-green)" />
              {/* Australia */}
              <path d="M 780 350 Q 840 340 880 360 L 890 400 Q 870 430 820 420 L 780 400 Z" fill="var(--forest-green)" />
            </svg>

            {/* Destination Markers */}
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="absolute cursor-pointer group"
                style={{ top: destination.top, left: destination.left }}
                onMouseEnter={() => setSelectedDestination(destination.name)}
                onMouseLeave={() => setSelectedDestination(null)}
              >
                {/* Ping Animation */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{ backgroundColor: 'var(--alpine-blue)' }}
                />
                
                {/* Pin */}
                <div
                  className="relative w-8 h-8 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-lg group-hover:scale-125 transition-transform"
                  style={{ backgroundColor: 'var(--forest-green)' }}
                >
                  <MapPin className="w-4 h-4 text-white" />
                </div>

                {/* Tooltip */}
                {selectedDestination === destination.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-10 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-xl px-4 py-3 whitespace-nowrap z-10"
                  >
                    <p style={{ fontFamily: 'var(--font-heading)' }}>{destination.name}</p>
                    <p className="text-sm opacity-70">{destination.country}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Destination List */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onMouseEnter={() => setSelectedDestination(destination.name)}
                onMouseLeave={() => setSelectedDestination(null)}
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--alpine-blue)' }} />
                <div>
                  <p className="text-sm opacity-70">{destination.country}</p>
                  <p style={{ fontFamily: 'var(--font-heading)' }}>{destination.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
