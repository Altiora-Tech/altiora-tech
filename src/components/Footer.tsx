import React, { ReactNode } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import AltioraLogo from "../assets/AltioraLogo.png";

interface FooterProps {
  openModal: (title: string, content: ReactNode) => void;
  legalContent: {
    terms: ReactNode;
    privacy: ReactNode;
    cookies: ReactNode;
  };
}

const Footer: React.FC<FooterProps> = ({ openModal, legalContent }) => {
  const currentYear = new Date().getFullYear();

  const handleLegalClick = (e: React.MouseEvent<HTMLAnchorElement>, title: string, content: ReactNode) => {
    e.preventDefault();
    openModal(title, content);
  };

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center space-x-2 text-white mb-4">
            <img 
                src={AltioraLogo} 
                alt="Altiora Logo"
                width={100}
                height={100} 
                priority={true}
                aria-label="Altiora Logo"
                name="Altiora Logo"
                objectFit="contain"  
                className="h-24 w-auto -mr-6" />
              <span className="text-2xl font-bold font-serif">Altiora Tech</span>
            </a>
            <p className="text-sm text-gray-400">Construimos el software que impulsa tu negocio.</p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:text-alt-gold transition-colors">Blog</a></li>
              <li><a href="/faq" className="hover:text-alt-gold transition-colors">FAQ</a></li>
              <li><a href="/services" className="hover:text-alt-gold transition-colors">Servicios</a></li>
              {/* <li><a href="/about" className="hover:text-alt-gold transition-colors">Proceso</a></li> */}
              <li><a href="/pilot-case" className="hover:text-alt-gold transition-colors">Casos de Éxito</a></li>

            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" onClick={(e) => handleLegalClick(e, "Política de Privacidad", legalContent.privacy)} className="hover:text-alt-gold transition-colors">Política de Privacidad</a></li>
              <li><a href="/terms" onClick={(e) => handleLegalClick(e, "Términos de Servicio", legalContent.terms)} className="hover:text-alt-gold transition-colors">Términos de Servicio</a></li>
              <li><a href="/cookies" onClick={(e) => handleLegalClick(e, "Política de Cookies", legalContent.cookies)} className="hover:text-alt-gold transition-colors">Política de Cookies</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contacto</h4>
            <div className="flex space-x-4">
                <a href="mailto:techaltiora@gmail.com" className="text-gray-400 hover:text-alt-gold transition-colors" aria-label="Email">
                    <Mail className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/altiora-tech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-alt-gold transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6" />
                </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Altiora Tech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
