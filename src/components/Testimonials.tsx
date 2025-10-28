import React, { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Altiora transformó nuestra operación manual en un sistema automatizado que nos ahorró cientos de horas. Su enfoque fue rápido, claro y superó nuestras expectativas.",
    author: "CEO, Startup de Logística",
    tag: "Testimonio MVP"
  },
  {
    quote: "El equipo de Altiora no solo desarrolló nuestra plataforma de e-commerce, sino que también nos asesoró estratégicamente para mejorar la conversión. Un socio tecnológico invaluable.",
    author: "CMO, Tienda de Moda Online",
    tag: "Caso de Éxito"
  },
  {
    quote: "Necesitábamos una solución SaaS compleja y el resultado fue excepcional. La calidad del código y la atención al detalle durante todo el proceso fueron de primer nivel.",
    author: "CTO, Empresa de Software",
    tag: "Solución Enterprise"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);


  return (
    <section id="testimonials" className="py-12 md:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-alt-purple dark:text-violet-300 mb-6 md:mb-10">
              Lo que dicen de nosotros
            </h2>
            <div className="relative bg-light dark:bg-gray-800 text-alt-purple dark:text-violet-300 p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-xl overflow-hidden">
                <Quote className="absolute top-2 left-2 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-alt-gold opacity-20" fill="currentColor" />
                
                {/* Testimonial Content */}
                <div className="relative w-full min-h-[200px] sm:min-h-[180px] md:min-h-[160px] flex items-center">
                   {testimonials.map((testimonial, index) => (
                       <div 
                         key={index} 
                         className="absolute w-full transition-opacity duration-500 ease-in-out px-2 sm:px-4"
                         style={{ opacity: index === currentIndex ? 1 : 0 }}
                       >
                           <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl italic font-medium leading-relaxed">
                               "{testimonial.quote}"
                           </blockquote>
                           <cite className="block mt-4 sm:mt-6 not-italic font-bold text-alt-gold text-sm sm:text-base">
                               – {testimonial.author}
                           </cite>
                           <div className="mt-2 sm:absolute sm:bottom-0 sm:right-0 sm:mb-2 sm:mr-2 px-2 sm:px-3 py-1 bg-alt-gold text-alt-purple text-xs font-bold rounded-xl uppercase tracking-wider">
                             {testimonial.tag}
                           </div>
                       </div>
                   ))}
                </div>
                
                {/* Navigation Buttons */}
                <div className="mt-8 sm:mt-0">
                  <button 
                      onClick={prevSlide}
                      name="Previous testimonial"
                      type="button"
                      id="Previous testimonial"
                      aria-label="Previous testimonial"
                      aria-controls="testimonials"
                      aria-expanded="false"
                      className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 sm:p-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-alt-gold"
                  >
                      <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                  
                  <button 
                      onClick={nextSlide}
                      name="Next testimonial"
                      type="button"
                      id="Next testimonial"
                      aria-label="Next testimonial"
                      aria-controls="testimonials"
                      aria-expanded="false"
                      className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 sm:p-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-alt-gold"
                  >
                      <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </div>

                 {/* Dots Navigation */}
                <div className="mt-6 sm:mt-8 flex justify-center space-x-2">
                    {testimonials.map((_, index) => (
                        <button 
                            key={index} 
                            onClick={() => setCurrentIndex(index)}
                            name={`Go to testimonial ${index + 1}`}
                            type="button"
                            id={`testimonial-${index}`}
                            aria-controls="testimonials"
                            aria-expanded={index === currentIndex}
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                              index === currentIndex 
                                ? 'bg-alt-gold scale-125' 
                                : 'bg-white/30 hover:bg-white/50'
                            }`}
                            aria-label={`Ir al testimonio ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
