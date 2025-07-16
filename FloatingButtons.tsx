interface FloatingButtonsProps {
  onAiClick: () => void;
}

export default function FloatingButtons({ onAiClick }: FloatingButtonsProps) {
  const handleCvDownload = () => {
    // TODO: Implement CV download functionality
    alert('CV akan diunduh (fitur dalam pengembangan)');
  };

  return (
    <div className="fixed right-5 bottom-5 md:right-8 md:bottom-8 z-40 flex flex-col gap-4">
      {/* CV Download Button */}
      <button 
        onClick={handleCvDownload}
        className="glass-card rounded-full flex items-center justify-center neon-glow hover:scale-110 transition-all duration-300 performance-optimized px-4 py-3"
      >
        <i className="fas fa-file-pdf text-[var(--neon-cyan)] text-lg mr-2"></i>
        <span className="text-[var(--neon-cyan)] font-orbitron text-sm font-bold">CV</span>
      </button>
      
      {/* AI Assistant Button */}
      <button 
        onClick={onAiClick}
        className="glass-card w-14 h-14 rounded-full flex items-center justify-center neon-glow hover:scale-110 transition-all duration-300 performance-optimized overflow-hidden"
      >
        <img 
          src="https://i.postimg.cc/3JRK049Q/1752580840791.png" 
          alt="AI Assistant" 
          className="w-10 h-10 rounded-full"
          loading="lazy"
        />
      </button>
    </div>
  );
}
