import React from 'react';
import { Code2, Bot, Users, Sparkles, CheckCircle, Search, PenTool, Code, Rocket, LifeBuoy } from 'lucide-react';
import Cta from '../components/Cta';

interface ServiceDetailProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  deliverables: string[];
  imageComponent: React.ReactNode;
  reverse?: boolean;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ icon, title, description, deliverables, imageComponent, reverse }) => {
  const direction = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row';
  return (
    <div className={`flex flex-col ${direction} items-center gap-12 mb-20 mt-8`}>
      <div className="lg:w-1/2">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-alt-purple text-alt-gold rounded-lg mr-4">{icon}</div>
          <h3 className="text-3xl font-serif font-bold text-alt-purple dark:text-violet-300">{title}</h3>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{description}</p>
        <ul className="space-y-3">
          {deliverables.map((item, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 text-alt-gold" />
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center p-8 bg-violet-50 dark:bg-gray-800 rounded-xl">
        {imageComponent}
      </div>
    </div>
  );
};


const ProcessStep: React.FC<{ icon: React.ReactNode; title: string; description: string; isLast?: boolean; }> = ({ icon, title, description, isLast }) => {
  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center mr-6">
        <div className="bg-alt-gold text-alt-purple rounded-xl p-3 mb-2 border-4 border-white dark:border-gray-800 shadow-md">
          {icon}
        </div>
        {!isLast && <div className="w-px h-full bg-alt-purple/30 dark:bg-alt-purple/50"></div>}
      </div>
      <div className="pt-1 pb-8">
        <h3 className="font-bold text-alt-purple dark:text-violet-300 text-xl mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};


const ServicesPage: React.FC = () => {
  const services = [
    {
      // icon: <Bot className="w-8 h-8" />,
      imagen: "./work1.png",
      title: 'Desarrollo a Medida',
      description: 'Convertimos tus ideas en aplicaciones web y móviles de alto rendimiento. Nos enfocamos en crear productos digitales robustos, escalables y con una experiencia de usuario impecable que se alineen perfectamente con tus objetivos de negocio.',
      deliverables: ['Aplicaciones Web Progresivas (PWA)', 'Plataformas SaaS y Dashboards', 'APIs robustas y seguras', 'Integración con sistemas existentes'],
      imageComponent: <div className="text-alt-purple dark:text-alt-gold flex items-center container justify-center">
      <img 
        src="./work1.png" 
        alt="Desarrollo a Medida" 
        className="rounded-lg" 
        style={{ objectFit: 'contain', width: '100%', height: '100%', maxWidth: '800px', maxHeight: '800px' }} 
        width={100}
        height={100}
        id="post-image"
        aria-label="Post Image"
        name="Post Image" 
      /></div>,
      reverse: true,
    },
    {
      // icon: <Code2 className="w-8 h-8" />,
      imagen: "./work2.png",
      title: 'Automatización de Procesos',
      description: 'Identificamos cuellos de botella y tareas repetitivas en tus operaciones para implementar soluciones de automatización que aumentan la eficiencia, reducen costos y minimizan el error humano, liberando a tu equipo para que se enfoque en tareas de mayor valor.',
      deliverables: ['Automatización Robótica de Procesos (RPA)', 'Optimización de flujos de trabajo (Workflows)', 'Integración de aplicaciones y datos', 'Sistemas de procesamiento de datos'],
      imageComponent: <div className="text-alt-purple dark:text-alt-gold flex items-center container justify-center">
      <img 
        src="./work2.png" 
        alt="Automatización de Procesos" 
        className="rounded-lg" 
        style={{ objectFit: 'contain', width: '100%', height: '100%', maxWidth: '800px', maxHeight: '800px' }} 
        width={100}
        height={100}
        id="post-image"
        aria-label="Post Image"
        name="Post Image" 
      /></div>,
    },
    /* {
        icon: <Users className="w-8 h-8" />,
        title: 'Capacitación y Workshops',
        description: 'Potenciamos las habilidades de tu equipo a través de talleres prácticos y personalizados. Nuestro objetivo es transferir conocimiento y fomentar una cultura de innovación y mejora continua dentro de tu organización.',
        deliverables: ['Workshops de Metodologías Ágiles (Scrum/Kanban)', 'Capacitación en tecnologías específicas (React, Python)', 'Programas de adopción de DevOps', 'Mentoría técnica para equipos de desarrollo'],
        imageComponent: <div className="text-alt-purple dark:text-alt-gold flex items-center container justify-center"><img 
        src="./work2.png" 
          alt="Capacitación y Workshops" 
          className="rounded-lg" 
          style={{ objectFit: 'contain', width: '100%', height: '100%', maxWidth: '800px', maxHeight: '800px' }} 
          width={100}
          height={100}
          id="post-image"
          aria-label="Post Image"
          name="Post Image" 
        /></div>,
    }, */
    {
        // icon: <Sparkles className="w-8 h-8" />,
        imagen: "./work3.png",
        title: 'Consultoría Estratégica',
        description: 'Te acompañamos en tu viaje de transformación digital. Analizamos tu ecosistema tecnológico actual y definimos una hoja de ruta clara para ayudarte a tomar decisiones informadas, optimizar tu inversión y alcanzar tus metas estratégicas.',
        deliverables: ['Auditoría de stack tecnológico', 'Hoja de ruta (Roadmap) de producto', 'Estrategia de transformación digital', 'Asesoramiento en arquitectura de software'],
        imageComponent: <div className="text-alt-purple dark:text-alt-gold flex items-center container justify-center">
          <img  
            src="./work3.png" 
            alt="Consultoría Estratégica" 
            className="rounded-lg" 
            style={{ objectFit: 'contain', width: '100%', height: '100%', maxWidth: '800px', maxHeight: '800px' }} 
            width={100}
            height={100}
            id="post-image"
            aria-label="Post Image"
            name="Post Image"
            /></div>,
        reverse: true,
    }
  ];
  
   const processSteps = [
    { icon: <Search/>, title: '1. Descubrimiento y Estrategia' },
    { icon: <PenTool/>, title: '2. Diseño y Prototipado UX/UI' },
    { icon: <Code/>, title: '3. Desarrollo Ágil' },
    { icon: <Rocket/>, title: '4. Despliegue y Pruebas' },
    { icon: <LifeBuoy/>, title: '5. Soporte y Evolución' }
  ];

  return (
    <>
      <section className="bg-violet-50 dark:bg-gray-800 pt-28 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-alt-purple dark:text-violet-300 mb-4">Nuestras Soluciones</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-700 dark:text-gray-300">
            Transformamos ideas en realidades digitales. Descubre cómo nuestras soluciones a medida pueden impulsar tu negocio.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          {services.map((service, index) => (
            <ServiceDetail key={index} {...service} />
          ))}
        </div>
      </section>

       <section className="py-10 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
              <div className="text-center max-w-4xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-alt-purple dark:text-violet-300 mb-4">Nuestro Proceso Colaborativo</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Desde la estrategia inicial hasta el soporte continuo, te acompañamos en cada paso para asegurar el éxito de tu proyecto.
                  </p>
              </div>
              <div className="max-w-2xl mx-auto">
                  {processSteps.map((step, index) => (
                      <ProcessStep key={index} icon={React.cloneElement(step.icon, { className: 'w-6 h-6' })} title={step.title} description="Nuestro equipo colabora contigo para definir objetivos claros y una hoja de ruta estratégica." isLast={index === processSteps.length - 1} />
                  ))}
              </div>
          </div>
      </section>
      
      <Cta />
    </>
  );
};

export default ServicesPage;