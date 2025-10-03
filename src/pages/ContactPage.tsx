import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  onFormSubmitSuccess: () => void;
}

const Contact: React.FC<ContactProps> = ({ onFormSubmitSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name) newErrors.name = 'El nombre es obligatorio.';
    if (!formData.email) {
      newErrors.email = 'El email es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato del email no es válido.';
    }
    if (!formData.message) newErrors.message = 'El mensaje es obligatorio.';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof typeof errors]) {
        setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onFormSubmitSuccess();
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 mt-8">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-alt-purple dark:text-violet-300">Hablemos de tu Proyecto</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            Completa el formulario o contáctanos directamente. Estamos listos para escuchar tu idea y convertirla en realidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-3 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-alt-purple dark:text-violet-300 mb-6">Envíanos un mensaje</h3>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
                            <input type="text" id="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white'} focus:outline-none focus:ring-2 focus:ring-alt-gold`} required />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white'} focus:outline-none focus:ring-2 focus:ring-alt-gold`} required />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje</label>
                        <textarea id="message" rows={5} value={formData.message} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white'} focus:outline-none focus:ring-2 focus:ring-alt-gold`} required></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <div className="mt-6 text-right">
                        <button 
                          type="submit"   
                          name="Enviar Mensaje"
                          id="Enviar Mensaje"
                          aria-label="Enviar Mensaje"
                          aria-controls="contact"
                          aria-expanded="false"
                          aria-hidden="true"
                          disabled={isSubmitting} 
                          className="bg-alt-purple text-white font-bold px-8 py-3 rounded-xl text-lg shadow-md hover:bg-alt-purple-light transition-colors duration-300 disabled:bg-gray-400">
                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </div>
                </form>
            </div>
            <div className="lg:col-span-2 flex flex-col">
                 <h3 className="text-2xl font-bold text-alt-purple dark:text-violet-300 mb-6">Información y Ubicación</h3>
                 <div className="space-y-4 text-lg mb-6">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <Mail className="h-6 w-6 mr-4 text-alt-purple dark:text-violet-300 flex-shrink-0" />
                        <a href="mailto:contacto@altiora.tech" className="hover:text-alt-gold break-all">contacto@altiora.tech</a>
                    </div>
                     <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <Phone className="h-6 w-6 mr-4 text-alt-purple dark:text-violet-300 flex-shrink-0" />
                        <span>+54 9 11 1234 5678</span>
                    </div>
                     <div className="flex items-start text-gray-700 dark:text-gray-300">
                        <MapPin className="h-6 w-6 mr-4 text-alt-purple dark:text-violet-300 flex-shrink-0 mt-1" />
                        <span>Oficinas en Argentina y Venezuela (Atención remota a todo el mundo)</span>
                    </div>
                 </div>
                 <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mt-auto border border-gray-200 dark:border-gray-700 shadow-md">
                   <iframe
                      className="filter dark:invert dark:grayscale"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016888186411!2d-58.3815704!3d-34.6037389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf0e1ba1c3%3A0x4a34b6c1e55b3874!2sObelisco!5e0!3m2!1ses!2sar!4v1620245642784!5m2!1ses!2sar"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      title="Ubicación de Altiora Tech en Buenos Aires"
                    ></iframe>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
