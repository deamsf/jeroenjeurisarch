import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navItems } from './VerticalNav';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-1/2 -translate-y-1/2 right-0 z-50 p-3 bg-white/90 rounded-l-lg shadow-lg text-secondary hover:bg-accent hover:text-white transition-colors duration-300"
      >
        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      <div
        className={`fixed inset-0 bg-secondary/95 backdrop-blur-sm z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="h-full flex items-center justify-center">
          <ul className="space-y-8">
            {navItems.map(({ id, icon: Icon, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="flex items-center gap-4 text-2xl text-primary/80 hover:text-accent transition-colors"
                >
                  <Icon className="w-6 h-6" />
                  <span className="font-display">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}