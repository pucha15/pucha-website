import { useState, useEffect } from "react";

export default function LiveStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [lastSeen, setLastSeen] = useState(new Date());

  useEffect(() => {
    const updateStatus = () => {
      setIsOnline(navigator.onLine);
      if (navigator.onLine) {
        setLastSeen(new Date());
      }
    };

    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);

    const interval = setInterval(() => {
      if (isOnline) {
        setLastSeen(new Date());
      }
    }, 30000); // Update every 30 seconds

    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
      clearInterval(interval);
    };
  }, [isOnline]);

  const getStatusColor = () => {
    return isOnline ? 'text-green-400' : 'text-red-400';
  };

  const getStatusText = () => {
    return isOnline ? 'Online' : 'Offline';
  };

  return (
    <div className="glass-card rounded-2xl p-3 text-center hover-scale performance-optimized">
      <div className="flex items-center justify-center space-x-1 mb-1">
        <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-400'} animate-pulse-glow`}></div>
        <div className="font-orbitron text-sm font-bold neon-text">
          {getStatusText()}
        </div>
      </div>
      <p className="text-gray-400 text-xs">Status</p>
      <p className="text-gray-500 text-xs mt-1">
        {isOnline ? 'Aktif sekarang' : `Terakhir: ${lastSeen.toLocaleTimeString('id-ID')}`}
      </p>
    </div>
  );
}