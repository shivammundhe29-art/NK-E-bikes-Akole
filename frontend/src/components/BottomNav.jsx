import React from 'react';
import { Home, Bike, Wrench, CalendarCheck, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BottomNav = () => {
  const { currentScreen, navigateTo } = useApp();

  const tabs = [
    { id: 'home', label: 'Home', icon: Home, screen: 'home' },
    { id: 'bikes', label: 'Bikes', icon: Bike, screen: 'bikes' },
    { id: 'service', label: 'Service', icon: Wrench, screen: 'service' },
    { id: 'bookings', label: 'Bookings', icon: CalendarCheck, screen: 'bookings' },
    { id: 'profile', label: 'Profile', icon: User, screen: 'profile' },
  ];

  return (
    <nav 
      className="bottom-nav-bar"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 8px 12px',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        position: 'sticky',
        bottom: 0,
        width: '100%',
        zIndex: 90,
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.04)'
      }}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentScreen === tab.screen;

        return (
          <button
            key={tab.id}
            onClick={() => navigateTo(tab.screen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              color: isActive ? '#00D26A' : '#94A3B8',
              fontWeight: isActive ? '700' : '500',
              fontSize: '11px',
              flex: 1,
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              borderRadius: '14px',
              background: isActive ? 'rgba(0, 210, 106, 0.12)' : 'transparent',
              transition: 'all 0.2s'
            }}>
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
            </div>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
