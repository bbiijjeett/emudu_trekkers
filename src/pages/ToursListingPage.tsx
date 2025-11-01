import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Clock, Users, MapPin, Filter } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toursData } from '../components/tour-data';

export function ToursListingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'mountain' | 'lake'>('all');

  const filters = [
    { id: 'all', label: 'All Tours' },
    { id: 'mountain', label: 'Mountain Adventures' },
    { id: 'lake', label: 'Lake Experiences' }
  ];

  // Simple filter logic - you can enhance this based on your data
  const filteredTours = toursData.filter(tour => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'mountain') {
      return tour.title.toLowerCase().includes('mountain') || 
             tour.title.toLowerCase().includes('alpine') || 
             tour.title.toLowerCase().includes('trek') ||
             tour.title.toLowerCase().includes('summit');
    }
    if (selectedFilter === 'lake') {
      return tour.title.toLowerCase().includes('lake') || 
             tour.title.toLowerCase().includes('kayak');
    }
    return true;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bW1pdCUyMHZpZXd8ZW58MXx8fHwxNzYxNzQ5Mjg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tours"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-6"
          >
            <h1 className="text-5xl md:text-7xl mb-6 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Tours
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white">
              Discover your next adventure among our carefully curated experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 opacity-70">
              <Filter className="w-5 h-5" />
              <span>Filter by:</span>
            </div>
            {filters.map(filter => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? 'default' : 'outline'}
                onClick={() => setSelectedFilter(filter.id as 'all' | 'mountain' | 'lake')}
                className="rounded-full"
                style={selectedFilter === filter.id ? { backgroundColor: 'var(--forest-green)' } : {}}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section ref={ref} className="py-20 px-6 lg:px-8" style={{ backgroundColor: 'var(--white)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-lg opacity-70">
              Showing {filteredTours.length} {filteredTours.length === 1 ? 'tour' : 'tours'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredTours.map((tour, index) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 h-full flex flex-col">
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
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3 opacity-70">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{tour.location}</span>
                    </div>
                    
                    <h3 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                      {tour.title}
                    </h3>
                    
                    <p className="mb-6 opacity-70 flex-1">{tour.description}</p>
                    
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
    </div>
  );
}
