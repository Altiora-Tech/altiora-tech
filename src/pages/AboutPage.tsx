import React from 'react';
import { Target, Eye, Linkedin, Heart, Zap, Handshake, BrainCircuit } from 'lucide-react';
import Cta from '../components/Cta';

const AboutPage: React.FC = () => {
    
    const teamMembers = [
        { name: 'Orli Dun', title: 'CEO & Fundador', image: 'https://i.ibb.co/bjnv1Qfc/orli.png', linkedinUrl: 'https://www.linkedin.com/in/orlibetdungonzalez/' },
        { name: 'Julia Rodríguez', title: 'CEO & Fundador', image: 'https://i.ibb.co/cRnJCKc/julia.png', linkedinUrl: 'https://www.linkedin.com/in/julia-daniela-rodriguez/' },
    ];

    const values = [
        { icon: <Heart className="w-8 h-8"/>, title: 'Empatía', description: 'Nos ponemos en tu lugar para entender tus desafíos y construir soluciones que realmente importan.' },
        { icon: <Zap className="w-8 h-8"/>, title: 'Excelencia', description: 'Buscamos la maestría técnica y la calidad excepcional en cada línea de código y cada pixel.' },
        { icon: <Handshake className="w-8 h-8"/>, title: 'Colaboración', description: 'Creemos en el poder de trabajar juntos. Tu éxito es nuestro éxito.' },
        { icon: <BrainCircuit className="w-8 h-8"/>, title: 'Innovación', description: 'Estamos en una búsqueda constante de las mejores herramientas y enfoques para resolver problemas complejos.' },
    ];

  return (
    <>
      <section className="bg-violet-50 dark:bg-gray-800 pt-28 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-alt-purple dark:text-violet-300 mb-4">La Fusión de Tecnología y Visión Humana</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-700 dark:text-gray-300">
            Somos un equipo de desarrolladores, diseñadores y estrategas apasionados por construir software que no solo funciona, sino que inspira.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-alt-purple dark:text-violet-300 mb-4">Nuestra Filosofía: Altiora</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    El nombre "Altiora" proviene del latín y significa "cosas más altas". Esta idea es el núcleo de nuestra filosofía. Más allá del código, somos desarrolladores con una profunda visión humana; practicamos la empatía para entender tus desafíos y crear soluciones que generen un impacto real. Nos dedicamos a elevar tus ideas a través de tecnología excepcional, aspirando siempre a alcanzar nuevos niveles de calidad e innovación junto a ti.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-violet-50 dark:bg-gray-800 p-8 rounded-xl border border-violet-100 dark:border-gray-700">
                <div className="flex items-center text-alt-purple dark:text-violet-300 mb-4">
                  <Target className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold font-serif">Misión</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Crear soluciones de software a medida que no solo resuelven problemas complejos, sino que también empoderan a las empresas para que sean más eficientes, innovadoras y competitivas.</p>
              </div>
              <div className="bg-violet-50 dark:bg-gray-800 p-8 rounded-xl border border-violet-100 dark:border-gray-700">
                <div className="flex items-center text-alt-purple dark:text-violet-300 mb-4">
                  <Eye className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold font-serif">Visión</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Ser el socio tecnológico de referencia para empresas visionarias, reconocidos por nuestra excelencia técnica, nuestro enfoque estratégico y nuestra capacidad para transformar ideas ambiciosas en realidades digitales.</p>
              </div>
            </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-alt-purple dark:text-violet-300">Conoce al Equipo</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Las mentes creativas y técnicas que hacen posible cada proyecto.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {teamMembers.map(member => (
                      <div key={member.name} className="text-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-alt-gold"
                            priority={true}
                            width={100}
                            height={100}
                            aria-label="Team Member"
                            name="Team Member"
                            objectFit="contain"  
                            />
                          <h4 className="text-xl font-bold text-alt-purple dark:text-violet-300">{member.name}</h4>
                          <p className="text-gray-500 dark:text-gray-400 mb-3">{member.title}</p>
                          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-alt-purple dark:text-violet-300 hover:text-alt-gold dark:hover:text-alt-gold transition-colors">
                              <Linkedin className="h-6 w-6 mx-auto"/>
                          </a>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-alt-purple dark:text-violet-300">Nuestros Valores</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Los principios que guían cada decisión que tomamos y cada proyecto que emprendemos.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {values.map(value => (
                    <div key={value.title} className="bg-violet-50 dark:bg-gray-800 p-8 rounded-lg text-center">
                        <div className="inline-block p-4 bg-alt-purple text-alt-gold rounded-xl mb-4">
                            {value.icon}
                        </div>
                        <h4 className="text-xl font-bold text-alt-purple dark:text-violet-300 mb-2">{value.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <Cta />
    </>
  );
};

export default AboutPage;