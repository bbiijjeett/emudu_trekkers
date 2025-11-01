import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';
import img1 from '../assets/about1.jpg'

export function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    dates: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We\'ll be in touch soon to plan your adventure.');
    setFormData({ name: '', email: '', phone: '', destination: '', dates: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" ref={ref} className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="subheading text-sm mb-4" style={{ color: 'var(--alpine-blue)', letterSpacing: '0.15em' }}>
            GET IN TOUCH
          </div>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--forest-green)' }}>
            Plan Your Trip
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-70">
            Let's create an unforgettable adventure tailored just for you
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-96 rounded-3xl overflow-hidden mb-8">
              <ImageWithFallback
                src={img1}
                alt="Mountain Summit"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-3xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Get in Touch
            </h3>
            <p className="mb-8 opacity-70 text-lg">
              Our travel specialists are here to help you craft the perfect mountain and lake experience. Reach out with any questions or to start planning your journey.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--forest-green)' }}>
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="opacity-70 mb-1">Email us</p>
                  <p className="text-lg">info@emudutrekkers.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--forest-green)' }}>
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="opacity-70 mb-1">Call us</p>
                  <p className="text-lg">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--forest-green)' }}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="opacity-70 mb-1">Visit us</p>
                  <p className="text-lg">123 Mountain View Drive<br />Boulder, CO 80301</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  className="mt-2"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                  className="mt-2"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="mt-2"
                  placeholder="+91 9824110123"
                />
              </div>

              <div>
                <Label htmlFor="destination">Preferred Destination</Label>
                <Select value={formData.destination} onValueChange={(value) => handleChange('destination', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="swiss-alps">Seven Lake</SelectItem>
                    <SelectItem value="canadian-rockies">Dibang Valley</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="dates">Preferred Travel Dates</Label>
                <Input
                  id="dates"
                  value={formData.dates}
                  onChange={(e) => handleChange('dates', e.target.value)}
                  className="mt-2"
                  placeholder="e.g., June 2025"
                />
              </div>

              <div>
                <Label htmlFor="message">Tell us about your dream adventure</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="mt-2 min-h-32"
                  placeholder="Share any specific interests, experience level, or questions you have..."
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full py-6 text-lg"
                style={{ backgroundColor: 'var(--forest-green)' }}
              >
                Submit Inquiry
              </Button>

              <p className="text-sm opacity-60 text-center">
                We typically respond within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
