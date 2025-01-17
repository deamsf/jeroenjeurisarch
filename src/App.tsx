import { useState } from 'react';
import ProjectsSection from './components/ProjectsSection';
import HeroBanner from './components/HeroBanner';
import VerticalNav from './components/VerticalNav';
import MobileNav from './components/MobileNav';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
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
      
      <AboutSection />

      <ServicesSection />

      <TestimonialsSection />

      <ContactSection />

      <Footer />
    </div>
  );
}