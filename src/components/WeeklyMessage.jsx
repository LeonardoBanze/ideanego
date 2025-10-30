import React from 'react';
import { Play, Calendar, BookOpen } from 'react-feather';

export default function WeeklyMessage() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Mensagem da Semana
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Palavra de <span className="text-blue-600">Esperança</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Uma mensagem transformadora para fortalecer sua fé e inspirar seu coração
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Theme and Verses */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            
            {/* Theme */}
            <div className="relative z-10 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                  Tema desta semana
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                "A Força da Fé em Tempos Difíceis"
              </h3>
            </div>

            {/* Bible Verses */}
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <blockquote className="text-lg text-gray-700 font-medium italic mb-2">
                  "Posso todas as coisas naquele que me fortalece."
                </blockquote>
                <cite className="text-blue-600 font-semibold">
                  Filipenses 4:13
                </cite>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <blockquote className="text-lg text-gray-700 font-medium italic mb-2">
                  "Entregue o seu caminho ao Senhor; confie nele, e ele agirá."
                </blockquote>
                <cite className="text-purple-600 font-semibold">
                  Salmos 37:5
                </cite>
              </div>

              <div className="border-l-4 border-indigo-500 pl-6">
                <blockquote className="text-lg text-gray-700 font-medium italic mb-2">
                  "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus."
                </blockquote>
                <cite className="text-indigo-600 font-semibold">
                  Isaías 41:10
                </cite>
              </div>
            </div>

            {/* Date and Pastor */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>12 de Agosto, 2025</span>
                <span>Pastor Alfredo Miambo</span>
              </div>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-4 lg:p-6">
              <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer">
                {/* Video Thumbnail */}
                <img 
                  src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Mensagem da Semana - A Força da Fé" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 group-hover:bg-opacity-100 rounded-full p-6 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                    <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h4 className="text-white font-semibold text-xl mb-2">
                    A Força da Fé em Tempos Difíceis
                  </h4>
                  <p className="text-gray-200 text-sm">
                    Duração: 35 minutos • Pastor Alfredo Miambo
                  </p>
                </div>
              </div>

              {/* Video Details */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Visualizações</span>
                  <span className="font-semibold text-gray-800">1.247</span>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200">
                    Assistir Agora
                  </button>
                  <button className="px-4 py-3 border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 rounded-xl transition-colors duration-200">
                    <BookOpen className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">
              Próxima mensagem: Domingo às 19h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}