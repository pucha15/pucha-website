import { useState, useEffect } from "react";

export default function SoundEqualizer() {
  const [bars, setBars] = useState<number[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const generateBars = () => {
      const newBars = Array.from({ length: 8 }, () => Math.random() * 100 + 10);
      setBars(newBars);
    };

    generateBars();
    
    const interval = setInterval(() => {
      if (isActive) {
        generateBars();
      }
    }, 400);

    return () => clearInterval(interval);
  }, [isActive]);

  const toggleEqualizer = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="glass-card rounded-2xl p-3 text-center hover-scale performance-optimized">
      <div className="flex items-center justify-center space-x-1 mb-2">
        <i className="fas fa-sliders-h text-[var(--neon-cyan)] text-lg"></i>
        <button 
          onClick={toggleEqualizer}
          className="font-orbitron text-sm font-bold neon-text"
        >
          {isActive ? 'LIVE' : 'STOP'}
        </button>
      </div>
      
      <div className="flex items-end justify-center space-x-1 h-12 mb-2">
        {bars.map((height, index) => (
          <div
            key={index}
            className={`w-2 bg-gradient-to-t from-[var(--neon-cyan)] to-[var(--neon-blue)] rounded-t ${
              isActive ? 'animate-bounce-soft' : ''
            }`}
            style={{
              height: `${height}%`,
              animationDelay: `${index * 0.1}s`,
              transition: 'height 0.2s ease-out'
            }}
          />
        ))}
      </div>
      
      <p className="text-gray-400 text-xs">Audio Meter</p>
    </div>
  );
}