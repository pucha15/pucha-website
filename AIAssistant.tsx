import { useState, useRef, useEffect } from "react";

interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Halo! Saya Pucha AI, asisten AI Ricky Fernando. Ada yang bisa saya bantu tentang layanan sound engineering?',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message.trim() })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: 'Maaf, terjadi kesalahan. Silakan coba lagi nanti.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const playAiSound = () => {
    console.log('AI Assistant sound effect would play here');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="glass-card rounded-2xl p-6 max-w-md w-full mx-4 h-96 flex flex-col transform scale-100 opacity-100 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img 
              src="https://i.postimg.cc/3JRK049Q/1752580840791.png" 
              alt="AI Assistant" 
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="font-orbitron text-lg font-bold text-[var(--neon-cyan)]">Pucha AI</h3>
              <p className="text-gray-400 text-xs">Live Chat • Ricky's Helper</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs rounded-lg p-3 ${
                msg.type === 'user' 
                  ? 'bg-[var(--neon-cyan)] text-black' 
                  : 'glass-card text-white'
              }`}>
                {msg.type === 'assistant' && (
                  <div className="flex items-start space-x-2 mb-2">
                    <img 
                      src="https://i.postimg.cc/3JRK049Q/1752580840791.png" 
                      alt="AI" 
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                )}
                <p className="text-sm">{msg.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {msg.timestamp.toLocaleTimeString('id-ID', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="glass-card rounded-lg p-3 max-w-xs">
                <div className="flex items-center space-x-2">
                  <img 
                    src="https://i.postimg.cc/3JRK049Q/1752580840791.png" 
                    alt="AI" 
                    className="w-6 h-6 rounded-full"
                  />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
        <div className="flex space-x-2">
          <input 
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ketik pesan..." 
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-[var(--neon-cyan)]"
            disabled={isLoading}
          />
          <button 
            onClick={handleSendMessage}
            disabled={isLoading || !message.trim()}
            className="bg-[var(--neon-cyan)] text-black px-4 py-3 rounded-lg hover:bg-opacity-80 transition-colors duration-300 disabled:opacity-50"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
