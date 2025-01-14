import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RiDoubleQuotesL } from 'react-icons/ri';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    quote: 'The attention to detail and innovative design solutions transformed our house into a stunning modern home that perfectly fits our lifestyle.',
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    quote: 'Working with this studio was a game-changer for our office space. They created an environment that inspires creativity and productivity.',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Interior Designer',
    quote: 'Their architectural vision and ability to blend form with function is exceptional. Every project is a masterpiece of modern design.',
  },
];

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
    <section id="testimonials" className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-primary">What Clients Say</h2>
        
        <div className="relative mt-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                      <RiDoubleQuotesL className="text-5xl text-accent mb-6" />
                      <p className="text-xl md:text-2xl text-primary/90 mb-8 italic">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h4 className="text-lg font-display font-bold text-primary">
                          {testimonial.name}
                        </h4>
                        <p className="text-primary/60">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-accent transition-colors"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-accent transition-colors"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}