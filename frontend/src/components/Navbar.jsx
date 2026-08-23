import React from 'react';
import { Menu, Bell, ArrowLeft, Zap, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar = ({ title, showBack = false, onBack = null, isMobileView = false }) => {
  const { 
    setIsDrawerOpen, 
    navigateTo, 
    unreadNotificationsCount, 
    currentScreen 
  } = useApp();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigateTo('home');
    }
  };

  return (
    <header 
      className="site-navbar"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobileView ? '12px 18px' : '16px 28px',
        backgroundColor: '#FFFFFF',
        color: '#0F172A',
        borderBottom: '1px solid #F1F5F9',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}
    >
      {/* Left Action: Back Arrow or Hamburger Menu */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {showBack ? (
          <button
            onClick={handleBack}
            aria-label="Go Back"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              borderRadius: '50%',
              color: '#0F172A',
              transition: 'background 0.2s'
            }}
          >
            <ArrowLeft size={22} strokeWidth={2.5} />
          </button>
        ) : (
          <button
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open Menu Drawer"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              borderRadius: '8px',
              color: '#0F172A'
            }}
          >
            <Menu size={24} strokeWidth={2.2} />
          </button>
        )}

        {/* Center / Brand Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {title ? (
            <h1 style={{ fontSize: isMobileView ? '18px' : '20px', fontWeight: '800', margin: 0, color: '#0F172A' }}>
              {title}
            </h1>
          ) : (
            <div 
              onClick={() => navigateTo('home')} 
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <div style={{
                background: '#00D26A',
                color: '#000',
                borderRadius: '8px',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '900',
                fontSize: '15px'
              }}>
                <Zap size={16} fill="#000" strokeWidth={0} />
              </div>
              <span style={{ fontSize: isMobileView ? '17px' : '19px', fontWeight: '900', letterSpacing: '-0.03em', color: '#0F172A' }}>
                NK <span style={{ color: '#00D26A' }}>E-BIKE</span>
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Right Action: Notification Bell */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={() => navigateTo('notifications')}
          aria-label="Notifications"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            padding: '6px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0F172A'
          }}
        >
          <Bell size={22} strokeWidth={2} />
          {unreadNotificationsCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '4px',
                right: '4px',
                width: '8px',
                height: '8px',
                background: '#EF4444',
                borderRadius: '50%',
                border: '1.5px solid #FFFFFF'
              }}
            />
          )}
        </button>
      </div>
    </header>
  );
};
