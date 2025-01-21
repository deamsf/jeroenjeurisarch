import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { testimonials } from '../utils/testimonials';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-secondary overflow-hidden">
      <div className="container">
        <h2 className="section-title text-primary font-medium mb-8">Dit zeggen zij</h2>
        
        <div className="relative">
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0"
                  >
                    <div className="bg-primary/5 backdrop-blur-sm rounded-lg p-6">
                      <RiDoubleQuotesL className="text-3xl text-accent mb-4" />
                      <p className="text-lg text-primary/90 mb-4 italic">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h4 className="text-base font-display font-medium text-primary">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-primary/60">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-4 gap-2">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-full bg-primary/10 text-primary hover:bg-accent transition-colors"
              >
                <FiChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-full bg-primary/10 text-primary hover:bg-accent transition-colors"
              >
                <FiChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}