import React from 'react';
import { 
  Home, Bike, CalendarCheck, Wrench, Bell, MapPin, Settings, LogOut, X, ChevronRight, Zap, Sun, Moon, Globe 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

export const DrawerMenu = () => {
  const { 
    isDrawerOpen, 
    setIsDrawerOpen, 
    navigateTo, 
    language, 
    setLanguage, 
    themeMode, 
    toggleTheme, 
    t 
  } = useApp();
  const { user, logout } = useAuth();

  if (!isDrawerOpen) return null;

  const menuItems = [
    { label: t('menuHome'), icon: Home, screen: 'home' },
    { label: t('menuPosters'), icon: Zap, screen: 'posters' },
    { label: t('menuBikes'), icon: Bike, screen: 'bikes' },
    { label: t('menuBookings'), icon: CalendarCheck, screen: 'bookings' },
    { label: t('menuService'), icon: Wrench, screen: 'service' },
    { label: t('menuNotifications'), icon: Bell, screen: 'notifications' },
    { label: t('menuShowroom'), icon: MapPin, screen: 'showroom' },
    { label: t('menuProfile'), icon: Settings, screen: 'profile' },
  ];

  const handleLogout = () => {
    logout();
    setIsDrawerOpen(false);
    navigateTo('auth');
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex'
      }}
    >
      {/* Backdrop */}
      <div 
        onClick={() => setIsDrawerOpen(false)}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(4px)',
          transition: 'opacity 0.3s'
        }}
      />

      {/* Slide Drawer Content */}
      <div 
        style={{
          position: 'relative',
          width: '320px',
          maxWidth: '85vw',
          height: '100%',
          background: themeMode === 'light' ? 'linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)' : 'linear-gradient(180deg, #062817 0%, #03170D 100%)',
          color: themeMode === 'light' ? '#0F172A' : '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '8px 0 32px rgba(0, 0, 0, 0.5)',
          zIndex: 10000,
          overflowY: 'auto'
        }}
      >
        {/* Close Button Top Right */}
        <button
          onClick={() => setIsDrawerOpen(false)}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: themeMode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: themeMode === 'light' ? '#0F172A' : '#FFFFFF',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* User Profile Header */}
        <div 
          onClick={() => { navigateTo('profile'); setIsDrawerOpen(false); }}
          style={{
            padding: '40px 24px 20px',
            borderBottom: themeMode === 'light' ? '1px solid #E2E8F0' : '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            cursor: 'pointer'
          }}
        >
          <div style={{ position: 'relative' }}>
            <img 
              src={user?.avatar_url || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"} 
              alt="Profile" 
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                border: '2.5px solid #00D26A',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              background: '#00D26A',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: themeMode === 'light' ? '2px solid #FFF' : '2px solid #062817'
            }} />
          </div>
          <div>
            <h3 style={{ fontSize: '17px', fontWeight: '800', margin: 0, color: themeMode === 'light' ? '#0F172A' : '#FFFFFF' }}>
              {user?.full_name || "Shivam Mundhe"}
            </h3>
            <p style={{ fontSize: '13px', color: '#64748B', margin: '3px 0 0' }}>
              {user?.mobile_number || "+91 9270441850"}
            </p>
          </div>
        </div>

        {/* Settings Bar: Theme & Language Switcher */}
        <div style={{
          padding: '16px 20px',
          borderBottom: themeMode === 'light' ? '1px solid #E2E8F0' : '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {/* Theme Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: themeMode === 'light' ? '#334155' : '#94A3B8', display: 'flex', alignItems: 'center', gap: '6px' }}>
              {themeMode === 'light' ? <Sun size={16} color="#F59E0B" /> : <Moon size={16} color="#38BDF8" />}
              {themeMode === 'light' ? t('lightMode') : t('darkMode')}
            </span>
            <button
              onClick={toggleTheme}
              style={{
                background: themeMode === 'light' ? '#E2E8F0' : 'rgba(255,255,255,0.12)',
                border: 'none',
                borderRadius: '20px',
                padding: '6px 14px',
                color: themeMode === 'light' ? '#0F172A' : '#FFF',
                fontWeight: '800',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              {themeMode === 'light' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>

          {/* Language Switcher Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: themeMode === 'light' ? '#334155' : '#94A3B8', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Globe size={16} color="#00D26A" />
              {t('language')}
            </span>
            <div style={{ display: 'flex', gap: '4px', background: themeMode === 'light' ? '#E2E8F0' : 'rgba(0,0,0,0.3)', padding: '3px', borderRadius: '10px' }}>
              <button
                onClick={() => setLanguage('en')}
                style={{
                  background: language === 'en' ? '#00D26A' : 'transparent',
                  color: language === 'en' ? '#000' : (themeMode === 'light' ? '#475569' : '#94A3B8'),
                  border: 'none',
                  borderRadius: '7px',
                  padding: '4px 8px',
                  fontSize: '11px',
                  fontWeight: '800',
                  cursor: 'pointer'
                }}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('mr')}
                style={{
                  background: language === 'mr' ? '#00D26A' : 'transparent',
                  color: language === 'mr' ? '#000' : (themeMode === 'light' ? '#475569' : '#94A3B8'),
                  border: 'none',
                  borderRadius: '7px',
                  padding: '4px 8px',
                  fontSize: '11px',
                  fontWeight: '800',
                  cursor: 'pointer'
                }}
              >
                मराठी
              </button>
              <button
                onClick={() => setLanguage('hi')}
                style={{
                  background: language === 'hi' ? '#00D26A' : 'transparent',
                  color: language === 'hi' ? '#000' : (themeMode === 'light' ? '#475569' : '#94A3B8'),
                  border: 'none',
                  borderRadius: '7px',
                  padding: '4px 8px',
                  fontSize: '11px',
                  fontWeight: '800',
                  cursor: 'pointer'
                }}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Menu Links */}
        <nav style={{ padding: '16px 14px', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {menuItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    navigateTo(item.screen);
                    setIsDrawerOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '12px 16px',
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '12px',
                    color: themeMode === 'light' ? '#1E293B' : '#E2E8F0',
                    fontSize: '14px',
                    fontWeight: '600',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 210, 106, 0.12)';
                    e.currentTarget.style.color = '#00D26A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = themeMode === 'light' ? '#1E293B' : '#E2E8F0';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <Icon size={20} strokeWidth={2} />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight size={16} opacity={0.5} />
                </button>
              );
            })}
          </div>

          {/* Quick Showroom Badge */}
          <div 
            onClick={() => { navigateTo('showroom'); setIsDrawerOpen(false); }}
            style={{
              marginTop: '20px',
              padding: '14px',
              background: 'rgba(0, 210, 106, 0.08)',
              border: '1px solid rgba(0, 210, 106, 0.3)',
              borderRadius: '14px',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00D26A', fontSize: '12px', fontWeight: '700' }}>
              <img src="./logo.png" alt="NK E-BIKES" style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'contain' }} /> NK E-BIKE SHOWROOM
            </div>
            <div style={{ fontSize: '13px', color: themeMode === 'light' ? '#0F172A' : '#F1F5F9', marginTop: '4px', fontWeight: '600' }}>
              Akole, Maharashtra
            </div>
            <div style={{ fontSize: '11px', color: '#64748B', marginTop: '2px' }}>
              Open 9:00 AM - 8:00 PM
            </div>
          </div>
        </nav>

        {/* Drawer Bottom Actions */}
        <div style={{ padding: '16px 20px', borderTop: themeMode === 'light' ? '1px solid #E2E8F0' : '1px solid rgba(255, 255, 255, 0.1)' }}>
          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              width: '100%',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#F87171',
              padding: '12px 18px',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            <LogOut size={18} />
            <span>{t('logout')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

