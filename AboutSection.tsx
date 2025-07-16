export default function AboutSection() {
  return (
    <section id="about" className="py-20 scroll-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold neon-text mb-6">TENTANG SAYA</h2>
          <div className="w-24 h-1 bg-[var(--neon-cyan)] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card rounded-2xl p-8 hover-scale animate-slide-right">
            <img 
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional audio engineer at mixing console" 
              className="rounded-xl w-full h-auto mb-6"
              loading="lazy"
            />
            
            <div className="text-center">
              <img 
                src="https://i.postimg.cc/3JRK049Q/1752580840791.png" 
                alt="Ricky Fernando Maskot" 
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-[var(--neon-cyan)] animate-bounce-soft"
                loading="lazy"
              />
              <h3 className="font-orbitron text-xl font-bold neon-text">Ricky Fernando</h3>
              <p className="text-gray-400 font-orbitron">Professional Soundman</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <h4 className="font-orbitron text-lg font-bold text-[var(--neon-cyan)] mb-4">Keahlian Profesional</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-[var(--neon-green)] mr-3"></i>
                  Sound Engineering
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-[var(--neon-green)] mr-3"></i>
                  Live Concert Audio
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-[var(--neon-green)] mr-3"></i>
                  Audio Mixing & Mastering
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-[var(--neon-green)] mr-3"></i>
                  Sound System Setup
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-[var(--neon-green)] mr-3"></i>
                  Live Performance Management
                </li>
              </ul>
            </div>
            
            <div className="glass-card rounded-2xl p-6">
              <h4 className="font-orbitron text-lg font-bold text-[var(--neon-cyan)] mb-4">Pengalaman</h4>
              <p className="text-gray-300 leading-relaxed">
                Sebagai soundman profesional dengan pengalaman bertahun-tahun dalam industri musik live, 
                saya telah menangani berbagai jenis konser dari skala kecil hingga besar. Keahlian saya 
                dalam sound engineering dan audio mixing memastikan kualitas suara yang optimal untuk 
                setiap pertunjukan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
