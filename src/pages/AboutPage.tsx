import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Leaf, Award, Users, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import about3 from '../assets/about3.jpg'
import about4 from '../assets/about4.webp'

export function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We are committed to eco-friendly travel practices that preserve the natural beauty of our destinations for future generations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Award-winning tours designed by experts with years of experience in mountain and lake adventures.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We work closely with local communities, ensuring that tourism benefits the people who call these places home.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our team lives and breathes adventure, and we bring that enthusiasm to every journey we create.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Happy Travelers' },
    { number: '10+', label: 'Destinations' },
    { number: '05', label: 'Years Experience' },
    { number: '4.8', label: 'Average Rating' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHBhbm9yYW1hfGVufDF8fHx8MTc2MTc0OTI4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Mountain landscape"
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
              Our Story
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white">
              Connecting adventurers with the world's most breathtaking mountain and lake experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={ref} className="py-32 px-6 lg:px-8" style={{ backgroundColor: 'var(--white)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--forest-green)' }}>
                Our Mission
              </h2>
              <p className="text-lg mb-6 opacity-80">
                Emudu Trekkers was born from a deep love for mountains and lakes, and a desire to share these incredible experiences with fellow adventurers. We believe that travel should be transformative, sustainable, and accessible.
              </p>
              <p className="text-lg mb-6 opacity-80">
                Since our founding in 2010, we've guided thousands of travelers through some of the world's most spectacular landscapes. Our commitment to small group sizes ensures intimate experiences that minimize environmental impact while maximizing personal connection with nature.
              </p>
              <p className="text-lg opacity-80">
                Every tour is carefully crafted by our team of experienced guides who know these regions intimately. We prioritize safety, sustainability, and authentic cultural experiences in everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <ImageWithFallback
                    src={about1}
                    alt="Hiking group"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <ImageWithFallback
                    src={about2}
                    alt="Mountain summit"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <ImageWithFallback
                    src={about3}
                    alt="Lake camping"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <ImageWithFallback
                    src={about4}
                    alt="Mountain guide"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--forest-green)' }}>
              Our Values
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-70">
              The principles that guide every adventure we create
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
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
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {value.title}
                </h3>
                <p className="opacity-70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 lg:px-8" style={{ backgroundColor: 'var(--forest-green)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-5xl md:text-6xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 lg:px-8" style={{ backgroundColor: 'var(--white)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--forest-green)' }}>
              Meet Our Team
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-70 mb-16">
              Our guides are certified professionals with deep knowledge of the regions they explore. Many have grown up in these mountain communities and bring invaluable local insights to every tour.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 rounded-3xl overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522163182402-834f871fd851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB0ZWFtfGVufDF8fHx8MTc2MTc0OTI4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
