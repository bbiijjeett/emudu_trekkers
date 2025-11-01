import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { FeaturedTours } from '../components/FeaturedTours';
import { DestinationMap } from '../components/DestinationMap';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';
import { StickyButton } from '../components/StickyButton';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedTours />
      {/* <DestinationMap /> */}
      <Testimonials />
      <ContactForm />
      <StickyButton />
    </>
  );
}
