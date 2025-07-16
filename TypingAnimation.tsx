import { useState, useEffect } from "react";

export default function TypingAnimation() {
  const messages = [
    "Professional Sound Engineer",
    "Live Concert Specialist",
    "Audio Mixing Expert",
    "Sound System Designer",
    "Live Performance Manager"
  ];
  
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const fullMessage = messages[currentIndex];
      if (currentMessage.length < fullMessage.length) {
        timeout = setTimeout(() => {
          setCurrentMessage(fullMessage.substring(0, currentMessage.length + 1));
        }, 150);
      } else {
        setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (currentMessage.length > 0) {
        timeout = setTimeout(() => {
          setCurrentMessage(currentMessage.substring(0, currentMessage.length - 1));
        }, 50);
      } else {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentMessage, isTyping, currentIndex, messages]);

  return (
    <div className="glass-card rounded-2xl p-3 text-center hover-scale performance-optimized">
      <div className="flex items-center justify-center space-x-1 mb-1">
        <i className="fas fa-keyboard text-[var(--neon-cyan)] text-lg"></i>
        <div className="font-orbitron text-sm font-bold neon-text min-h-[20px] flex items-center">
          {currentMessage}
          <span className="animate-neon-blink ml-1">|</span>
        </div>
      </div>
      <p className="text-gray-400 text-xs">Keahlian</p>
    </div>
  );
}