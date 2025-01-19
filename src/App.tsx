import ProjectsSection from './components/ProjectsSection';
import HeroBanner from './components/HeroBanner';
import VerticalNav from './components/VerticalNav';
import MobileNav from './components/MobileNav';
import CombinedSection from './components/CombinedSection';
import TestimonialsSection from './components/TestimonialsSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <VerticalNav />
      <MobileNav />
      
      <section id="hero">
        <HeroBanner onContactClick={scrollToContact} />
      </section>

      <ProjectsSection />
      
      <CombinedSection />
      
      <ServicesSection />
      
      <TestimonialsSection />

      {/* <ContactSection /> */}

      <Footer />
    </div>
  );
}