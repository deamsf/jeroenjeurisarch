import { useState, useEffect, useCallback } from 'react';
import { useSwipeable, SwipeableProps } from 'react-swipeable';
import { Pointer } from 'lucide-react';
import { projectsData } from '../utils/projects';

interface HeroBannerProps {
  onContactClick: () => void;
}

export default function HeroBanner({ onContactClick }: HeroBannerProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lastMoveTime, setLastMoveTime] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const projectImages = projectsData.map(project => project.imagePath);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isMobile || projectImages.length === 0) return;

    const now = Date.now();
    const timeDiff = now - lastMoveTime;
    
    if (timeDiff > 300) {
      const speed = Math.sqrt(Math.pow(e.movementX, 2) + Math.pow(e.movementY, 2));
      if (speed > 15) {
        setCurrentImageIndex(prev => (prev + 1) % projectImages.length);
        setLastMoveTime(now);
      }
    }
  }, [lastMoveTime, isMobile, projectImages.length]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (isMobile && projectImages.length > 0) {
        setCurrentImageIndex(prev => (prev + 1) % projectImages.length);
      }
    },
    onSwipedRight: () => {
      if (isMobile && projectImages.length > 0) {
        setCurrentImageIndex(prev => 
          prev === 0 ? projectImages.length - 1 : prev - 1
        );
      }
    },
    trackMouse: true
  } as SwipeableProps);

  return (
    <section 
      className="relative h-screen flex items-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      {...handlers}
    >
      {projectImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-300 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ willChange: 'opacity' }}
        >
          <img
            src={image}
            alt="Architectural project"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ willChange: 'transform' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70"></div>
        </div>
      ))}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-float">
            <h1 className="text-6xl md:text-8xl font-display font-bold text-primary mb-6 leading-tight">
              Creating<br />
              <span className="text-accent">Spaces</span> That<br />
              <span className="relative group">
                Inspire
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
              </span>
            </h1>
          </div>
          <p className="text-xl text-primary/90 mb-12 max-w-xl">
            Modern architecture that pushes boundaries and creates lasting impressions
          </p>
          <button onClick={onContactClick} className="btn-primary">Contact me</button>
        </div>
      </div>
      
      {isMobile && projectImages.length > 0 && (
        <div className="absolute bottom-8 right-8">
          <Pointer className="text-primary/80 w-6 h-6 animate-swipe" />
        </div>
      )}
      
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-accent/10 blur-3xl rounded-full transform translate-x-1/4 translate-y-1/4"></div>
    </section>
  );
}