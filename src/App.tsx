import HeroBanner from './components/HeroBanner';
import VerticalNav from './components/VerticalNav';
import MobileNav from './components/MobileNav';
import AboutMeSection from './components/AboutMeSection';
import ContactSection from './components/ContactSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

export default function App() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <VerticalNav />
      <MobileNav />
      
      <section id="hero">
        <HeroBanner onContactClick={scrollToAbout} />
      </section>
      
      <AboutMeSection />
      
      <ContactSection />
      
      <TestimonialsSection />

      <Footer />
    </div>
  );
}