import React, { ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-11/12 md:max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-bold text-alt-purple dark:text-violet-300">{title}</h2>
          <button 
            onClick={onClose} 
            type="button"
            name="Close Modal"
            id="Close Modal"
            aria-label="Close Modal"
            aria-controls="modal"
            aria-expanded="false"
            aria-hidden="true"
            className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;