import { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('id-ID', { hour12: false });
  const dateString = time.toLocaleDateString('id-ID', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="glass-card rounded-2xl p-4 text-center">
      <div className="font-orbitron text-xl font-bold neon-text mb-1">
        {timeString}
      </div>
      <div className="text-gray-400 font-orbitron text-xs">
        {dateString}
      </div>
    </div>
  );
}
