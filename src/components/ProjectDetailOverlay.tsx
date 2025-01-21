import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { Project } from '../types/project';
import { getProjectImages } from '../utils/projects';
import ReactMarkdown from 'react-markdown';

interface ProjectDetailOverlayProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetailOverlay({ project, onClose }: ProjectDetailOverlayProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projectImages, setProjectImages] = useState<string[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    const loadImages = () => {
      try {
        const projectId = project.imagePath.split('/')[3];
        const images = getProjectImages(projectId);
        setProjectImages(images.length > 0 ? images : [project.imagePath]);
        setImagesLoaded(new Array(images.length).fill(false));
      } catch (error) {
        console.error('Error loading project images:', error);
        setProjectImages([project.imagePath]);
        setImagesLoaded([false]);
      }
    };

    loadImages();
    setCurrentImageIndex(0);
  }, [project]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

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
      className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="min-h-screen w-full flex flex-col lg:flex-row"
        onClick={e => e.stopPropagation()}
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

        {/* Image Section */}
        <div className="relative w-full lg:w-2/3 h-[50vh] lg:h-screen flex items-center justify-center p-4" {...handlers}>
          <div className="relative w-full h-full flex items-center justify-center">
            {!imagesLoaded[currentImageIndex] && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <img
              key={projectImages[currentImageIndex]}
              src={projectImages[currentImageIndex]}
              alt={`${project.title} - View ${currentImageIndex + 1}`}
              className={`w-full h-full object-contain transition-opacity duration-300 ${
                imagesLoaded[currentImageIndex] ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>

          {projectImages.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/75 rounded-full text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/75 rounded-full text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {projectImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
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
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/3 min-h-[50vh] lg:h-screen bg-white/10 backdrop-blur-md p-6 lg:p-8 overflow-y-auto">
          <div className="h-full flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-display font-medium text-white mb-4">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-white/10 rounded-full text-sm text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="w-16 h-[2px] bg-accent mb-6"></div>
            </div>

            <div className="prose prose-invert prose-sm max-w-none">
              <ReactMarkdown>{project.longDescription}</ReactMarkdown>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 p-2 bg-black/50 hover:bg-black/75 rounded-full text-white transition-colors z-50"
          aria-label="Close overlay"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}