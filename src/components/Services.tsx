import React from 'react';
import { Code2, Bot, Users, Sparkles } from 'lucide-react';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-violet-50 dark:bg-gray-800 p-8 rounded-xl border border-violet-100 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-alt-gold dark:hover:border-alt-gold transition-all duration-300 flex flex-col text-center items-center">
            <div className="bg-alt-purple text-alt-gold p-4 rounded-xl mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-alt-purple dark:text-violet-300 mb-3">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 flex-grow mb-6">{description}</p>
            <a href="/contact" className="mt-auto bg-transparent border-2 border-alt-purple dark:border-violet-300 text-alt-purple dark:text-violet-300 font-semibold px-6 py-2 rounded-xl hover:bg-alt-purple hover:text-white dark:hover:bg-violet-300 dark:hover:text-alt-purple-dark transition-colors duration-300">
                Más información
            </a>
        </div>
    );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Desarrollo de Software a Medida',
      description: 'Creamos aplicaciones web y móviles únicas, diseñadas para resolver tus desafíos específicos.',
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'Automatización de Procesos',
      description: 'Optimizamos tus flujos de trabajo, ahorrando tiempo y reduciendo errores con soluciones inteligentes.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Capacitación y Workshops',
      description: 'Empoderamos a tu equipo con talleres prácticos sobre las últimas tecnologías y metodologías.',
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Consultoría Estratégica',
      description: 'Te guiamos en la adopción de nuevas tecnologías para asegurar que tu inversión genere un impacto real.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-alt-purple dark:text-violet-300">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Soluciones tecnológicas diseñadas para impulsar tu crecimiento y eficiencia.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;