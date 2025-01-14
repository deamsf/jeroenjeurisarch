import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { Project } from '../types/project';
import { getProjectImages } from '../utils/projects';

interface ProjectDetailOverlayProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetailOverlay({ project, onClose }: ProjectDetailOverlayProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projectImages, setProjectImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = () => {
      try {
        const projectId = project.imagePath.split('/')[3];
        const images = getProjectImages(projectId);
        setProjectImages(images.length > 0 ? images : [project.imagePath]);
      } catch (error) {
        console.error('Error loading project images:', error);
        setProjectImages([project.imagePath]);
      }
    };

    loadImages();
    setCurrentImageIndex(0);
  }, [project]);

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
    trackMouse: true,
    preventScrollOnSwipe: true
  });

  return (
    <div 
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onClick={onClose}
      {...handlers}
    >
      <div 
        className="relative w-full h-full flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Current Image */}
        <div className="w-full h-full flex items-center justify-center p-4">
          <img
            key={projectImages[currentImageIndex]}
            src={projectImages[currentImageIndex]}
            alt={`${project.title} - View ${currentImageIndex + 1}`}
            className="max-h-[85vh] max-w-full w-auto h-auto object-contain"
          />
        </div>

        {/* Navigation Controls */}
        {projectImages.length > 1 && (
          <>
            {/* Left Arrow */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/75 rounded-full text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/75 rounded-full text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Progress Dots */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex
                      ? 'bg-white'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/75 rounded-full text-white transition-colors"
          aria-label="Close overlay"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}