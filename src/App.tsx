import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import ScrollToTop  from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ToursListingPage } from './pages/ToursListingPage';
import { TourDetailPageWrapper } from './pages/TourDetailPageWrapper';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tours" element={<ToursListingPage />} />
          <Route path="/tours/:tourSlug" element={<TourDetailPageWrapper />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
