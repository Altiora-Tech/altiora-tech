import React from 'react';

const Newsletter: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el correo electrónico
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
              placeholder="Tu correo electrónico"
              className="w-full flex-grow px-5 py-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-alt-gold text-gray-800"
              required
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
              Suscribirme
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
