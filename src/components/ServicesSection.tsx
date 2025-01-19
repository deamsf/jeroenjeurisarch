import { BiBuildings, BiPencil, BiRuler, BiHome } from 'react-icons/bi';

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="section-title text-primary">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: BiBuildings, title: 'Ontwerp', desc: 'Complete design solutions for modern buildings' },
            { icon: BiPencil, title: 'Planning', desc: 'Functional and aesthetic interior spaces' },
            { icon: BiRuler, title: 'Interieur', desc: 'Detailed technical documentation' },
            { icon: BiHome, title: 'Bedrijfsprojecten', desc: 'Custom design and renovation' },
          ].map((service, index) => (
            <div key={index} className="service-card bg-primary/5 backdrop-blur-sm border-primary/10">
              <service.icon className="text-4xl text-accent mb-4" />
              <h3 className="text-xl font-display font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-primary/80">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}