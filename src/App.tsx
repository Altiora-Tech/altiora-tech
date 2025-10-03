import React, { useState, ReactNode, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';

// Page Components
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AIFeaturePage from './pages/AIAssistantPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import FAQPage from './pages/FAQPage';
import PilotCase from './pages/PilotCase';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Modal from './components/Modal';
import AboutSummary from './components/About';

// Legal Content
import Terms from './components/legal/Terms';
import Privacy from './components/legal/Privacy';
import Cookies from './components/legal/Cookies';

type Theme = 'light' | 'dark';

type AppContentProps = {
  theme: string;
  toggleTheme: () => void;
  openModal: (title: string, content: ReactNode) => void;
  closeModal: () => void;
  modalState: {
    isOpen: boolean;
    title: string;
    content: ReactNode | null;
  };
  legalContent: {
    terms: ReactNode;
    privacy: ReactNode;
    cookies: ReactNode;
  };
};

const AppContent: React.FC<AppContentProps> = ({
  theme,
  toggleTheme,
  openModal,
  closeModal,
  modalState,
  legalContent
}) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans min-h-screen flex flex-col">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Stats />
              <AboutSummary />
              <Services />
              <Testimonials />
              <Newsletter />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ai-assistant" element={<AIFeaturePage />} />
          <Route path="/pilot-case" element={<PilotCase />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:articleId" element={<ArticlePage />} />
          <Route path="/contact" element={
            <ContactPage onFormSubmitSuccess={() => {
              openModal(
                '¡Mensaje Enviado!',
                <p>Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad.</p>
              );
            }} />
          } />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/terms" element={
            <div className="container mx-auto p-6 max-w-4xl">
              <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
              <Terms />
            </div>
          } />
          <Route path="/privacy" element={
            <div className="container mx-auto p-6 max-w-4xl">
              <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
              <Privacy />
            </div>
          } />
          <Route path="/cookies" element={
            <div className="container mx-auto p-6 max-w-4xl">
              <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>
              <Cookies />
            </div>
          } />
          <Route path="*" element={
            <div className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold mb-4 mt-16">404 - Página no encontrada</h1>
              <p className="text-xl mb-6">Lo sentimos, la página que buscas no existe.</p>
              <Link 
                to="/" 
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Volver al inicio
              </Link>
            </div>
          } />
        </Routes>
      </main>
      <Footer openModal={openModal} legalContent={legalContent} />
      <Modal isOpen={modalState.isOpen} onClose={closeModal} title={modalState.title}>
        {modalState.content}
      </Modal>
    </div>
  );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  
  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
  }, []);

  // Update theme class and save to localStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Modal State
  const [modalState, setModalState] = useState<{ isOpen: boolean; title: string; content: ReactNode | null }>({
    isOpen: false,
    title: '',
    content: null,
  });

  const legalContent = {
    terms: <Terms />,
    privacy: <Privacy />,
    cookies: <Cookies />,
  };

  const openModal = (title: string, content: ReactNode) => {
    setModalState({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <Router>
      <AppContent 
        theme={theme} 
        toggleTheme={toggleTheme} 
        openModal={openModal}
        closeModal={closeModal}
        modalState={modalState}
        legalContent={legalContent}
      />
    </Router>
  );
};

export default App;