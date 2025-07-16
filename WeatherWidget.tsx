import { useState, useEffect } from "react";

export default function WeatherWidget() {
  const [weather, setWeather] = useState({
    temp: 28,
    condition: 'Clear',
    humidity: 65,
    location: 'Jakarta'
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate weather data loading
    const weatherConditions = ['Clear', 'Cloudy', 'Rainy', 'Sunny', 'Partly Cloudy'];
    const locations = ['Jakarta', 'Bandung', 'Surabaya', 'Medan', 'Yogyakarta'];
    
    setTimeout(() => {
      setWeather({
        temp: Math.floor(Math.random() * 15) + 20, // 20-35°C
        condition: weatherConditions[Math.floor(Math.random() * weatherConditions.length)],
        humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
        location: locations[Math.floor(Math.random() * locations.length)]
      });
      setIsLoading(false);
    }, 1500);
  }, []);

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case 'Clear':
      case 'Sunny':
        return 'fas fa-sun';
      case 'Cloudy':
      case 'Partly Cloudy':
        return 'fas fa-cloud';
      case 'Rainy':
        return 'fas fa-cloud-rain';
      default:
        return 'fas fa-sun';
    }
  };

  if (isLoading) {
    return (
      <div className="glass-card rounded-2xl p-3 text-center performance-optimized">
        <div className="animate-rotate mb-1">
          <i className="fas fa-spinner text-[var(--neon-cyan)] text-lg"></i>
        </div>
        <p className="text-gray-400 text-xs">Loading weather...</p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-3 text-center hover-scale performance-optimized">
      <div className="flex items-center justify-center space-x-2 mb-2">
        <i className={`${getWeatherIcon()} text-[var(--neon-cyan)] text-xl animate-bounce-soft`}></i>
        <div className="font-orbitron text-xl font-bold neon-text animate-neon-blink">
          {weather.temp}°C
        </div>
      </div>
      <p className="text-gray-300 text-sm mb-1 animate-wave">{weather.condition}</p>
      <p className="text-gray-400 text-xs">{weather.location}</p>
      <p className="text-gray-500 text-xs mt-1">Humidity: {weather.humidity}%</p>
    </div>
  );
}