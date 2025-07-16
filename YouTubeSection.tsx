export default function YouTubeSection() {
  const youtubeVideos = [
    {
      title: "Sound Engineering Tips",
      description: "Professional tips for sound engineering"
    },
    {
      title: "Concert Behind Scenes",
      description: "Behind the scenes of live concerts"
    },
    {
      title: "Live Audio Mixing",
      description: "Real-time audio mixing techniques"
    }
  ];

  return (
    <section id="youtube" className="py-20 scroll-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold neon-text mb-6">YOUTUBE SHORTS</h2>
          <div className="w-24 h-1 bg-[var(--neon-cyan)] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {youtubeVideos.map((video, index) => (
            <div key={index} className={`glass-card rounded-2xl overflow-hidden hover-scale ${index === 0 ? 'animate-slide-right' : index === 1 ? 'animate-zoom-in' : 'animate-slide-left'}`}>
              <div className="bg-gray-800 h-96 flex items-center justify-center">
                <div className="text-center">
                  <i className="fab fa-youtube text-red-500 text-6xl mb-4 animate-heartbeat"></i>
                  <p className="text-gray-400 font-orbitron animate-neon-blink">YouTube Shorts</p>
                  <p className="text-sm text-gray-500 animate-wave">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
