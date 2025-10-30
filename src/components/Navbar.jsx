import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Container principal com flex e justify-center */}
        <div className="flex items-center justify-center space-x-12">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="w-10 h-8 bg-[#0A4A99] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">IEAD</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-800">RIOPEL</span>
            </a>
          </div>

          {/* Menu de navegação */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-[#0A4A99] font-medium hover:text-[#0A4A99] transition-colors duration-200">
              INÍCIO
            </a>
            <a href="/about" className="text-gray-700 hover:text-[#0A4A99] transition-colors duration-200">
              SOBRE - NÓS
            </a>
            <a href="/service" className="text-gray-700 hover:text-[#0A4A99] transition-colors duration-200">
              SUB- CONGREGAÇÃO
            </a>
            <a href="#security" className="text-gray-700 hover:text-[#0A4A99] transition-colors duration-200">
              AGENDA
            </a>
        
            <a href="/contact" className="text-gray-700 hover:text-[#0A4A99] transition-colors duration-200">
              CONTACTOS
            </a>
          </div>

          {/* Botão hamburger para mobile */}
          <div className="lg:hidden flex-shrink-0 flex justify-end w-10">
            <button 
              className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-[#0A4A99] transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <a href="#" className="block text-[#0A4A99] font-medium hover:text-[#0A4A99] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>INÍCIO</a>
            <a href="#about" className="block text-gray-700 hover:text-[#0A4A99] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>SOBRE - NÓS</a>
            <a href="/service" className="block text-gray-700 hover:text-[#0A4A99] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>SERVIÇOS</a>
            <a href="#security" className="block text-gray-700 hover:text-[#0A4A99] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>SEGURANÇA</a>
            <a href="#apps" className="block text-gray-700 hover:text-[#0A4A99] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>APP'S</a>
            <a href="#blog" className="block text-gray-700 hover:text-[#0A4A99] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>BLOG</a>
            <a href="#contact" className="block text-gray-700 hover:text-[#0A4A99] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>CONTACTOS</a>
          </div>
        </div>
      )}
    </nav>
  );
}
