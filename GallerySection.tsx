export default function GallerySection() {
  const galleryImages = [
    "https://i.postimg.cc/BnLgz3mZ/IMG-20240810-192041-066.jpg",
    "https://i.postimg.cc/Z5tBThT5/1730896147186.jpg",
    "https://i.postimg.cc/vH6xFmwK/IMG-20250116-192423-004.jpg",
    "https://i.postimg.cc/V6L03Bz9/IMG-20250221-202310116-BURST0020.jpg",
    "https://i.postimg.cc/RVjfNHT9/IMG-20250313-171251-774.jpg",
    "https://i.postimg.cc/zfNgkYMc/IMG-20250419-102818-249.jpg",
    "https://i.postimg.cc/k41R9650/IMG-20250628-165924-557.jpg",
    "https://i.postimg.cc/jSxWW4Jp/Screenshot-20250613-101426.jpg",
    "https://i.postimg.cc/ZYNvXRSM/Screenshot-20250716-062836.jpg",
    "https://i.postimg.cc/15ZVSQR5/Screenshot-20250716-062902.jpg",
    "https://i.postimg.cc/Fz0fSPp4/Screenshot-20250716-062957.jpg",
    "https://i.postimg.cc/FRMd7tjp/Screenshot-20250716-063107.jpg",
    "https://i.postimg.cc/HLP718nf/Screenshot-20250716-063137.jpg",
    "https://i.postimg.cc/pLCFk6HV/Screenshot-20250716-063210.jpg",
    "https://i.postimg.cc/5ttFrS4B/Screenshot-20250716-063231.jpg",
    "https://i.postimg.cc/6324W6GT/Screenshot-20250716-063251.jpg",
    "https://i.postimg.cc/RhvmPX99/Screenshot-20250613-101426-1.jpg",
    "https://i.postimg.cc/xdGFsYdJ/Screenshot-20250613-101827-1.jpg"
  ];

  return (
    <section id="gallery" className="py-20 scroll-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold neon-text mb-6">GALERI KONSER</h2>
          <div className="w-24 h-1 bg-[var(--neon-cyan)] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className={`glass-card rounded-lg overflow-hidden hover-scale performance-optimized ${index < 8 ? 'animate-zoom-in' : ''}`} style={{animationDelay: `${index * 0.05}s`}}>
              <img 
                src={image} 
                alt={`Concert ${index + 1}`}
                className="w-full h-32 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
