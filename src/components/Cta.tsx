import React from 'react';

const Cta: React.FC = () => {
  return (
    <section id="cta" className="bg-violet-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-alt-purple to-alt-purple-light p-12 rounded-xl shadow-2xl">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            ¿Listo para Transformar tu Idea en Realidad?
          </h2>
          <p className="text-violet-200 text-lg mb-8 max-w-2xl mx-auto">
            No esperes más para darle a tu negocio la ventaja tecnológica que necesita. Hablemos sobre tu proyecto y descubramos cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
          <a
            href="/contact"
            className="bg-alt-gold text-alt-purple-dark font-bold px-10 py-4 rounded-xl text-lg shadow-lg hover:bg-alt-gold-dark transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Agenda una Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
