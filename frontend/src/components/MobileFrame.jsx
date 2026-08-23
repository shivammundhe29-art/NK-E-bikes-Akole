import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';
import { BottomNav } from './BottomNav';
import { useApp } from '../context/AppContext';

export const MobileFrame = ({ children, screenTitle = "", showBottomNav = true, customStatusBarTheme = "dark-text" }) => {
  const { currentScreen } = useApp();
  const isDarkContent = ['splash', 'onboarding'].includes(currentScreen);

  return (
    <div className="mobile-phone-device">
      {/* Notch */}
      <div className="phone-notch">
        <div className="phone-speaker"></div>
        <div className="phone-camera"></div>
      </div>

      {/* Top Status Bar */}
      <div 
        className="phone-status-bar"
        style={{
          color: isDarkContent ? '#FFFFFF' : '#0F172A',
          backgroundColor: isDarkContent ? '#0B0F17' : '#FFFFFF'
        }}
      >
        <span style={{ fontSize: '13px', fontWeight: '700', paddingLeft: '8px' }}>9:41</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingRight: '8px' }}>
          <Signal size={12} strokeWidth={2.5} />
          <Wifi size={12} strokeWidth={2.5} />
          <Battery size={14} strokeWidth={2.5} />
        </div>
      </div>

      {/* Screen Content Scrollable Area */}
      <div className="phone-screen-content" style={{ backgroundColor: isDarkContent ? '#0B0F17' : '#F8FAFC' }}>
        {children}
      </div>

      {/* Bottom Nav if applicable */}
      {showBottomNav && !['splash', 'onboarding', 'auth'].includes(currentScreen) && (
        <BottomNav />
      )}
    </div>
  );
};
