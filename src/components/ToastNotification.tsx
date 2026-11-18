import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const ToastNotification: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounceIn">
      <div className="bg-[#182330] text-white px-5 py-3.5 rounded-2xl shadow-luxury-lg flex items-center gap-3 max-w-md border border-slate-700">
        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        <span className="text-xs font-heading font-semibold leading-normal">{message}</span>
        <button onClick={onClose} className="ml-2 text-slate-400 hover:text-white text-sm">
          &times;
        </button>
      </div>
    </div>
  );
};
