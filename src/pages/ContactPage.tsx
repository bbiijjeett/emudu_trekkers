import { motion } from 'motion/react';
import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@emudutrekkers.com', 'bookings@emudutrekkers.com']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 765-4321']
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Mountain View Road', 'Banff, Alberta T1L 1A1, Canada']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNvbnRhY3R8ZW58MXx8fHwxNzYxNzQ5Mjg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Contact us"
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
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white">
              Let's plan your next mountain or lake adventure together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: 'var(--forest-green)' }}
                >
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="opacity-70 mb-1">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ backgroundColor: 'var(--white)' }}>
        <ContactForm />
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--forest-green)' }}>
              Find Us
            </h2>
            <p className="text-lg opacity-70">
              Visit our office in the heart of the Canadian Rockies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 rounded-3xl overflow-hidden bg-gray-200"
          >
            {/* Placeholder for map - you can integrate Google Maps or similar */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Map Integration Placeholder</p>
                <p className="text-sm opacity-70">123 Mountain View Road, Banff, Alberta</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
