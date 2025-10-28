import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.VITE_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.VITE_APP_EMAILJS_PUBLIC_KEY;

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        
        setIsSubmitting(true);
        setError('');
        
        try {
            // Replace these with your actual EmailJS template parameters
            const templateParams = {
                to_email: 'techaltiora@gmail.com',
                from_email: email,
                message: 'Nueva suscripción al newsletter',
                reply_to: email
            };
            
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            setIsSuccess(true);
            setEmail('');
        } catch (err) {
            console.error('Error al enviar el correo:', err);
            setError('Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };
  return (
    <section id="newsletter" className="py-20 bg-alt-purple">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Mantente a la Vanguardia</h2>
          <p className="text-violet-200 text-lg mb-8">
            Suscríbete a nuestro newsletter para recibir insights sobre tecnología, innovación y estrategias de crecimiento directamente en tu correo.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
            <input
              type="email"
              id="newsletter-email"
              name="newsletter-email"
              aria-label="Correo electrónico para suscripción al newsletter"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-alt-gold"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              name="Suscribirme"
              id="Suscribirme"
              aria-label="Suscribirme"
              aria-controls="newsletter"
              aria-expanded="false"
              aria-hidden="true"
              href="/contact"
              className="w-full sm:w-auto bg-alt-gold text-alt-purple-dark font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-alt-gold-dark transition-colors duration-300 transform hover:scale-105"
            >
              {isSubmitting ? 'Enviando...' : 'Suscribirme'}
            </button>
            {isSuccess && (
              <div className="mt-4 text-green-300">
                ¡Gracias por suscribirte! Te hemos enviado un correo de confirmación.
              </div>
            )}
            {error && (
              <div className="mt-4 text-red-300">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
