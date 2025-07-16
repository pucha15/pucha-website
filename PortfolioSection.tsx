export default function PortfolioSection() {
  const portfolioItems = [
    {
      image: "https://i.postimg.cc/BnLgz3mZ/IMG-20240810-192041-066.jpg",
      title: "Setup Konser Besar",
      description: "Persiapan sound system untuk konser skala besar dengan pencahayaan profesional dan tata panggung yang memukau."
    },
    {
      image: "https://i.postimg.cc/Z5tBThT5/1730896147186.jpg",
      title: "Live Audio Mixing",
      description: "Pengoperasian mixing console secara real-time untuk mendapatkan kualitas audio yang optimal selama pertunjukan live."
    },
    {
      image: "https://i.postimg.cc/vH6xFmwK/IMG-20250116-192423-004.jpg",
      title: "Atmosfer Konser",
      description: "Suasana konser yang meriah dengan penonton yang antusias, didukung oleh kualitas audio yang jernih dan menggelegar."
    },
    {
      image: "https://i.postimg.cc/V6L03Bz9/IMG-20250221-202310116-BURST0020.jpg",
      title: "Performa Panggung",
      description: "Dokumentasi performa panggung dengan setup sound system profesional yang mendukung kualitas audio terbaik."
    },
    {
      image: "https://i.postimg.cc/RVjfNHT9/IMG-20250313-171251-774.jpg",
      title: "Koordinasi Audio Visual",
      description: "Sinkronisasi sempurna antara sistem audio dan lighting untuk menciptakan pengalaman konser yang tak terlupakan."
    },
    {
      image: "https://i.postimg.cc/zfNgkYMc/IMG-20250419-102818-249.jpg",
      title: "Ruang Kerja Profesional",
      description: "Workspace sound engineering dengan peralatan audio profesional untuk mixing dan mastering yang presisi."
    }
  ];

  return (
    <section id="portfolio" className="py-20 scroll-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold neon-text mb-6">PORTFOLIO TERPILIH</h2>
          <div className="w-24 h-1 bg-[var(--neon-cyan)] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className={`glass-card rounded-2xl overflow-hidden hover-scale performance-optimized ${index < 3 ? 'animate-slide-right' : ''}`}>
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h4 className="font-orbitron text-lg font-bold text-[var(--neon-cyan)] mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
