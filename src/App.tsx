import { useState } from 'react';
import { FiMail, FiPhone, FiInstagram, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { BiBuildings, BiPencil, BiRuler, BiHome } from 'react-icons/bi';
import ProjectsSection from './components/ProjectsSection';
import HeroBanner from './components/HeroBanner';
import VerticalNav from './components/VerticalNav';
import MobileNav from './components/MobileNav';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const errors = {
      name: !formData.name ? 'Name is required' : '',
      email: !formData.email ? 'Email is required' : 
            !validateEmail(formData.email) ? 'Please enter a valid email address' : '',
      message: !formData.message ? 'Message is required' :
              formData.message.length < 15 ? 'Please provide us a little more information' : ''
    };
    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = () => {
    return formData.name && 
           formData.email && 
           validateEmail(formData.email) && 
           formData.message && 
           formData.message.length >= 15;
  };

  return (
    <div className="min-h-screen">
      <VerticalNav />
      <MobileNav />
      
      <section id="hero">
        <HeroBanner onContactClick={scrollToContact} />
      </section>

      <AboutSection />

      <ProjectsSection />
      
      <section id="services" className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BiBuildings, title: 'Architectural Design', desc: 'Complete design solutions for modern buildings' },
              { icon: BiPencil, title: 'Interior Planning', desc: 'Functional and aesthetic interior spaces' },
              { icon: BiRuler, title: 'Technical Drawing', desc: 'Detailed technical documentation' },
              { icon: BiHome, title: 'Residential Projects', desc: 'Custom home design and renovation' },
            ].map((service, index) => (
              <div key={index} className="service-card">
                <service.icon className="text-4xl text-secondary mb-4" />
                <h3 className="text-xl font-display font-bold text-accent mb-2">{service.title}</h3>
                <p className="text-secondary/80">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section id="contact" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-primary">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-primary mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                {formErrors.name && (
                  <p className="text-accent text-sm mt-1">{formErrors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-primary mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                {formErrors.email && (
                  <p className="text-accent text-sm mt-1">{formErrors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-primary mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="form-input"
                  required
                ></textarea>
                {formErrors.message && (
                  <p className="text-accent text-sm mt-1">{formErrors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`btn-primary w-full ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Send Message
              </button>
            </form>
            <div className="text-primary">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FiMail className="text-2xl" />
                  <span>jeroen@jeuris.arch</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FiPhone className="text-2xl" />
                  <span>+32 123 456 789</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FiMapPin className="text-2xl" />
                  <a
                    href="https://maps.google.com/?q=Architectural+Studio+Jeuris,+Antwerp,+Belgium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Architectural Studio Jeuris<br />
                    Antwerp, Belgium
                  </a>
                </div>
                <div className="flex space-x-4 mt-8">
                  <a
                    href="#"
                    className="p-3 bg-primary/10 rounded-full hover:bg-accent transition-colors"
                  >
                    <FiInstagram className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-primary/10 rounded-full hover:bg-accent transition-colors"
                  >
                    <FiLinkedin className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}