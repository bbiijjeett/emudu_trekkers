import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { 
  Check, 
  X, 
  Calendar as CalendarIcon, 
  Users, 
  MapPin, 
  Clock, 
  Star,
  Play,
  Minus,
  Plus,
  MessageCircle
} from 'lucide-react';
import { format } from 'date-fns';

interface TourDetails {
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  price: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  travelers: number;
  gallery: { type: 'image' | 'video'; url: string; title: string }[];
  itinerary: { day: number; title: string; description: string; activities: string[]; time: string }[];
  inclusions: string[];
  exclusions: string[];
  pickupPoints: { location: string; time: string; address: string }[];
}

interface TourDetailsPageProps {
  tour: TourDetails;
}

export function TourDetailsPage({ tour }: TourDetailsPageProps) {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [guests, setGuests] = useState(1);

  const pricePerPerson = parseFloat(tour.price.replace('$', '').replace(',', ''));
  const totalPrice = pricePerPerson * guests;
  const reservationDeposit = 49;

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Tour Details */}
          <div className="lg:col-span-2">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--forest-green)' }}>
                {tour.title}
              </h1>
              <p className="text-lg opacity-70 mb-6">{tour.description}</p>

              <div className="flex flex-wrap items-center gap-6 mb-4 text-sm opacity-70">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Max {tour.groupSize} people</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" style={{ color: 'var(--earth)' }} />
                  <span>{tour.rating} ({tour.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-8 p-4 bg-green-50 rounded-lg">
                <Users className="w-5 h-5" style={{ color: 'var(--forest-green)' }} />
                <span><strong>{tour.travelers} travelers</strong> have booked this tour</span>
              </div>
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black mb-4">
                {tour.gallery[selectedGalleryItem].type === 'image' ? (
                  <ImageWithFallback
                    src={tour.gallery[selectedGalleryItem].url}
                    alt={tour.gallery[selectedGalleryItem].title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <video
                      src={tour.gallery[selectedGalleryItem].url}
                      controls
                      className="w-full h-full"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-4 gap-3">
                {tour.gallery.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedGalleryItem(index)}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      selectedGalleryItem === index
                        ? 'border-current scale-95'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                    style={selectedGalleryItem === index ? { borderColor: 'var(--forest-green)' } : {}}
                  >
                    {item.type === 'image' ? (
                      <ImageWithFallback
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-black">
                        <video src={item.url} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Tabs defaultValue="itinerary">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                  <TabsTrigger value="pickup">Pickup</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                {/* Itinerary Tab */}
                <TabsContent value="itinerary" className="space-y-6">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="border-l-2 pl-6 pb-6 relative" style={{ borderColor: 'var(--earth)' }}>
                      <div className="flex items-start gap-4">
                        <div
                          className="absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0"
                          style={{ backgroundColor: 'var(--forest-green)' }}
                        >
                          {day.day}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                              Day {day.day}: {day.title}
                            </h4>
                          </div>
                          <p className="text-sm mb-2" style={{ color: 'var(--forest-green)' }}>{day.time}</p>
                          <p className="opacity-70 mb-4">{day.description}</p>
                          <div className="space-y-2">
                            {day.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--forest-green)' }} />
                                <span className="text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                {/* Inclusions Tab */}
                <TabsContent value="inclusions" className="space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--forest-green)' }}>
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                        What's Included
                      </h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {tour.inclusions.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-green-50">
                          <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--forest-green)' }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-100">
                        <X className="w-5 h-5 text-red-600" />
                      </div>
                      <h4 className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                        What's Not Included
                      </h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {tour.exclusions.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-red-50">
                          <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-600" />
                          <span className="opacity-70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Pickup Tab */}
                <TabsContent value="pickup" className="space-y-6">
                  <div className="mb-6">
                    <h4 className="text-xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      Available Pickup Locations
                    </h4>
                    <p className="opacity-70">
                      Choose your preferred pickup point. Our team will confirm exact timing upon booking.
                    </p>
                  </div>
                  
                  <div className="grid gap-4">
                    {tour.pickupPoints.map((point, idx) => (
                      <div key={idx} className="p-6 border-2 rounded-xl hover:shadow-md transition-shadow" style={{ borderColor: 'var(--earth)' }}>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--forest-green)' }}>
                            <MapPin className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h5 className="text-lg mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                              {point.location}
                            </h5>
                            <p className="text-sm opacity-70 mb-2">{point.address}</p>
                            <div className="flex items-center gap-2 text-sm">
                              <CalendarIcon className="w-4 h-4" style={{ color: 'var(--forest-green)' }} />
                              <span>Pickup Time: {point.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Reviews Tab */}
                <TabsContent value="reviews">
                  <div className="text-center py-12 opacity-70">
                    <Star className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--earth)' }} />
                    <p className="text-lg">
                      {tour.reviews} reviews with an average rating of {tour.rating}/5.0
                    </p>
                    <p className="mt-2">Review details coming soon...</p>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <Card className="p-6 border-2" style={{ borderColor: 'var(--earth)' }}>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--forest-green)' }}>
                      {tour.price}
                    </span>
                    <span className="opacity-70">/ person</span>
                  </div>
                  <p className="text-sm opacity-70">Reserve now for just ₹{reservationDeposit}</p>
                </div>

                {/* Date Picker */}
                <div className="mb-6">
                  <label className="block mb-2">Select Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Guest Selector */}
                <div className="mb-6">
                  <label className="block mb-2">Number of Guests</label>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{guests}</span>
                    </div>
                    <button
                      onClick={() => setGuests(Math.min(12, guests + 1))}
                      className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="opacity-70">{tour.price} × {guests} guest{guests > 1 ? 's' : ''}</span>
                    <span>₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span>Total</span>
                    <span className="text-xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--forest-green)' }}>
                      ₹{totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full rounded-full mb-4 py-6"
                  style={{ backgroundColor: 'var(--forest-green)' }}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Reserve for ₹{reservationDeposit}
                </Button>

                <Button
                  variant="outline"
                  className="w-full rounded-full py-6 border-2"
                  style={{ borderColor: 'var(--forest-green)', color: 'var(--forest-green)' }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact on WhatsApp
                </Button>

                <div className="mt-6 pt-6 border-t text-sm opacity-70">
                  <p className="mb-2">
                    <strong>Cancellation Policy:</strong> Free cancellation up to 10 days before tour. 50% refund for 5-10 days notice. ₹49 reservation fee is fully refundable if cancellation is made within 24 hours of booking.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
