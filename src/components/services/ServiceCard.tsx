/* import React from 'react';
import { Search, Crown, Sparkles } from 'lucide-react';

const icons = {
  Search,
  Crown,
  Sparkles
};

interface ServiceCardProps {
  title: string;
  subtitle: string;
  icon: keyof typeof icons;
  description: string;
  isActive: boolean;
  onClick: () => void;
  showConnector?: 'left' | 'right' | null;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  icon,
  description,
  isActive,
  onClick,
  showConnector
}) => {
  const Icon = icons[icon];

  return (
    <div className="relative">
      {showConnector && (
        <div 
          className={`absolute top-1/2 ${showConnector === 'right' ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-full h-px bg-accent/30`}
        />
      )}
      <div 
        className={`relative p-8 rounded-lg transition-all cursor-pointer
          ${isActive 
            ? 'bg-secondary/30 transform scale-105 shadow-lg' 
            : 'bg-secondary/20 hover:bg-secondary/25'}`}
        onClick={onClick}
      >
        <div className="flex justify-center mb-6">
          <div className={`p-4 rounded-full ${isActive ? 'bg-accent/20' : 'bg-tertiary/10'}`}>
            <Icon className={`w-8 h-8 ${isActive ? 'text-accent' : 'text-highlight'} stroke-1`} />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 text-center">{title}</h3>
        <p className="text-tertiary text-sm mb-4 text-center">{subtitle}</p>
        <p className="text-gray-300 text-center">{description}</p>
      </div>
    </div>
  );
};

*/