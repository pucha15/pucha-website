export default function ContactSection() {
  const contactInfo = [
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      value: "+62 815-1362-4314",
      link: "https://wa.me/081513624314",
      color: "text-green-500"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "pucha.anime@gmail.com",
      link: "mailto:pucha.anime@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: "fab fa-instagram",
      title: "Instagram",
      value: "@puchapoii",
      link: "https://www.instagram.com/puchapoii/",
      color: "text-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 scroll-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold neon-text mb-6">KONTAK</h2>
          <div className="w-24 h-1 bg-[var(--neon-cyan)] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => (
            <div key={index} className={`glass-card rounded-2xl p-8 text-center hover-scale ${index === 0 ? 'animate-slide-right' : index === 1 ? 'animate-zoom-in' : 'animate-slide-left'}`}>
              <div className="mb-6">
                <i className={`${contact.icon} ${contact.color} text-5xl mb-4 animate-bounce-soft`}></i>
                <h4 className="font-orbitron text-xl font-bold text-[var(--neon-cyan)] animate-neon-blink">
                  {contact.title}
                </h4>
              </div>
              <a 
                href={contact.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--neon-cyan)] transition-colors duration-300 animate-wave"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
