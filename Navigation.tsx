import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-orbitron text-xl font-bold neon-text animate-neon-blink">
            RICKY FERNANDO
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-[var(--neon-cyan)] transition-colors duration-300">Tentang</a>
            <a href="#portfolio" className="hover:text-[var(--neon-cyan)] transition-colors duration-300">Portfolio</a>
            <a href="#gallery" className="hover:text-[var(--neon-cyan)] transition-colors duration-300">Galeri</a>
            <a href="#youtube" className="hover:text-[var(--neon-cyan)] transition-colors duration-300">YouTube</a>
            <a href="#contact" className="hover:text-[var(--neon-cyan)] transition-colors duration-300">Kontak</a>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[var(--neon-cyan)]"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a 
              href="#about" 
              className="block hover:text-[var(--neon-cyan)] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tentang
            </a>
            <a 
              href="#portfolio" 
              className="block hover:text-[var(--neon-cyan)] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#gallery" 
              className="block hover:text-[var(--neon-cyan)] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Galeri
            </a>
            <a 
              href="#youtube" 
              className="block hover:text-[var(--neon-cyan)] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              YouTube
            </a>
            <a 
              href="#contact" 
              className="block hover:text-[var(--neon-cyan)] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontak
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
