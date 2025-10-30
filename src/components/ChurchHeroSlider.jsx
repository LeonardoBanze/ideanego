import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Bem-vindos à Nossa Igreja",
    description: "Faça parte da família Assembleia de Deus Baixa - Congregação da Riopel. Aqui você encontrará amor, comunhão e a presença de Deus transformando vidas."
  },
  {
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Cultos Durante a Semana",
    description: "Participe dos nossos cultos: Terças nas zonas às 18h, Quartas e Sextas na igreja às 18h, Sábados culto de jovens às 13h e Domingos às 7:30h."
  },
  {
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Oração e Intercessão",
    description: "Nas quartas-feiras, venha experimentar o poder da oração comunitária. Unidos em fé, buscamos a face de Deus por nossas famílias e comunidade."
  },
  {
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Ministério de Jovens",
    description: "Aos sábados às 13h temos culto especial para jovens. Um ambiente descontraído com adoração, palavra e comunhão para a nova geração."
  },
  {
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Evangelismo nas Zonas",
    description: "Às terças-feiras levamos a palavra de Deus às comunidades. Participe conosco nesta missão de alcançar vidas com o amor de Cristo."
  },
  {
    image: "https://images.unsplash.com/photo-1445091063664-0b2a2dfc8aeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Libertação e Cura",
    description: "Nas sextas-feiras experimentamos o poder libertador de Jesus. Venha receber oração e ministração para sua vida e família."
  }
];

export default function ChurchHeroSlider() {
  const [current, setCurrent] = useState(0);

  // Slide automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => prev === slides.length - 1 ? 0 : prev + 1);
    }, 7000); // Muda a cada 7 segundos

    return () => clearInterval(interval);
  }, []);

  function prevSlide() {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  }

  function nextSlide() {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Slide ativo - imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-full object-cover transition-transform duration-1000 scale-105"
        />
        {/* Overlay escuro para melhor legibilidade */}
        <div className="absolute inset-0 bg-opacity-40"></div>
      </div>

      {/* Card de conteúdo posicionado à esquerda */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-2xl">
            <div className="bg-white bg-opacity-95 backdrop-blur-sm p-8 lg:p-10 shadow-2xl rounded-lg">
              <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-blue-900 leading-tight">
                {slides[current].title}
              </h1>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                {slides[current].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-colors duration-200 uppercase tracking-wide rounded-lg shadow-lg">
                  Quero Participar
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 uppercase tracking-wide rounded-lg">
                  Saber Mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controles de navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-30 hover:bg-opacity-50 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center transition-all duration-200 z-20 group"
        aria-label="Slide anterior"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-30 hover:bg-opacity-50 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center transition-all duration-200 z-20 group"
        aria-label="Próximo slide"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores de slide */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current 
                ? "bg-white w-8 h-3" 
                : "bg-white bg-opacity-50 hover:bg-opacity-75 w-3 h-3"
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Informação de localização fixa no canto inferior direito */}
      <div className="absolute bottom-6 right-6 bg-black bg-opacity-50 backdrop-blur-sm text-white p-4 rounded-lg z-20">
        <div className="text-sm">
          <p className="font-semibold">Igreja Assembleia de Deus Baixa</p>
          <p className="text-xs opacity-90">Congregação da Riopel</p>
          <p className="text-xs opacity-75">Marracuene • Av. de Moçambique</p>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-1/4 right-10 w-20 h-20 border-2 border-white border-opacity-30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-20 w-12 h-12 border-2 border-white border-opacity-20 rounded-full animate-pulse hidden lg:block delay-1000"></div>
    </section>
  );
}