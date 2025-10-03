
import React from 'react';

// Make TypeScript aware of the Calendly object on the window
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const Hero: React.FC = () => {

  const handleScheduleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        // TODO: Reemplaza esto con tu enlace de evento de Calendly
        url: 'https://calendly.com/your-altiora-link/sesion-gratuita',
      });
    } else {
      console.error('El script de Calendly no se ha cargado.');
      // Opcional: Redirigir directamente a la página de Calendly como fallback
      // window.location.href = 'https://calendly.com/your-altiora-link/sesion-gratuita';
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/hero.png"
        alt="Hero"
        aria-label="Hero"
        loading="lazy"
        width={1920}
        height={1080}
        objectFit="cover"
        optimize={true}
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      />
  
      {/* Overlays */}
      <div className="absolute inset-0 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-violet-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-alt-purple-dark opacity-80 dark:opacity-40"></div>
  
      {/* Content */}
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-alt-purple dark:text-violet-200 mb-12">
          Construimos el software que impulsa tu negocio
        </h1>
        {/* <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          De la idea al lanzamiento. Soluciones a medida, automatización y consultoría tecnológica para llevar tu empresa al siguiente nivel.
        </p> */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/ai-assistant"
            className="w-full sm:w-auto bg-alt-gold text-alt-purple-dark font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:bg-alt-gold-dark transition-all duration-300 transform hover:scale-105"
          >
            Solicita tu diagnóstico gratuito
          </a>
          <a
            href="/pilot-case"
            className="w-full sm:w-auto bg-transparent border-2 border-alt-purple text-alt-purple dark:border-violet-300 dark:text-violet-300 font-bold px-8 py-4 rounded-xl text-lg hover:bg-alt-purple hover:text-white dark:hover:bg-violet-300 dark:hover:text-alt-purple-dark transition-colors duration-300 transform hover:scale-105"
          >
            Ver casos de éxito
          </a>
        </div>
      </div>
  
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent dark:from-gray-900"></div>
    </section>

    );
};

export default Hero;