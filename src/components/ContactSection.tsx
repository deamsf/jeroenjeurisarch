import { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { FiMail, FiMapPin } from 'react-icons/fi';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError('Gelieve een geldig e-mailadres in te vullen');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validateMessage = (message: string) => {
    if (message.length > 0 && message.length < 15) {
      setMessageError('Gelieve wat meer informatie te geven');
      return false;
    }
    setMessageError('');
    return true;
  };

  const isFormValid = () => {
    return (
      formData.user_name.trim() !== '' &&
      formData.user_email.trim() !== '' &&
      formData.message.trim() !== '' &&
      !emailError &&
      !messageError &&
      formData.message.length >= 15
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'user_email') {
      validateEmail(value);
    } else if (name === 'message') {
      validateMessage(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || !isFormValid()) return;

    setIsSubmitting(true);
    
    // Create template params object
    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message
    };

    try {
      // Send the contact message
      await emailjs.send(
        'service_l2wbg8j',
        'template_6cswg2c',
        templateParams,
        'onKhe5UJ-h3f2MCn7'
      );
      
      // Send confirmation receipt
      await emailjs.send(
        'service_l2wbg8j',
        'template_y55fah4',
        templateParams,
        'onKhe5UJ-h3f2MCn7'
      );

      toast.success('Bericht succesvol verzonden!', { duration: 4000 });
      formRef.current.reset();
      setFormData({ user_name: '', user_email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Verzenden mislukt. Probeer het opnieuw.', { duration: 4000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container">
        <h2 className="section-title text-secondary">Contacteer mij</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="user_name" className="block text-secondary mb-2">
                Naam <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-secondary/5 border border-secondary/20 rounded-lg text-secondary focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="user_email" className="block text-secondary mb-2">
                E-mail <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 bg-secondary/5 border rounded-lg text-secondary focus:ring-2 focus:ring-accent focus:border-transparent ${
                  emailError ? 'border-red-500' : 'border-secondary/20'
                }`}
              />
              {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-secondary mb-2">
                Bericht <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className={`w-full px-4 py-3 bg-secondary/5 border rounded-lg text-secondary focus:ring-2 focus:ring-accent focus:border-transparent ${
                  messageError ? 'border-red-500' : 'border-secondary/20'
                }`}
              />
              {messageError && <p className="mt-1 text-sm text-red-500">{messageError}</p>}
            </div>

            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className={`w-full px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                isFormValid() && !isSubmitting
                  ? 'bg-accent hover:bg-accent/90 text-secondary'
                  : 'bg-secondary/20 cursor-not-allowed text-secondary/50'
              }`}
              title={!isFormValid() ? 'Vul het formulier correct in voordat je het verstuurt' : ''}
            >
              {isSubmitting ? 'Verzenden...' : (
                <>
                  Verstuur bericht
                  <Send size={20} />
                </>
              )}
            </button>
          </form>

          <div className="text-secondary space-y-6">
            <div className="flex items-center space-x-4">
              <FiMail className="text-2xl" />
              <span><a href="mailto:info@jeroenjeuris.be">info@jeroenjeuris.be</a></span>
            </div>
            <div className="flex items-center space-x-4">
              <FiMapPin className="text-2xl" />
              <a
                href="https://maps.app.goo.gl/FTCcwETdUecV4Hj1A"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                INCubator Hasselt<br />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </section>
  );
}