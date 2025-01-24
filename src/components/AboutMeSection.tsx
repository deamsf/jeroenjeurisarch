import { FiMail, FiMapPin } from 'react-icons/fi';
import { useState } from 'react';

export default function AboutMeSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 bg-primary">
      <div className="container">
        <h2 className="section-title mb-12 md:mb-16 font-medium">Jeroen Jeuris</h2>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column: Photo and Contact Info */}
          <div className="space-y-8">
            {/* Profile Picture/Logo */}
            <div 
              className="relative aspect-square max-w-[300px] lg:max-w-full mx-auto lg:mx-0 w-full"
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
          </div>

          {/* Right Column: Text Content (spans 2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-base md:text-lg font-light leading-relaxed text-secondary/90">
              Creativiteit en ervaring vormen de basis voor uw unieke project.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-secondary/90">
              Vanaf het eerste idee kan u een nauwe samenwerking verwachten. U wordt actief betrokken bij elke stap in het proces, zodat het eindresultaat volledig aansluit op uw visie en behoeften. Tegelijkertijd wordt er zorgvuldig rekening gehouden met de regelgeving en het beschikbare budget, zodat alles soepel verloopt.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-secondary/90">
              Duurzaamheid en circulariteit staan centraal in mijn aanpak. Uw project wordt ontworpen met respect voor het milieu en toekomstige generaties, waarbij esthetiek en functionaliteit altijd in balans zijn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}