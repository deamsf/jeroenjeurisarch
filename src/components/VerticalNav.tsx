import { useState, useEffect } from 'react';
import { FiHome, FiUser, FiStar } from 'react-icons/fi';

export const navItems = [
  { id: 'hero', icon: FiHome, label: 'Home' },
  { id: 'about', icon: FiUser, label: 'Over mezelf' },
  { id: 'testimonials', icon: FiStar, label: 'Testimonials' },
];

export default function VerticalNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-6">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`group relative flex items-center justify-center w-10 h-10 rounded-full 
                      transition-all duration-300 ${
                        activeSection === id
                          ? 'bg-accent text-white shadow-lg shadow-accent/30'
                          : 'bg-white/80 text-secondary/60 hover:bg-accent/10'
                      }`}
          >
            <Icon className="w-5 h-5" />
            <span className="absolute right-full mr-4 px-2 py-1 rounded bg-white/90 text-secondary
                           text-sm font-medium opacity-0 -translate-x-2 pointer-events-none
                           transition-all duration-300 whitespace-nowrap shadow-lg
                           group-hover:opacity-100 group-hover:translate-x-0">
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}