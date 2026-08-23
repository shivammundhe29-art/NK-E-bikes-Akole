import React, { useState } from 'react';
import { ArrowRight, Leaf, Shield, BatteryCharging, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BikeIllustration } from '../components/BikeIllustrations';

export const OnboardingScreen = () => {
  const { navigateTo } = useApp();
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      title: "Ride Electric\nRide Smart",
      description: "Eco-friendly rides for a better tomorrow.",
      model: "bravo",
      color: "#00D26A",
      badge: "Zero Emission",
      icon: Leaf
    },
    {
      title: "High Speed &\n150+ KM Range",
      description: "Power through Akole streets with advanced lithium batteries.",
      model: "falcon",
      color: "#059669",
      badge: "Extended Battery",
      icon: BatteryCharging
    },
    {
      title: "Official Showroom\nIn Akole",
      description: "Authorized sales, test rides, spare parts and expert service.",
      model: "nitro",
      color: "#10B981",
      badge: "Trusted & Safe",
      icon: Shield
    }
  ];

  const currentSlide = slides[slideIndex];
  const Icon = currentSlide.icon;

  const handleNext = () => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      navigateTo('auth');
    }
  };

  return (
    <div 
      style={{
        width: '100%',
        minHeight: '100%',
        background: '#FFFFFF',
        color: '#0F172A',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '30px 24px 34px',
        position: 'relative'
      }}
    >
      {/* Top Header */}
      <div>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(0, 210, 106, 0.12)',
          color: '#00A853',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: '700',
          marginBottom: '14px'
        }}>
          <Icon size={14} /> {currentSlide.badge}
        </div>

        <h2 style={{
          fontSize: '28px',
          fontWeight: '900',
          lineHeight: '1.2',
          letterSpacing: '-0.03em',
          color: '#0F172A',
          whiteSpace: 'pre-line'
        }}>
          {currentSlide.title}
        </h2>

        <p style={{
          fontSize: '14px',
          color: '#64748B',
          marginTop: '8px',
          lineHeight: '1.5'
        }}>
          {currentSlide.description}
        </p>
      </div>

      {/* Center Bike Visual */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px 0'
      }}>
        {/* Soft eco-glow background */}
        <div style={{
          position: 'absolute',
          width: '260px',
          height: '260px',
          background: 'radial-gradient(circle, rgba(0, 210, 106, 0.15) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%'
        }} />
        
        <div className="float-animation" style={{ width: '100%', maxWidth: '320px', zIndex: 1 }}>
          <BikeIllustration model={currentSlide.model} color={currentSlide.color} />
        </div>
      </div>

      {/* Bottom Controls */}
      <div>
        {/* Pagination Dots matching Screen 2 */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setSlideIndex(idx)}
              style={{
                width: slideIndex === idx ? '22px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: slideIndex === idx ? '#00D26A' : '#E2E8F0',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="btn-electric"
          style={{ width: '100%', padding: '14px', fontSize: '15px' }}
        >
          {slideIndex === slides.length - 1 ? 'Get Started' : 'Next'} <ArrowRight size={18} />
        </button>

        {/* Skip Button */}
        <button
          onClick={() => navigateTo('home')}
          style={{
            width: '100%',
            background: 'none',
            border: 'none',
            color: '#94A3B8',
            fontSize: '14px',
            fontWeight: '600',
            marginTop: '12px',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          Skip
        </button>
      </div>
    </div>
  );
};
