import React from 'react';
import { Search, PenTool, Code, Rocket, LifeBuoy, ArrowRight } from 'lucide-react';

const ProcessCard: React.FC<{ icon: React.ReactNode; title: string; description: string; className?: string; }> = ({ icon, title, description, className = '' }) => {
    return (
        <div className={`bg-violet-50 dark:bg-gray-800 p-8 rounded-xl border border-violet-100 dark:border-gray-700 hover:shadow-xl hover:border-alt-gold dark:hover:border-alt-gold transition-all duration-300 flex flex-col transform hover:-translate-y-1 ${className}`}>
            <div className="flex items-center mb-4">
                <div className="bg-alt-purple text-alt-gold p-3 rounded-lg mr-4 flex-shrink-0">
                    {icon}
                </div>
                <h3 className="font-bold text-alt-purple dark:text-violet-300 text-xl">{title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );
};

const AboutSummary: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Descubrimiento',
      description: 'Analizamos tus objetivos y definimos juntos el alcance del proyecto para garantizar el éxito desde el inicio.',
      className: 'lg:col-span-2'
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Diseño UX/UI',
      description: 'Creamos interfaces intuitivas y atractivas, enfocadas en la experiencia del usuario final.',
       className: 'lg:col-span-2'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Desarrollo Ágil',
      description: 'Construimos tu solución con tecnología de punta, en ciclos cortos que permiten feedback constante.',
       className: 'lg:col-span-2'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Despliegue',
      description: 'Lanzamos la aplicación en un entorno de producción, asegurando su estabilidad y rendimiento.',
       className: 'lg:col-span-3'
    },
    {
      icon: <LifeBuoy className="w-6 h-6" />,
      title: 'Soporte y Evolución',
      description: 'Te acompañamos después del lanzamiento con soporte continuo y planes de mejora.',
       className: 'lg:col-span-3'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-alt-purple dark:text-violet-300 mb-4">Nuestro Proceso</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Diseñado para ser colaborativo y centrado en resultados. Te llevamos de la idea al lanzamiento en 5 pasos claros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {steps.map((step, index) => (
                <ProcessCard key={index} {...step} />
            ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/about"
            className="inline-flex items-center text-lg font-semibold text-alt-purple dark:text-violet-300 hover:text-alt-gold dark:hover:text-alt-gold transition-colors"
          >
            Conoce más sobre Nosotros
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;