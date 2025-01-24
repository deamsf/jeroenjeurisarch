/* import React from 'react';
import { Search, PenTool, Sparkles } from 'lucide-react';
import ServiceCard from './ServiceCard';
import ServiceCarousel from './ServiceCarousel';

const services = [
  {
    icon: Search,
    title: 'Discover: The Roots of the Product',
    description: [
      {
        keyword: 'User Research',
        details: 'Understand your audience through surveys, interviews, and feedback analysis'
      },
      {
        keyword: 'Market Research',
        details: 'Validate product ideas with market trends and early testing (pretotyping)'
      },
      {
        keyword: 'Competitor Research',
        details: 'Analyze market players to identify opportunities and differentiate your product'
      },
      {
        keyword: 'Data Research',
        details: 'Transform raw data into clear, actionable insights that drive decisions'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
    ],
    fullDescription: 'We help you explore and deeply understand your product from both user and market perspectives. Our research services cover quantitative studies, qualitative analysis, and comprehensive user feedback evaluation to ensure your product meets market expectations.'
  },
  {
    icon: PenTool,
    title: 'Design: The Heart of the Product',
    description: [
      {
        keyword: 'Product Manifesto',
        details: 'Define your product\'s core purpose and guiding principles'
      },
      {
        keyword: 'Product Strategy',
        details: 'Set clear vision, mission, and objectives that align with business goals'
      },
      {
        keyword: 'Persona Development',
        details: 'Create detailed user profiles to guide product decisions'
      },
      {
        keyword: 'Product Roadmap',
        details: 'Plan and prioritize features based on value and impact'
      },
      {
        keyword: 'Requirements Doc',
        details: 'Document user stories and specifications for clear development guidance'
      },
      {
        keyword: 'Backlog Management',
        details: 'Maintain and prioritize features based on market insights'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000'
    ],
    fullDescription: 'In the design phase, we combine strategy and planning to give your product direction and structure. From developing clear product vision to managing the backlog, we ensure every aspect of your product is well-thought-out and purposeful.'
  },
  {
    icon: Sparkles,
    title: 'Delight: The Face of the Product',
    description: [
      {
        keyword: 'UX/UI Analysis',
        details: 'Enhance user experience through friction hunting and A/B testing'
      },
      {
        keyword: 'SEO Strategy',
        details: 'Optimize visibility with technical and content improvements'
      },
      {
        keyword: 'Communication',
        details: 'Craft compelling GTM strategies and content that resonates'
      },
      {
        keyword: 'Performance',
        details: 'Monitor and optimize product metrics for continuous improvement'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000'
    ],
    fullDescription: 'The front-end and engagement phase focuses on user experience and marketing aspects. We ensure your product is not just functional but also visually appealing and engaging for your target audience.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Product management solutions at the intersection of user insights,
            product management, and UX/UI communications
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {services.map((service, index) => (
          <div key={index} className="mb-20 last:mb-0">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            }`}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-300">{service.fullDescription}</p>
                <ul className="space-y-3">
                  {service.description.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-accent mr-2">•</span>
                      <span><strong className="text-accent">{item.keyword}:</strong> {item.details}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`h-[400px] ${index % 2 === 0 ? 'md:order-last' : 'md:order-first'}`}>
                <ServiceCarousel images={service.images} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

*/