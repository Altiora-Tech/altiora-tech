import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button
        type="button"
        name="Pregunta"
        id="Pregunta"
        aria-label="Pregunta"
        aria-controls="faq"
        aria-hidden="true"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-alt-purple dark:text-violet-300 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown
          className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 dark:text-gray-400">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: '¿En qué tecnologías se especializan?',
      answer:
        'Nos especializamos en un stack moderno que incluye React, Next.js, Nest.js y Node.js para aplicaciones web, Java, Spring Boot para Backend y Python para automatización. Somos flexibles y elegimos siempre la mejor tecnología para las necesidades del proyecto.',
    },
    {
      question: '¿Cuánto tiempo tarda un proyecto promedio?',
      answer:
        'La duración varía según el alcance. Un MVP (Producto Mínimo Viable) puede tomar de 1 a 3 meses. Proyectos más complejos pueden extenderse de 3 a 6 meses o más. Siempre establecemos un cronograma claro desde el inicio.',
    },
    {
      question: '¿Cómo funciona el diagnóstico con IA?',
      answer:
        'Nuestra herramienta de IA ofrece una estimación inicial y una perspectiva de alto nivel basada en los datos que proporcionas. Es el punto de partida perfecto para nuestra conversación, que nos permite profundizar en una auditoría técnica completa y personalizada.',
    },
    {
      question: '¿Ofrecen soporte y mantenimiento post-lanzamiento?',
      answer:
        'Sí. Creemos en las relaciones a largo plazo. Ofrecemos planes de soporte y mantenimiento para asegurar que tu aplicación funcione de manera óptima, se mantenga segura y evolucione junto con tu negocio.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900 mt-8">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-alt-purple dark:text-violet-300">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            Resolvemos algunas de las dudas más comunes sobre nuestro proceso y servicios.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;