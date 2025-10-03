import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, description, features, isFeatured }) => {
    const cardClasses = isFeatured
        ? "bg-alt-purple text-white border-alt-gold transform scale-105"
        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700";
    const buttonClasses = isFeatured
        ? "bg-alt-gold text-alt-purple-dark hover:bg-alt-gold-dark"
        : "bg-alt-purple text-white hover:bg-alt-purple-light";

    return (
        <div className={`p-8 rounded-xl border shadow-lg transition-all duration-300 ${cardClasses} relative`}>
            {isFeatured && (
                <div className="absolute top-0 right-0 -mt-3 mr-3 px-3 py-1 bg-alt-gold text-alt-purple-dark text-xs font-bold rounded-full uppercase tracking-wider">
                    Más Popular
                </div>
            )}
            <h3 className={`text-2xl font-bold font-serif mb-2 ${isFeatured ? '' : 'dark:text-white'}`}>{title}</h3>
            <p className={`mb-6 ${isFeatured ? 'text-violet-200' : 'text-gray-500 dark:text-gray-400'}`}>{description}</p>
            <div className="mb-6">
                <span className={`text-5xl font-extrabold ${isFeatured ? '' : 'dark:text-white'}`}>{price}</span>
                <span className={`text-lg ml-1 ${isFeatured ? 'text-violet-300' : 'text-gray-500 dark:text-gray-400'}`}>/proyecto</span>
            </div>
            <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <Check className={`h-6 w-6 mr-3 mt-1 flex-shrink-0 ${isFeatured ? 'text-alt-gold' : 'text-alt-purple dark:text-violet-300'}`} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <a href="/contact" className={`w-full block text-center font-bold px-8 py-4 rounded-xl text-lg shadow-md transition-colors duration-300 ${buttonClasses}`}>
                Empezar
            </a>
        </div>
    );
};

const Pricing: React.FC = () => {
    const plans = [
        {
            title: 'MVP Launch',
            price: '$5k+',
            description: 'Ideal para startups y validación de ideas. Rápido y funcional.',
            features: [
                'Diseño UX/UI y Prototipo',
                'Desarrollo de Funcionalidades Clave',
                'Despliegue en 1 Servidor',
                '30 Días de Soporte Post-Lanzamiento',
            ],
        },
        {
            title: 'Crecimiento',
            price: '$15k+',
            description: 'Para negocios en expansión que necesitan una solución robusta y escalable.',
            features: [
                'Todo lo de MVP Launch',
                'Integraciones con APIs de Terceros',
                'Panel de Administración Avanzado',
                'Infraestructura Escalable',
                'Soporte Prioritario',
            ],
            isFeatured: true,
        },
        {
            title: 'Enterprise',
            price: 'Custom',
            description: 'Soluciones a medida para grandes empresas con necesidades complejas.',
            features: [
                'Todo lo de Crecimiento',
                'Arquitectura de Microservicios',
                'Auditorías de Seguridad',
                'SLA Dedicado',
                'Consultoría Continua',
            ],
        },
    ];

    return (
        <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-alt-purple dark:text-violet-300">Planes Flexibles</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Inversiones claras y transparentes para cada etapa de tu negocio. Precios base, ajustados a tu alcance.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
