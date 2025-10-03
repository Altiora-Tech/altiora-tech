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
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-alt-purple dark:text-violet-300 mb-8">Lo que dicen de nosotros</h2>
            <div className="relative bg-light dark:bg-gray-800 text-alt-purple dark:text-violet-300 p-8 md:p-12 rounded-xl shadow-xl overflow-hidden">
                <Quote className="absolute top-0 left-0 -mt-4 -ml-4 w-16 h-16 text-alt-gold opacity-20" fill="currentColor" />
                <div className="relative w-full h-48 md:h-32 flex items-center">
                   {testimonials.map((testimonial, index) => (
                       <div key={index} className="absolute w-full transition-opacity duration-500 ease-in-out" style={{ opacity: index === currentIndex ? 1 : 0 }}>
                           <blockquote className="text-xl md:text-2xl italic font-medium leading-relaxed">
                               “{testimonial.quote}”
                           </blockquote>
                           <cite className="block mt-6 not-italic font-bold text-alt-gold">
                               – {testimonial.author}
                           </cite>
                           <div className="absolute bottom-0 right-0 -mb-20 -mr-3 px-3 py-1 bg-alt-gold text-alt-purple text-xs font-bold rounded-xl uppercase tracking-wider">
                             {testimonial.tag}
                           </div>
                       </div>
                   ))}
                </div>
                 {/* Navigation */}
                <button 
                    onClick={prevSlide}
                    name="Previous testimonial"
                    id="Previous testimonial"
                    aria-label="Previous testimonial"
                    aria-controls="testimonials"
                    aria-expanded="false"
                    aria-hidden="true"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                    onClick={nextSlide}
                    name="Next testimonial"
                    id="Next testimonial"
                    aria-label="Next testimonial"
                    aria-controls="testimonials"
                    aria-expanded="false"
                    aria-hidden="true"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                    <ChevronRight className="h-6 w-6" />
                </button>

                 {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {testimonials.map((_, index) => (
                        <button 
                            key={index} 
                            onClick={() => setCurrentIndex(index)}
                            name="Go to testimonial"
                            id="Go to testimonial"
                            aria-controls="testimonials"
                            aria-expanded="false"
                            aria-hidden="true"
                            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-alt-gold' : 'bg-white/30 hover:bg-white/50'}`}
                            aria-label={`Go to testimonial ${index + 1}`}
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
