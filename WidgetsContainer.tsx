import DigitalClock from './DigitalClock';
import VisitorCounter from './VisitorCounter';
import TypingAnimation from './TypingAnimation';
import LiveStatus from './LiveStatus';
import SoundEqualizer from './SoundEqualizer';
import WeatherWidget from './WeatherWidget';

export default function WidgetsContainer() {
  return (
    <section className="py-12 scroll-reveal">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Main Clock Widget */}
          <div className="col-span-2">
            <DigitalClock />
          </div>
          
          {/* Visitor Counter */}
          <div className="performance-optimized">
            <VisitorCounter />
          </div>
          
          {/* Typing Animation */}
          <div className="performance-optimized">
            <TypingAnimation />
          </div>
          
          {/* Live Status */}
          <div className="performance-optimized">
            <LiveStatus />
          </div>
          
          {/* Sound Equalizer */}
          <div className="performance-optimized">
            <SoundEqualizer />
          </div>
          
          {/* Weather Widget */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <WeatherWidget />
          </div>
        </div>
      </div>
    </section>
  );
}