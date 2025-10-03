import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

// Re-usable FAQItem component
const FAQItem: React.FC<{ question: string; answer: string; }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button
        type="button"
        name="Pregunta"
        id="Pregunta"
        aria-label="Pregunta"
        aria-controls="faq"
        aria-expanded="false"
        aria-hidden="true"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-alt-purple dark:text-violet-300 focus:outline-none"
      >
        <span>{question}</span>
        <ChevronDown className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <p className="text-gray-600 dark:text-gray-400">{answer}</p>
      </div>
    </div>
  );
};
const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>
);


// Re-usable PricingCard component
const PricingCard: React.FC<{ title: string; price: string; description: string; features: string[]; isFeatured?: boolean; }> = ({ title, price, description, features, isFeatured }) => {
    const cardClasses = isFeatured ? "bg-alt-purple text-white border-alt-gold transform lg:scale-105" : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700";
    const buttonClasses = isFeatured ? "bg-alt-gold text-alt-purple-dark hover:bg-alt-gold-dark" : "bg-alt-purple text-white hover:bg-alt-purple-light";
    return (
        <div className={`p-8 rounded-xl border shadow-lg transition-all duration-300 ${cardClasses} relative flex flex-col`}>
            {isFeatured && <div className="absolute top-0 right-0 -mt-3 mr-3 px-3 py-1 bg-alt-gold text-alt-purple-dark text-xs font-bold rounded-full uppercase tracking-wider">Más Popular</div>}
            <h3 className={`text-2xl font-bold font-serif mb-2 ${isFeatured ? '' : 'dark:text-white'}`}>{title}</h3>
            <p className={`mb-6 flex-grow ${isFeatured ? 'text-violet-200' : 'text-gray-500 dark:text-gray-400'}`}>{description}</p>
            <div className="mb-6">
                <span className={`text-5xl font-extrabold ${isFeatured ? '' : 'dark:text-white'}`}>{price}</span>
                <span className={`text-lg ml-1 ${isFeatured ? 'text-violet-300' : 'text-gray-500 dark:text-gray-400'}`}>/proyecto</span>
            </div>
            <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start"><Check className={`h-6 w-6 mr-3 mt-1 flex-shrink-0 ${isFeatured ? 'text-alt-gold' : 'text-alt-purple dark:text-violet-300'}`} /><span>{feature}</span></li>
                ))}
            </ul>
            <a href="/contact" className={`w-full block mt-auto text-center font-bold px-8 py-4 rounded-xl text-lg shadow-md transition-colors duration-300 ${buttonClasses}`}>Empezar</a>
        </div>
    );
};


