import React from 'react';
import { Calendar, Clock, MapPin, Phone, Users, Heart, BookOpen, Star } from 'react-feather';

export default function WeeklySchedule() {
  const scheduleItems = [
    {
      day: 'TER',
      dayNumber: '13',
      dayFull: 'Terça-feira',
      time: '18:00',
      title: 'Cultos nas Zonas',
      type: 'zone',
      location: 'Várias Comunidades',
      icon: Users,
      color: 'blue'
    },
    {
      day: 'QUA',
      dayNumber: '14',
      dayFull: 'Quarta-feira',
      time: '18:00',
      title: 'Culto de Oração',
      type: 'main',
      location: 'Igreja Principal - Riopel',
      icon: Users,
      color: 'purple'
    },
    {
      day: 'SEX',
      dayNumber: '16',
      dayFull: 'Sexta-feira',
      time: '18:00',
      title: 'Culto de Libertação',
      type: 'main',
      location: 'Igreja Principal - Riopel',
      icon: Users,
      color: 'indigo'
    },
    {
      day: 'SÁB',
      dayNumber: '17',
      dayFull: 'Sábado',
      time: '13:00',
      title: 'Culto de Jovens',
      type: 'youth',
      location: 'Igreja Principal - Riopel',
      icon: Heart,
      color: 'green'
    },
    {
      day: 'DOM',
      dayNumber: '18',
      dayFull: 'Domingo',
      time: '07:30',
      title: 'Culto Dominical',
      type: 'main',
      location: 'Igreja Principal - Riopel',
      icon: Star,
      color: 'orange',
      hasStudy: true
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Programação Semanal
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Agenda da <span className="text-blue-600">Semana</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Participe dos nossos cultos e fortaleça sua caminhada espiritual
          </p>
        </div>

        {/* Main Schedule */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Schedule List */}
          <div className="divide-y divide-gray-100">
            {scheduleItems.map((item, index) => {
              const IconComponent = item.icon;
              const colorClasses = {
                blue: 'bg-blue-600 text-blue-600 bg-blue-50',
                purple: 'bg-purple-600 text-purple-600 bg-purple-50',
                indigo: 'bg-indigo-600 text-indigo-600 bg-indigo-50',
                green: 'bg-green-600 text-green-600 bg-green-50',
                orange: 'bg-orange-600 text-orange-600 bg-orange-50'
              };
              
              return (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center gap-6">
                    {/* Date Circle */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-${item.color}-600 flex items-center justify-center text-white`}>
                      <div className="text-center">
                        <div className="text-xs font-medium opacity-80">{item.day}</div>
                        <div className="text-lg font-bold">{item.dayNumber}</div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className={`w-5 h-5 text-${item.color}-600`} />
                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                        {item.hasStudy && (
                          <div className="flex items-center gap-1 bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
                            <BookOpen className="w-3 h-3" />
                            <span>+ Estudo</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{item.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${item.color}-50 text-${item.color}-700`}>
                            {item.type === 'zone' ? 'Culto nas Zonas' : 
                             item.type === 'youth' ? 'Culto de Jovens' : 'Igreja Principal'}
                          </span>
                        </div>
                      </div>

                      {/* Study Notice for Sunday */}
                      {item.hasStudy && (
                        <div className="mt-3 p-3 bg-orange-50 rounded-lg">
                          <p className="text-sm text-orange-700">
                            <BookOpen className="w-4 h-4 inline mr-1" />
                            Após o culto: <strong>Estudo para Novos Convertidos</strong> (aproximadamente 09:00)
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Arrow or Action */}
                    <div className="flex-shrink-0">
                      <button className={`w-10 h-10 rounded-full bg-${item.color}-50 text-${item.color}-600 hover:bg-${item.color}-100 transition-colors duration-200 flex items-center justify-center`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Location & Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Nossa Igreja</h3>
            <div className="space-y-3 text-gray-600">
              <p className="font-semibold text-lg text-gray-800">Igreja Assembleia de Deus Baixa</p>
              <p className="text-gray-700">Congregação da Riopel</p>
              
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 mt-1 text-blue-600" />
                <div>
                  <p>Distrito de Marracuene</p>
                  <p>Av. de Moçambique, Paragem Riopel</p>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center md:justify-start pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span className="font-medium">+258 87 878 7878</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span className="font-medium">+258 87 838 3838</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Venha Conosco!</h3>
            <p className="text-gray-600 mb-6">
              Todos são bem-vindos em nossa igreja. Experimente a presença de Deus e faça novos amigos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200">
                Quero Participar
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors duration-200">
                Ver Localização
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}