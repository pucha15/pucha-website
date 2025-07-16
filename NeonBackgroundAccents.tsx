import { useEffect, useState } from 'react';

export default function NeonBackgroundAccents() {
  const [accents, setAccents] = useState<Array<{
    id: number;
    icon: string;
    top: string;
    left: string;
    animationDelay: string;
    className: string;
  }>>([]);

  useEffect(() => {
    const icons = [
      'fas fa-heart',
      'fas fa-music',
      'fas fa-volume-up',
      'fas fa-microphone',
      'fas fa-headphones',
      'fas fa-compact-disc',
      'fas fa-radio',
      'fas fa-guitar',
      'fas fa-drum',
      'fas fa-broadcast-tower'
    ];

    const accentClasses = ['neon-heart', 'neon-music', 'neon-sound'];

    const generateAccents = () => {
      const newAccents = [];
      for (let i = 0; i < 15; i++) {
        newAccents.push({
          id: i,
          icon: icons[Math.floor(Math.random() * icons.length)],
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          className: accentClasses[Math.floor(Math.random() * accentClasses.length)]
        });
      }
      setAccents(newAccents);
    };

    generateAccents();
  }, []);

  return (
    <div className="background-accents">
      {accents.map((accent) => (
        <i
          key={accent.id}
          className={`${accent.icon} ${accent.className}`}
          style={{
            top: accent.top,
            left: accent.left,
            animationDelay: accent.animationDelay,
          }}
        />
      ))}
    </div>
  );
}