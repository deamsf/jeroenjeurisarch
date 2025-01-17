import { useState } from 'react';
import { FiMail, FiPhone, FiInstagram, FiLinkedin, FiMapPin } from 'react-icons/fi';

export default function ContactSection() {
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
                <span>jeroen@jeroenjeuris.be</span>
              </div>
              <div className="flex items-center space-x-4">
                <FiPhone className="text-2xl" />
                <span>+32 473 46 64 33</span>
              </div>
              <div className="flex items-center space-x-4">
                <FiMapPin className="text-2xl" />
                <a
                  href="https://maps.app.goo.gl/FTCcwETdUecV4Hj1A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Jeroen Jeuris Architect<br />
                  BE0691564468<br />
                  INCubator Hasselt<br />
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
  );
}