const PricingPage: React.FC = () => {
    const plans = [
        {
            title: 'MVP Launch',
            price: '$5k+',
            description: 'La forma más rápida de validar tu idea de negocio con un producto funcional y de alta calidad.',
            features: [
                'Hasta 5 pantallas clave',
                'Diseño UX/UI y Prototipo',
                'Desarrollo de Funcionalidades Clave',
                'Despliegue en 1 Servidor',
                'CMS Básico',
                '30 Días de Soporte Post-Lanzamiento',
            ],
        },
        {
            title: 'Crecimiento',
            price: '$15k+',
            description: 'Para negocios en expansión que necesitan una solución robusta, escalable y con integraciones.',
            features: [
                'Hasta 15 pantallas',
                'Todo lo de MVP Launch',
                'Integraciones con APIs de Terceros',
                'Panel de Administración Avanzado',
                'Infraestructura Escalable (Cloud)',
                'Pruebas de Rendimiento',
                'Soporte Prioritario',
            ],
            isFeatured: true,
        },
        {
            title: 'Enterprise',
            price: 'Custom',
            description: 'Soluciones integrales y a medida para grandes empresas con necesidades complejas y de misión crítica.',
            features: [
                'Pantallas Ilimitadas',
                'Todo lo de Crecimiento',
                'Arquitectura de Microservicios',
                'Auditorías de Seguridad y Penetration Testing',
                'SLA Dedicado y Soporte 24/7',
                'Equipo de Desarrollo Dedicado',
                'Consultoría Estratégica Continua',
            ],
        },
    ];

    const comparisonFeatures = [
        { feature: 'Número de Pantallas', mvp: 'Hasta 5', crecimiento: 'Hasta 15', enterprise: 'Ilimitado' },
        { feature: 'Diseño UX/UI y Prototipo', mvp: true, crecimiento: true, enterprise: true },
        { feature: 'Integraciones con APIs', mvp: 'Básicas', crecimiento: 'Avanzadas', enterprise: 'Complejas' },
        { feature: 'Panel de Administración', mvp: 'Básico', crecimiento: 'Avanzado', enterprise: 'Personalizado' },
        { feature: 'Infraestructura', mvp: '1 Servidor', crecimiento: 'Cloud Escalable', enterprise: 'Alta Disponibilidad' },
        { feature: 'Auditoría de Seguridad', mvp: false, crecimiento: 'Estándar', enterprise: 'Avanzada' },
        { feature: 'Soporte Post-Lanzamiento', mvp: '30 Días', crecimiento: 'Prioritario', enterprise: 'SLA Dedicado 24/7' },
        { feature: 'Equipo Dedicado', mvp: false, crecimiento: false, enterprise: true },
    ];
    
    const pricingFaqs = [
      { question: '¿Cómo funcionan los pagos?', answer: 'Generalmente trabajamos con un modelo de 50% de pago inicial para comenzar el proyecto y 50% a la entrega final. Para proyectos más grandes, podemos acordar pagos por hitos. Somos flexibles y nos adaptamos a tus necesidades.' },
      { question: '¿Qué sucede si el alcance de mi proyecto cambia?', answer: 'Entendemos que los proyectos evolucionan. Trabajamos con metodologías ágiles, lo que nos permite ser flexibles. Cualquier cambio en el alcance se discute de forma transparente, se evalúa su impacto y se ajusta el plan de trabajo y el presupuesto previo acuerdo.' },
      { question: '¿Hay costos ocultos o adicionales?', answer: 'No. Nuestra filosofía es la transparencia total. Todos los costos del desarrollo estarán detallados en nuestra propuesta. Costos externos como dominios, hosting o licencias de servicios de terceros no están incluidos, pero te asesoraremos para que elijas las mejores opciones.' },
      { question: '¿Qué incluye el plan "Enterprise"?', answer: 'El plan Enterprise es totalmente a medida. Se adapta a tus necesidades específicas, desde el tamaño del equipo dedicado y las tecnologías a utilizar, hasta los acuerdos de nivel de servicio (SLA) y las auditorías de seguridad más exigentes. Es la solución definitiva para proyectos de misión crítica.' },
    ];

    return (
        <>
            <section className="bg-violet-50 dark:bg-gray-800 pt-28 pb-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-alt-purple dark:text-violet-300 mb-4">Planes para cada Etapa</h1>
                    <p className="max-w-3xl mx-auto text-xl text-gray-700 dark:text-gray-300">
                        Inversión transparente y sin sorpresas. Ofrecemos planes claros que se adaptan al tamaño y la ambición de tu proyecto.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                        {plans.map((plan, index) => <PricingCard key={index} {...plan} />)}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-alt-purple dark:text-violet-300">Comparación de Planes</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Encuentra la solución perfecta para ti con esta comparación detallada.</p>
                    </div>
                    <div className="max-w-5xl mx-auto overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="py-4 px-6 bg-gray-100 dark:bg-gray-700 font-bold uppercase text-sm text-gray-600 dark:text-gray-300 border-b dark:border-gray-600">Funcionalidad</th>
                                    <th className="py-4 px-6 bg-gray-100 dark:bg-gray-700 font-bold uppercase text-sm text-gray-600 dark:text-gray-300 border-b dark:border-gray-600 text-center">MVP Launch</th>
                                    <th className="py-4 px-6 bg-alt-purple/10 dark:bg-alt-purple/20 font-bold uppercase text-sm text-alt-purple dark:text-violet-300 border-b dark:border-gray-600 border-x-2 border-alt-purple/20 text-center">Crecimiento</th>
                                    <th className="py-4 px-6 bg-gray-100 dark:bg-gray-700 font-bold uppercase text-sm text-gray-600 dark:text-gray-300 border-b dark:border-gray-600 text-center">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonFeatures.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="py-4 px-6 border-b dark:border-gray-700 font-medium text-gray-700 dark:text-gray-300">{item.feature}</td>
                                        <td className="py-4 px-6 border-b dark:border-gray-700 text-center">{typeof item.mvp === 'boolean' ? (item.mvp ? <Check className="mx-auto text-green-500" /> : <X className="mx-auto text-red-400" />) : item.mvp}</td>
                                        <td className="py-4 px-6 border-b dark:border-gray-700 border-x-2 border-alt-purple/10 dark:border-alt-purple/20 text-center font-semibold text-alt-purple dark:text-white">{typeof item.crecimiento === 'boolean' ? (item.crecimiento ? <Check className="mx-auto text-green-500" /> : <X className="mx-auto text-red-400" />) : item.crecimiento}</td>
                                        <td className="py-4 px-6 border-b dark:border-gray-700 text-center">{typeof item.enterprise === 'boolean' ? (item.enterprise ? <Check className="mx-auto text-green-500" /> : <X className="mx-auto text-red-400" />) : item.enterprise}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            
            <section id="faq-pricing" className="py-20 bg-white dark:bg-gray-900">
              <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-alt-purple dark:text-violet-300">Preguntas sobre Precios</h2>
                   <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Aclaramos tus dudas para que tomes la mejor decisión.</p>
                </div>
                <div className="max-w-3xl mx-auto">
                  {pricingFaqs.map((item, index) => <FAQItem key={index} {...item} />)}
                </div>
              </div>
            </section>
        </>
    );
};

export default PricingPage;