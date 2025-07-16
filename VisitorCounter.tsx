import { useState, useEffect } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate visitor count with local storage
    const storedCount = localStorage.getItem('visitorCount');
    const currentCount = storedCount ? parseInt(storedCount) : Math.floor(Math.random() * 1000) + 500;
    
    setTimeout(() => {
      setCount(currentCount);
      setIsLoading(false);
      localStorage.setItem('visitorCount', (currentCount + 1).toString());
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="glass-card rounded-2xl p-4 text-center performance-optimized">
        <div className="animate-loading-dots">
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-2">Loading...</p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-3 text-center hover-scale performance-optimized">
      <div className="flex items-center justify-center space-x-1 mb-1">
        <i className="fas fa-eye text-[var(--neon-cyan)] text-lg"></i>
        <div className="font-orbitron text-lg font-bold neon-text">
          {count.toLocaleString()}
        </div>
      </div>
      <p className="text-gray-400 text-xs">Pengunjung</p>
    </div>
  );
}