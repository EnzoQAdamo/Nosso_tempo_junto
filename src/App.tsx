import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Data específica - altere aqui para a sua data desejada
  const startDate = new Date('2022-09-17T18:14:00'); // Exemplo: 17 de setembro de 2022, 18:14

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const now = new Date();
      const diffInMs = now.getTime() - startDate.getTime();
      
      // Calcular anos, meses, dias, horas, minutos e segundos
      const years = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diffInMs % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diffInMs % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

      setTimeElapsed({ years, months, days, hours, minutes, seconds });
    };

    // Calcular imediatamente
    calculateTimeElapsed();

    // Atualizar a cada segundo
    const interval = setInterval(calculateTimeElapsed, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  const formatTimeString = () => {
    const parts = [];
    
    if (timeElapsed.years > 0) {
      parts.push(`${timeElapsed.years} ${timeElapsed.years === 1 ? 'ano' : 'anos'}`);
    }
    if (timeElapsed.months > 0) {
      parts.push(`${timeElapsed.months} ${timeElapsed.months === 1 ? 'mês' : 'meses'}`);
    }
    if (timeElapsed.days > 0) {
      parts.push(`${timeElapsed.days} ${timeElapsed.days === 1 ? 'dia' : 'dias'}`);
    }
    if (timeElapsed.hours > 0) {
      parts.push(`${timeElapsed.hours} ${timeElapsed.hours === 1 ? 'hora' : 'horas'}`);
    }
    if (timeElapsed.minutes > 0) {
      parts.push(`${timeElapsed.minutes} ${timeElapsed.minutes === 1 ? 'minuto' : 'minutos'}`);
    }
    
    parts.push(`${timeElapsed.seconds} ${timeElapsed.seconds === 1 ? 'segundo' : 'segundos'}`);

    if (parts.length > 1) {
      const lastPart = parts.pop();
      return parts.join(', ') + ' e ' + lastPart;
    }
    
    return parts[0] || '0 segundos';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-8 tracking-wide">
          Nosso Tempo Juntos
        </h1>
        
        {/* Foto Central */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-lg"></div>
          <img
            src="/nos.png"
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl mx-auto border-4 border-white transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute -top-4 -right-4 bg-rose-500 rounded-full p-3 shadow-lg animate-pulse">
            <Heart className="w-6 h-6 text-white fill-current" />
          </div>
        </div>

        {/* Contador de Tempo */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 mb-6">
          <div className="text-2xl md:text-3xl font-medium text-gray-700 mb-4">
            Junto a você a
          </div>
          <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text leading-tight">
            {formatTimeString()}
          </div>
        </div>

        {/* Detalhes do Tempo */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {[
            { label: 'Anos', value: timeElapsed.years, color: 'from-rose-400 to-pink-500' },
            { label: 'Meses', value: timeElapsed.months, color: 'from-pink-400 to-purple-500' },
            { label: 'Dias', value: timeElapsed.days, color: 'from-purple-400 to-indigo-500' },
            { label: 'Horas', value: timeElapsed.hours, color: 'from-indigo-400 to-blue-500' },
            { label: 'Minutos', value: timeElapsed.minutes, color: 'from-blue-400 to-cyan-500' },
            { label: 'Segundos', value: timeElapsed.seconds, color: 'from-cyan-400 to-teal-500' }
          ].map((item, index) => (
            <div
              key={item.label}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30 hover:bg-white/70 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem Final */}
        <div className="mt-12 text-gray-600 text-lg md:text-xl font-light italic">
          "Cada segundo ao seu lado é um presente"
        </div>
      </div>
    </div>
  );
}

export default App;