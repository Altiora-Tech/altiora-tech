import React from 'react';

const PilotCase: React.FC = () => {
  return (
    <section id="pilot-case" className="py-20 bg-gray-50 dark:bg-gray-900 mt-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-alt-purple dark:text-violet-300 mb-4">Caso de Éxito: Optimización para E-commerce</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Ayudamos a un cliente a aumentar su tasa de conversión en un 25% mediante la re-ingeniería de su checkout y la automatización de su gestión de inventario. El resultado fue una experiencia de compra más fluida y un aumento directo en las ventas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                    href="/contact"
                    className="w-full sm:w-auto bg-alt-purple text-white font-bold px-8 py-3 rounded-xl text-lg shadow-md hover:bg-alt-purple-light transition-all duration-300 transform hover:scale-105"
                >
                    Inicia tu proyecto
                </a>
                <a
                    href="/services"
                    className="w-full sm:w-auto bg-transparent border-2 border-alt-purple dark:border-violet-300 dark:text-violet-300 font-bold px-8 py-3 rounded-xl text-lg hover:bg-alt-purple hover:text-white dark:hover:bg-violet-300 dark:hover:text-alt-purple-dark transition-colors duration-300"
                >
                    Ver más servicios
                </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-alt-purple to-alt-gold p-8 rounded-xl shadow-2xl">
                <div className="bg-white/90 dark:bg-gray-800/90 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-alt-purple dark:text-violet-300 mb-4">Resultados Clave</h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center"><span className="text-alt-gold font-bold text-2xl mr-3">+25%</span> Tasa de Conversión</li>
                        <li className="flex items-center"><span className="text-alt-gold font-bold text-2xl mr-3">-40%</span> Tiempo de Carga</li>
                        <li className="flex items-center"><span className="text-alt-gold font-bold text-2xl mr-3">+15%</span> Valor de Pedido Promedio</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotCase;
