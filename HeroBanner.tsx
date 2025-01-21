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
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const projectImages = projectsData.map(project => project.imagePath);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setImagesLoaded(new Array(projectImages.length).fill(false));
  }, [projectImages.length]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

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
      {/* Preload Images */}
      <div className="hidden">
        {projectImages.map((src, index) => (
          <img
            key={`preload-${src}`}
            src={src}
            onLoad={() => handleImageLoad(index)}
            alt=""
          />
        ))}
      </div>

      {projectImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ willChange: 'opacity' }}
        >
          {!imagesLoaded[index] && index === currentImageIndex && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={image}
            alt="Architectural project"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ willChange: 'transform' }}
          />
          {/* Changed the gradient overlay opacity here */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 to-secondary/20"></div>
        </div>
      ))}
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div className="animate-float">
            <h1 className="text-4xl md:text-6xl font-display font-medium text-primary mb-6 leading-tight tracking-wide">
              Innovatief<br />
              <span className="text-accent/90">Inspirerend</span><br />
              <span className="relative group">
                Impactvol
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent/80 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
              </span>
            </h1>
          </div>
          <p className="text-xl text-primary/90 mb-12 max-w-xl">
            Toekomstgerichte ruimtes voor innovatieve en bewuste gebruikers.
          </p>
          <button onClick={onContactClick} className="btn-primary">Contacteer mij</button>
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