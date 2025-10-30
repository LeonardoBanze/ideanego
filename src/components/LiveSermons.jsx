import React, { useState } from 'react';
import { Play, Clock, Eye, Calendar, Video, Mic, Heart, Share2, Download, Radio } from 'react-feather';

export default function LiveSermons() {
  const [activeTab, setActiveTab] = useState('recent');

  const liveStreams = [
    {
      id: 1,
      title: 'Culto de Oração - Ao Vivo',
      pastor: 'Pastor Alfredo Miambo',
      status: 'live',
      viewers: 147,
      startTime: '18:00',
      thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Culto de Oração'
    }
  ];

  const recentSermons = [
    {
      id: 1,
      title: 'A Força da Fé em Tempos Difíceis',
      pastor: 'Pastor Alfredo Miambo',
      date: '2025-08-11',
      dateFormatted: '11 de Agosto',
      duration: '45:23',
      views: 1247,
      thumbnail: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Mensagem Dominical',
      description: 'Uma palavra poderosa sobre como manter a fé mesmo nas adversidades da vida.',
      verse: 'Filipenses 4:13'
    },
    {
      id: 2,
      title: 'O Poder da Oração na Vida do Crente',
      pastor: 'Pastora Maria Santos',
      date: '2025-08-07',
      dateFormatted: '7 de Agosto',
      duration: '38:15',
      views: 892,
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Culto de Oração',
      description: 'Descobra como a oração pode transformar sua vida e fortalecer sua comunhão com Deus.',
      verse: '1 Tessalonicenses 5:17'
    },
    {
      id: 3,
      title: 'Libertação e Cura pela Palavra',
      pastor: 'Pastor Alfredo Miambo',
      date: '2025-08-04',
      dateFormatted: '4 de Agosto',
      duration: '52:18',
      views: 1534,
      thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Culto de Libertação',
      description: 'Uma mensagem sobre o poder libertador de Jesus Cristo em nossas vidas.',
      verse: 'João 8:36'
    },
    {
      id: 4,
      title: 'Juventude com Propósito',
      pastor: 'Pastor Miguel Costa',
      date: '2025-08-03',
      dateFormatted: '3 de Agosto',
      duration: '35:42',
      views: 678,
      thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Culto de Jovens',
      description: 'Uma palavra especial para os jovens sobre viver com propósito e direção divina.',
      verse: 'Jeremias 29:11'
    },
    {
      id: 5,
      title: 'Evangelizando com Amor',
      pastor: 'Pastor Alfredo Miambo',
      date: '2025-07-30',
      dateFormatted: '30 de Julho',
      duration: '41:07',
      views: 956,
      thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Evangelismo',
      description: 'Como compartilhar o evangelho com amor e eficácia em nossas comunidades.',
      verse: 'Marcos 16:15'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Mensagem Dominical': 'bg-orange-100 text-orange-700',
      'Culto de Oração': 'bg-purple-100 text-purple-700',
      'Culto de Libertação': 'bg-indigo-100 text-indigo-700',
      'Culto de Jovens': 'bg-green-100 text-green-700',
      'Evangelismo': 'bg-teal-100 text-teal-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Video className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">
              Pregações Online
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Assista às Nossas <span className="text-red-600">Transmissões</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Não perca nenhuma palavra! Assista aos cultos ao vivo ou reveja as pregações recentes
          </p>
        </div>

        {/* Live Stream Alert */}
        {liveStreams.length > 0 && (
          <div className="mb-8">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-red-500 px-3 py-1 rounded-full">
                    <Radio className="w-4 h-4 animate-pulse" />
                    <span className="text-sm font-bold uppercase">AO VIVO</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{liveStreams[0].viewers} assistindo</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{liveStreams[0].title}</h3>
                <p className="text-red-100 mb-4">{liveStreams[0].pastor} • Iniciado às {liveStreams[0].startTime}</p>
                
                <button className="bg-white text-red-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Assistir Agora
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-1 shadow-md">
            <button
              onClick={() => setActiveTab('recent')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'recent'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Pregações Recentes
            </button>
            <button
              onClick={() => setActiveTab('popular')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'popular'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Mais Assistidas
            </button>
          </div>
        </div>

        {/* Sermons Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Featured Sermon */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={recentSermons[0].thumbnail} 
                  alt={recentSermons[0].title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group cursor-pointer hover:bg-opacity-20 transition-all duration-300">
                  <div className="bg-white bg-opacity-90 group-hover:bg-opacity-100 rounded-full p-6 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 text-red-600 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(recentSermons[0].category)}`}>
                    {recentSermons[0].category}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {recentSermons[0].duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{recentSermons[0].title}</h3>
                <p className="text-gray-600 mb-4">{recentSermons[0].description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Mic className="w-4 h-4" />
                    <span>{recentSermons[0].pastor}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{recentSermons[0].dateFormatted}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{recentSermons[0].views.toLocaleString()} visualizações</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Assistir
                  </button>
                  <button className="p-3 border border-gray-200 hover:border-red-600 hover:text-red-600 rounded-xl transition-colors duration-200">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-3 border border-gray-200 hover:border-red-600 hover:text-red-600 rounded-xl transition-colors duration-200">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Recent Sermons List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Outras Pregações</h3>
            
            {recentSermons.slice(1).map((sermon) => (
              <div key={sermon.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <div className="flex">
                  <div className="relative w-24 h-20 flex-shrink-0">
                    <img 
                      src={sermon.thumbnail} 
                      alt={sermon.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <Play className="w-4 h-4 text-white" fill="currentColor" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white px-1 rounded text-xs">
                      {sermon.duration}
                    </div>
                  </div>
                  
                  <div className="p-3 flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">{sermon.title}</h4>
                    <p className="text-xs text-gray-500 mb-2">{sermon.pastor}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{sermon.dateFormatted}</span>
                      <span>•</span>
                      <span>{sermon.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Não Perca Nenhuma Palavra!
            </h3>
            <p className="text-gray-600 mb-6">
              Inscreva-se para receber notificações quando estivermos transmitindo ao vivo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2">
                <Heart className="w-4 h-4" />
                Seguir Transmissões
              </button>
              <button className="border-2 border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-700 font-semibold py-3 px-8 rounded-xl transition-colors duration-200">
                Ver Todas as Pregações
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}