import React, { useEffect } from 'react';
import { Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BikeIllustration } from '../components/BikeIllustrations';

export const SplashScreen = ({ isStandalone = false }) => {
  const { navigateTo } = useApp();

  useEffect(() => {
    if (!isStandalone) {
      const timer = setTimeout(() => {
        // Automatically progress to Onboarding or Home
        // navigateTo('onboarding');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isStandalone]);

  return (
    <div 
      style={{
        width: '100%',
        minHeight: '100%',
        background: 'radial-gradient(circle at 50% 30%, #062817 0%, #080C13 70%, #03060A 100%)',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '50px 24px 40px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Top Brand Logo */}
      <div style={{ textAlign: 'center', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
          <div style={{
            background: '#00D26A',
            color: '#000',
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(0, 210, 106, 0.6)'
          }}>
            <Zap size={26} fill="#000" strokeWidth={0} />
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: '900', letterSpacing: '-0.04em', margin: 0 }}>
            NK <span style={{ color: '#00D26A' }}>E-BIKE</span>
          </h1>
        </div>

        <p style={{
          fontSize: '11px',
          fontWeight: '800',
          letterSpacing: '2.5px',
          color: '#00D26A',
          margin: 0,
          textTransform: 'uppercase'
        }}>
          RIDE ELECTRIC. RIDE SMART.
        </p>
      </div>

      {/* Hero Scooter on Glowing Grid */}
      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        {/* Glow Halo */}
        <div style={{
          position: 'absolute',
          width: '240px',
          height: '240px',
          background: 'radial-gradient(circle, rgba(0,210,106,0.3) 0%, rgba(0,210,106,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(20px)',
          zIndex: 1
        }} />

        <div className="float-animation" style={{ zIndex: 2, width: '100%', maxWidth: '320px' }}>
          <BikeIllustration model="bravo" color="#00D26A" />
        </div>
      </div>

      {/* Bottom Loading Indicator & CTA */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', zIndex: 2, width: '100%' }}>
        {/* Circular Spinner matching Screen 1 */}
        <div style={{
          width: '32px',
          height: '32px',
          border: '3px solid rgba(0, 210, 106, 0.2)',
          borderTopColor: '#00D26A',
          borderRadius: '50%',
          animation: 'spinSlow 1.2s linear infinite'
        }} />

        <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: '600', letterSpacing: '0.5px' }}>
          Loading...
        </span>

        <button
          onClick={() => navigateTo('onboarding')}
          className="btn-electric"
          style={{ width: '100%', marginTop: '10px', fontSize: '14px', padding: '12px' }}
        >
          Enter Showroom <Zap size={16} fill="#000" />
        </button>
      </div>
    </div>
  );
};
