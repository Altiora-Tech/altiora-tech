import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, LoaderCircle } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [projectType, setProjectType] = useState('web_corporativa');
  const [scope, setScope] = useState('pequeno');
  const [timeline, setTimeline] = useState('1-3_meses');
  const [loading, setLoading] = useState(false);
  const [diagnosis, setDiagnosis] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setDiagnosis('');
    setError('');

    try {
      if (!process.env.API_KEY) {
        throw new Error("API key is not configured.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = `**Rol y Objetivo:** Eres un Consultor Senior de Estrategia Tecnológica en Altiora Tech. Tu objetivo es impresionar a un cliente potencial con un análisis rápido pero perspicaz de su proyecto, demostrando nuestra experiencia y animándolos a dar el siguiente paso.

      **Contexto del Cliente:** Un cliente ha proporcionado los siguientes detalles iniciales para un proyecto de software:
      - **Tipo de Proyecto:** ${projectType.replace(/_/g, ' ')}
      - **Alcance Deseado:** ${scope}
      - **Plazo Estimado:** ${timeline.replace(/_/g, ' ')}

      **Tu Tarea:**
      Genera un diagnóstico profesional y conciso en español (aproximadamente 80-100 palabras). La respuesta debe ser un párrafo único y fluido, sin usar títulos ni listas. Sigue esta estructura lógica interna:

      1.  **Análisis Estratégico:** Basado en la combinación de tipo, alcance y plazo, identifica el **desafío principal** o el **factor crítico de éxito** más relevante. Por ejemplo, para un MVP, es la priorización; para un proyecto grande, la escalabilidad; para un e-commerce, la experiencia de usuario en el checkout.
      2.  **Enfoque Propuesto por Altiora:** Describe brevemente cómo nuestro enfoque metodológico (ej. desarrollo ágil, diseño centrado en el usuario, arquitectura robusta) aborda directamente ese desafío clave. Demuestra que entendemos el problema a un nivel profundo.
      3.  **Llamado a la Acción Concluyente:** Finaliza **siempre** con una invitación clara y convincente. El objetivo es que el cliente sienta la necesidad de profundizar en los detalles con nosotros. La frase final debe ser una variación de: "Este es un excelente punto de partida. Para trazar una hoja de ruta detallada y alinearla con tus objetivos de negocio, te invito a agendar una consulta estratégica gratuita con nuestro equipo."

      **Tono:** Profesional, estratégico, seguro y centrado en el valor. Evita el lenguaje demasiado técnico.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      
      setDiagnosis(response.text);

    } catch (err) {
      console.error(err);
      setError('Hubo un error al generar el diagnóstico. Por favor, inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-20 bg-violet-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-alt-purple dark:text-violet-300 mb-4 mt-12">
            Obtén un Diagnóstico IA Instantáneo
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            Completa estos campos para recibir una mini-consultoría gratuita generada por nuestra IA. Descubre el potencial de tu proyecto en segundos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Tipo de aplicación</label>
              <select id="projectType" value={projectType} onChange={e => setProjectType(e.target.value)} className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-alt-gold">
                <option value="web_corporativa">Web Corporativa</option>
                <option value="e-commerce">E-commerce</option>
                <option value="saas">SaaS / Plataforma</option>
                <option value="app_movil">App Móvil</option>
              </select>
            </div>
             <div>
              <label htmlFor="scope" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Alcance deseado</label>
              <select id="scope" value={scope} onChange={e => setScope(e.target.value)} className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-alt-gold">
                <option value="pequeno">Pequeño (MVP)</option>
                <option value="mediano">Mediano (Con funciones core)</option>
                <option value="grande">Grande (Escalable)</option>
              </select>
            </div>
             <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Plazo esperado</label>
              <select id="timeline" value={timeline} onChange={e => setTimeline(e.target.value)} className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-alt-gold">
                <option value="1-3_meses">1-3 meses</option>
                <option value="3-6_meses">3-6 meses</option>
                <option value="6+_meses">6+ meses</option>
              </select>
            </div>
          </form>
          <div className="text-center">
            <button
              type="submit"
              name="Generar Diagnóstico"
              id="Generar Diagnóstico"
              aria-label="Generar Diagnóstico"
              aria-controls="diagnosis"
              aria-expanded="false"
              aria-hidden="true"
              onClick={handleSubmit}
              disabled={loading}
              className="bg-alt-purple text-white font-bold px-10 py-4 rounded-xl text-lg shadow-lg hover:bg-alt-purple-light transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:scale-100 flex items-center justify-center mx-auto"
            >
              {loading ? (
                <>
                  <LoaderCircle className="animate-spin mr-3 h-6 w-6" />
                  Generando...
                </>
              ) : (
                 <>
                  <Sparkles className="mr-3 h-6 w-6" />
                  Generar Diagnóstico
                </>
              )}
            </button>
          </div>

          {(diagnosis || error) && (
            <div className=" p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-alt-gold rounded-r-lg">
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-alt-purple dark:text-violet-300 mb-4">Tu Diagnóstico Personalizado</h3>
                {error && <p className="text-red-600">{error}</p>}
                {diagnosis && <p className="text-gray-700 dark:text-gray-300 text-lg whitespace-pre-wrap">{diagnosis}</p>}
                {diagnosis && (
                    <a href="#contact" className="inline-block mt-6 bg-alt-gold text-alt-purple-dark font-bold px-6 py-2 rounded-xl hover:bg-alt-gold-dark transition-colors duration-300">
                        Agenda tu auditoría gratuita
                    </a>
                )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;