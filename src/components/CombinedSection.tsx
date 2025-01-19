import { FiMail, FiPhone, FiMapPin, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { useState } from 'react';

export default function CombinedSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 bg-primary">
      <div className="container">
        <h2 className="section-title mb-12 md:mb-16">Jeroen Jeuris</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-24">
          {/* Profile Picture/Logo */}
          <div 
            className="relative aspect-square md:max-w-[300px] xl:max-w-[400px] mx-auto md:mx-0 w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 bg-secondary/5 rounded-lg transform -rotate-6 transition-transform duration-300 group-hover:rotate-0"></div>
            <div className="absolute inset-0 bg-accent/5 rounded-lg transform rotate-3 transition-transform duration-300 group-hover:rotate-0"></div>
            <div className="relative h-full overflow-hidden rounded-lg bg-white/50">
              <img 
                src={isHovered ? "/logo/logo-jj.svg" : "/img/jeroen.jpg"}
                alt="Jeroen Jeuris"
                className={`w-full h-full transition-all duration-500 ${
                  isHovered ? 'object-contain p-8' : 'object-cover'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center space-x-4 group">
              <FiMail className="text-xl md:text-2xl text-accent group-hover:scale-110 transition-transform" />
              <a href="mailto:info@jeroenjeuris.be" className="text-sm md:text-base hover:text-accent transition-colors">
                info@jeroenjeuris.be
              </a>
            </div>
            <div className="flex items-center space-x-4 group">
              <FiPhone className="text-xl md:text-2xl text-accent group-hover:scale-110 transition-transform" />
              <a href="tel:+32473466433" className="text-sm md:text-base hover:text-accent transition-colors">
                +32 473 46 64 33
              </a>
            </div>
            <div className="flex items-center space-x-4 group">
              <FiInstagram className="text-xl md:text-2xl text-accent group-hover:scale-110 transition-transform" />
              <a href="#" className="text-sm md:text-base hover:text-accent transition-colors">
                Instagram
              </a>
            </div>
            <div className="flex items-center space-x-4 group">
              <FiLinkedin className="text-xl md:text-2xl text-accent group-hover:scale-110 transition-transform" />
              <a href="#" className="text-sm md:text-base hover:text-accent transition-colors">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center space-x-4 group">
              <FiMapPin className="text-xl md:text-2xl text-accent group-hover:scale-110 transition-transform" />
              <a
                href="https://maps.app.goo.gl/FTCcwETdUecV4Hj1A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base hover:text-accent transition-colors"
              >
                Jeroen Jeuris Architect<br />
                BE0691564468<br />
                INCubator Hasselt
              </a>
            </div>
          </div>

          {/* Tagline */}
          <div className="space-y-6 xl:mt-0 md:col-span-2 xl:col-span-1">
            <p className="text-base md:text-lg font-light leading-relaxed text-secondary/90">
              Ik combineer creativiteit en ervaring om unieke, duurzame projecten te realiseren die perfect aansluiten bij jouw leefwereld.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-secondary/90">
              Met een persoonlijke aanpak creëer ik innovatieve projecten waarin jouw wensen en mijn architecturale visie samenkomen tot een harmonieus en impactvol eindresultaat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}