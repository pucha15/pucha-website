import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import HeaderMarquee from "@/components/HeaderMarquee";
import WidgetsContainer from "@/components/WidgetsContainer";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import GallerySection from "@/components/GallerySection";
import YouTubeSection from "@/components/YouTubeSection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import AIAssistant from "@/components/AIAssistant";
import NeonBackgroundAccents from "@/components/NeonBackgroundAccents";
import Footer from "@/components/Footer";

export default function Home() {
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      <NeonBackgroundAccents />
      <Navigation />
      <HeaderMarquee />
      <WidgetsContainer />
      <AboutSection />
      <PortfolioSection />
      <GallerySection />
      <YouTubeSection />
      <ContactSection />
      <Footer />
      <FloatingButtons onAiClick={() => setAiAssistantOpen(true)} />
      <AIAssistant isOpen={aiAssistantOpen} onClose={() => setAiAssistantOpen(false)} />
    </div>
  );
}
