import React, { useState, useEffect } from 'react';
import AltioraLogo from '../assets/AltioraLogo.png';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'Quienes Somos' },
    { href: '/services', label: 'Servicios' },
    { href: '/pricing', label: 'Planes' },
    { href: '/contact', label: 'Contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm dark:bg-gray-800/80' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        <a href="/" className="flex items-center text-alt-purple dark:text-white">
          <img 
              src={AltioraLogo} 
              alt="Altiora Logo" 
              width={100}
              height={100}
              id="altiora-logo"
              aria-label="Altiora Logo"
              name="Altiora Logo" 
              className="object-contain h-24 w-auto -mr-4" />
          <span className="text-3xl font-bold font-serif">Altiora Tech</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-alt-purple dark:text-gray-200 font-medium hover:text-alt-gold dark:hover:text-alt-gold transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
            <a href="/ai-assistant" className="bg-alt-purple text-white font-bold px-6 py-2 rounded-xl hover:bg-alt-purple-light transition-colors">
                Diagnóstico IA
            </a>
            <button
                onClick={toggleTheme}
                name="Toggle Theme"
                id="Toggle Theme"
                type="button"
                className="p-2 rounded-full text-alt-purple dark:text-alt-gold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
            >
                {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
            </button>
        </div>
        <button
          name="Toggle Menu"
          id="Toggle Menu"
          type="button"
          className="md:hidden text-alt-purple dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'}`}>
        <nav className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-alt-purple dark:text-gray-200 font-medium text-lg hover:text-alt-gold transition-colors">
              {link.label}
            </a>
          ))}
           <a href="/ai-assistant" onClick={() => setIsOpen(false)} className="bg-alt-purple text-white font-bold px-8 py-3 rounded-xl hover:bg-alt-purple-light transition-colors w-11/12 text-center mt-4">
            Diagnóstico IA
          </a>
          <button
            name="Toggle Theme"
            id="Toggle Theme"
            type="button"
            onClick={toggleTheme}
            className="mt-4 p-3 rounded-full text-alt-purple dark:text-alt-gold bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
