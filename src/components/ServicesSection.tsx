import { BiBuildings, BiPencil, BiRuler, BiHome } from 'react-icons/bi';

export default function ServicesSection() {
  return (
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
  );
}