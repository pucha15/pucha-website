export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <img 
            src="https://i.postimg.cc/3JRK049Q/1752580840791.png" 
            alt="Ricky Fernando Logo" 
            className="w-16 h-16 rounded-full mx-auto mb-4 animate-bounce-soft"
          />
          <h3 className="font-orbitron text-xl font-bold neon-text animate-neon-blink">RICKY FERNANDO</h3>
          <p className="text-gray-400 animate-wave">Professional Soundman</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://wa.me/081513624314" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[var(--neon-cyan)] transition-colors duration-300 animate-bounce-soft"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
          </a>
          <a 
            href="mailto:pucha.anime@gmail.com" 
            className="text-gray-400 hover:text-[var(--neon-cyan)] transition-colors duration-300 animate-heartbeat"
          >
            <i className="fas fa-envelope text-2xl"></i>
          </a>
          <a 
            href="https://www.instagram.com/puchapoii/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[var(--neon-cyan)] transition-colors duration-300 animate-bounce-soft"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
        <div className="text-gray-500 text-sm">
          <p>&copy; 2024 Ricky Fernando. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
