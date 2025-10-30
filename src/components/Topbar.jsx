import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Topbar() {
  const [language, setLanguage] = useState('PT');

  return (
    <div className="bg-[#0A4A99] text-white text-xs sm:text-sm">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-2">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 lg:gap-0">
          
          {/* Informações de Contato */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-6 items-start sm:items-center">
            <span className="flex items-center gap-1 hover:text-gray-300 transition-colors duration-200">
              <Phone size={14} className="flex-shrink-0" />
              <span className="whitespace-nowrap">+258 87 676 7678</span>
            </span>

            <span className="flex items-center gap-1 hover:text-gray-300 transition-colors duration-200">
              <Mail size={14} className="flex-shrink-0" />
              <span className="break-all sm:break-normal">info@ibeariopel.com</span>
            </span>

            <span className="flex items-center gap-1 hover:text-gray-300 transition-colors duration-200">
              <MapPin size={14} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Moçambique, Maputo</span>
            </span>
          </div>

      

          {/* Seletor de Idioma - Descomentado e responsivo */}
          <div className="flex justify-center lg:justify-end items-center gap-2 mt-1 lg:mt-0">
            <button
              onClick={() => setLanguage('PT')}
              className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-all duration-200 ${
                language === 'PT' 
                  ? 'bg-white text-[#0A4A99] shadow-sm' 
                  : 'hover:bg-white hover:text-[#0A4A99] hover:shadow-sm'
              }`}
              aria-label="Português"
            >
              <span className="text-xs">🇵🇹</span>
              <span className="font-semibold">PT</span>
            </button>

            <button
              onClick={() => setLanguage('EN')}
              className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-all duration-200 ${
                language === 'EN' 
                  ? 'bg-white text-[#0A4A99] shadow-sm' 
                  : 'hover:bg-white hover:text-[#0A4A99] hover:shadow-sm'
              }`}
              aria-label="English"
            >
              <span className="text-xs">🇬🇧</span>
              <span className="font-semibold">EN</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}