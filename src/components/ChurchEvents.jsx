import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, ChevronLeft, ChevronRight } from 'react-feather';  

export default function ChurchEvents() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      title: 'Evangelismo nas Zonas',
      date: '2025-08-18',
      dateFormatted: '18 AGO',
      time: '09:00',
      location: 'Várias Comunidades',
      description: 'Ação evangelística com distribuição de alimentos',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      attendees: 100,
      status: 'próximo'
    },
    {
      id: 2,
      title: 'Conferência de Avivamento',
      date: '2025-08-25',
      dateFormatted: '25 AGO',
      time: '19:00',
      location: 'Igreja Principal - Riopel',
      description: 'Noite especial de adoração e palavra com pregadores convidados',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      attendees: 250,
      status: 'destaque'
    },
    {
      id: 3,
      title: 'Culto de Gratidão',
      date: '2025-08-30',
      dateFormatted: '30 AGO',
      time: '18:00',
      location: 'Igreja Principal - Riopel',
      description: 'Celebração pelos 5 anos da congregação da Riopel',
      image: 'https://images.unsplash.com/photo-1445091063664-0b2a2dfc8aeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      attendees: 200,
      status: 'especial'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Workshop de Música',
      date: '07 SET',
      time: '14:00',
      type: 'Capacitação'
    },
    {
      title: 'Retiro de Jovens',
      date: '15-17 SET',
      time: '08:00',
      type: 'Retiro'
    },
    {
      title: 'Encontro de Casais',
      date: '21 SET',
      time: '15:00',
      type: 'Família'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const getStatusColor = (status) => {
    const colors = {
      próximo: 'bg-green-500',
      destaque: 'bg-red-500',
      especial: 'bg-purple-500'
    };
    return colors[status] || 'bg-blue-500';
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Próximos Eventos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Participe dos Nossos <span className="text-blue-600">Eventos</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Event Slider */}
          <div className="lg:col-span-2">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Event Slider */}
              <div className="relative h-96 overflow-hidden">
                {events.map((event, index) => (
                  <div
                    key={event.id}
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                      index === currentSlide ? 'translate-x-0' : 
                      index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                    }`}
                  >
                    <div className="relative h-full">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`${getStatusColor(event.status)} text-white px-3 py-1 rounded-full text-xs font-semibold uppercase`}>
                          {event.status}
                        </span>
                      </div>

                      {/* Date Badge */}
                      <div className="absolute top-4 right-4 bg-white rounded-lg p-3 text-center shadow-lg">
                        <div className="text-xl font-bold text-gray-800">
                          {event.dateFormatted.split(' ')[0]}
                        </div>
                        <div className="text-xs text-gray-600">
                          {event.dateFormatted.split(' ')[1]}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{event.title}</h3>
                        <p className="text-gray-200 mb-4 max-w-md">{event.description}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{event.attendees} pessoas</span>
                          </div>
                        </div>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center gap-2">
                          Saber Mais
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Controls */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {events.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Upcoming Events */}
          <div className="space-y-6">
            {/* Quick Calendar */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Próximos Eventos</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="bg-white/20 rounded-lg p-2 min-w-fit">
                      <div className="text-xs font-medium">{event.date}</div>
                      <div className="text-xs opacity-75">{event.time}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{event.title}</h4>
                      <span className="text-xs opacity-75">{event.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-800">Informações</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-800">📍 Localização</p>
                  <p>Av. de Moçambique, Paragem Riopel</p>
                  <p>Distrito de Marracuene</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">📞 Contactos</p>
                  <p>+258 87 878 7878</p>
                  <p>+258 87 838 3838</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Ver Todos os Eventos
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">6</div>
            <div className="text-sm text-gray-600">Eventos este Mês</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">590</div>
            <div className="text-sm text-gray-600">Participantes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">12</div>
            <div className="text-sm text-gray-600">Zonas Alcançadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">3</div>
            <div className="text-sm text-gray-600">Eventos Especiais</div>
          </div>
        </div>
      </div>
    </section>
  );
}



// import React, { useState } from 'react';
// import { Calendar, Clock, MapPin, Users, Music, Heart, BookOpen, Star, ArrowRight, Filter } from 'react-feather';

// export default function ChurchEvents() {
//   const [activeFilter, setActiveFilter] = useState('todos');

//   const events = [
//     {
//       id: 1,
//       title: 'Conferência de Avivamento',
//       date: '2025-08-25',
//       dateFormatted: '25 de Agosto',
//       time: '19:00',
//       location: 'Igreja Principal - Riopel',
//       category: 'conferencia',
//       description: 'Uma noite especial de adoração e palavra com pregadores convidados',
//       image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       attendees: 250,
//       price: 'Gratuito',
//       featured: true,
//       tags: ['Adoração', 'Pregação', 'Oração']
//     },
//     {
//       id: 2,
//       title: 'Retiro de Jovens',
//       date: '2025-09-15',
//       dateFormatted: '15-17 de Setembro',
//       time: '08:00',
//       location: 'Centro de Retiros - Manhiça',
//       category: 'retiro',
//       description: '3 dias de comunhão, ensinamentos e atividades especiais para jovens',
//       image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       attendees: 80,
//       price: '1.500 MT',
//       featured: false,
//       tags: ['Jovens', 'Retiro', 'Comunhão']
//     },
//     {
//       id: 3,
//       title: 'Culto de Gratidão',
//       date: '2025-08-30',
//       dateFormatted: '30 de Agosto',
//       time: '18:00',
//       location: 'Igreja Principal - Riopel',
//       category: 'especial',
//       description: 'Celebração especial pelos 5 anos da congregação da Riopel',
//       image: 'https://images.unsplash.com/photo-1445091063664-0b2a2dfc8aeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       attendees: 200,
//       price: 'Gratuito',
//       featured: true,
//       tags: ['Celebração', 'Aniversário', 'Gratidão']
//     },
//     {
//       id: 4,
//       title: 'Workshop de Música',
//       date: '2025-09-07',
//       dateFormatted: '7 de Setembro',
//       time: '14:00',
//       location: 'Salão da Igreja - Riopel',
//       category: 'workshop',
//       description: 'Capacitação para músicos e cantores do ministério de louvor',
//       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       attendees: 30,
//       price: 'Gratuito',
//       featured: false,
//       tags: ['Música', 'Capacitação', 'Ministério']
//     },
//     {
//       id: 5,
//       title: 'Encontro de Casais',
//       date: '2025-09-21',
//       dateFormatted: '21 de Setembro',
//       time: '15:00',
//       location: 'Igreja Principal - Riopel',
//       category: 'encontro',
//       description: 'Uma tarde especial para fortalecer os relacionamentos matrimoniais',
//       image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       attendees: 60,
//       price: 'Gratuito',
//       featured: false,
//       tags: ['Casais', 'Relacionamento', 'Família']
//     },
//     {
//       id: 6,
//       title: 'Evangelismo nas Zonas',
//       date: '2025-08-18',
//       dateFormatted: '18 de Agosto',
//       time: '09:00',
//       location: 'Várias Comunidades',
//       category: 'evangelismo',
//       description: 'Ação evangelística com distribuição de alimentos e oração pelas famílias',
//       image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       attendees: 100,
//       price: 'Gratuito',
//       featured: false,
//       tags: ['Evangelismo', 'Comunidade', 'Ação Social']
//     }
//   ];

//   const filters = [
//     { key: 'todos', label: 'Todos os Eventos', icon: Calendar },
//     { key: 'conferencia', label: 'Conferências', icon: Users },
//     { key: 'retiro', label: 'Retiros', icon: Heart },
//     { key: 'workshop', label: 'Workshops', icon: BookOpen },
//     { key: 'especial', label: 'Especiais', icon: Star }
//   ];

//   const filteredEvents = activeFilter === 'todos' 
//     ? events 
//     : events.filter(event => event.category === activeFilter);

//   const getCategoryColor = (category) => {
//     const colors = {
//       conferencia: 'from-blue-500 to-blue-600',
//       retiro: 'from-green-500 to-green-600',
//       especial: 'from-purple-500 to-purple-600',
//       workshop: 'from-orange-500 to-orange-600',
//       encontro: 'from-pink-500 to-pink-600',
//       evangelismo: 'from-teal-500 to-teal-600'
//     };
//     return colors[category] || 'from-gray-500 to-gray-600';
//   };

//   return (
//     <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <Calendar className="w-6 h-6 text-blue-600" />
//             <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
//               Próximos Eventos
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Eventos da <span className="text-blue-600">Igreja</span>
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Participe dos nossos eventos especiais e fortaleça sua caminhada com Deus
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {filters.map((filter) => {
//             const IconComponent = filter.icon;
//             return (
//               <button
//                 key={filter.key}
//                 onClick={() => setActiveFilter(filter.key)}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
//                   activeFilter === filter.key
//                     ? 'bg-blue-600 text-white shadow-lg'
//                     : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow'
//                 }`}
//               >
//                 <IconComponent className="w-4 h-4" />
//                 {filter.label}
//               </button>
//             );
//           })}
//         </div>

//         {/* Featured Events */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-12">
//           {filteredEvents.filter(event => event.featured).map((event) => (
//             <div key={event.id} className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
//               <div className="relative">
//                 <img 
//                   src={event.image} 
//                   alt={event.title}
//                   className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                     Destaque
//                   </span>
//                 </div>
//                 <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-lg p-2 text-center">
//                   <div className="text-2xl font-bold text-gray-800">
//                     {event.dateFormatted.split(' ')[0]}
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     {event.dateFormatted.split(' ').slice(1).join(' ')}
//                   </div>
//                 </div>
//               </div>
              
//               <div className="p-8">
//                 <h3 className="text-2xl font-bold text-gray-800 mb-3">{event.title}</h3>
//                 <p className="text-gray-600 mb-6">{event.description}</p>
                
//                 <div className="space-y-3 mb-6">
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <Clock className="w-5 h-5 text-blue-500" />
//                     <span>{event.time}</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <MapPin className="w-5 h-5 text-blue-500" />
//                     <span>{event.location}</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <Users className="w-5 h-5 text-blue-500" />
//                     <span>{event.attendees} participantes esperados</span>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {event.tags.map((tag, index) => (
//                     <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div>
//                     <span className="text-2xl font-bold text-green-600">{event.price}</span>
//                   </div>
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center gap-2">
//                     Inscrever-se
//                     <ArrowRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Regular Events Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredEvents.filter(event => !event.featured).map((event) => (
//             <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
//               <div className="relative">
//                 <img 
//                   src={event.image} 
//                   alt={event.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className={`absolute top-0 left-0 right-0 bg-gradient-to-r ${getCategoryColor(event.category)} p-4`}>
//                   <div className="text-white text-right">
//                     <div className="text-lg font-bold">{event.dateFormatted}</div>
//                     <div className="text-sm opacity-90">{event.time}</div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
//                 <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                
//                 <div className="space-y-2 mb-4 text-sm text-gray-600">
//                   <div className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4" />
//                     <span>{event.location}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Users className="w-4 h-4" />
//                     <span>{event.attendees} participantes</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <span className="text-lg font-bold text-green-600">{event.price}</span>
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
//                     Ver Detalhes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="mt-16 text-center">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
//             <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
            
//             <div className="relative z-10">
//               <h3 className="text-3xl md:text-4xl font-bold mb-4">
//                 Não Perca Nenhum Evento!
//               </h3>
//               <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
//                 Inscreva-se na nossa lista de eventos e receba notificações sobre todas as atividades especiais da igreja
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                 <input 
//                   type="email" 
//                   placeholder="Seu email aqui..."
//                   className="px-6 py-3 rounded-xl text-gray-800 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-white"
//                 />
//                 <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
//                   Inscrever-se
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }