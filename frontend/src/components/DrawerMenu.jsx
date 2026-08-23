import React from 'react';
import { 
  Home, Bike, CalendarCheck, Wrench, Bell, MapPin, Settings, LogOut, X, ChevronRight, Zap, ShieldCheck 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

export const DrawerMenu = () => {
  const { isDrawerOpen, setIsDrawerOpen, navigateTo } = useApp();
  const { user, logout } = useAuth();

  if (!isDrawerOpen) return null;

  const menuItems = [
    { label: 'Home', icon: Home, screen: 'home' },
    { label: 'Bikes', icon: Bike, screen: 'bikes' },
    { label: 'My Bookings', icon: CalendarCheck, screen: 'bookings' },
    { label: 'Service', icon: Wrench, screen: 'service' },
    { label: 'Notifications', icon: Bell, screen: 'notifications' },
    { label: 'Showroom', icon: MapPin, screen: 'showroom' },
    { label: 'Profile & Settings', icon: Settings, screen: 'profile' },
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

      {/* Slide Drawer Content (Dark Emerald Styling matching Screen 13) */}
      <div 
        style={{
          position: 'relative',
          width: '310px',
          maxWidth: '85vw',
          height: '100%',
          background: 'linear-gradient(180deg, #062817 0%, #03170D 100%)',
          color: '#FFFFFF',
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
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* User Profile Header */}
        <div 
          onClick={() => { navigateTo('profile'); setIsDrawerOpen(false); }}
          style={{
            padding: '40px 24px 24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
              border: '2px solid #062817'
            }} />
          </div>
          <div>
            <h3 style={{ fontSize: '17px', fontWeight: '800', margin: 0, color: '#FFFFFF' }}>
              {user?.full_name || "Shivam Mundhe"}
            </h3>
            <p style={{ fontSize: '13px', color: '#94A3B8', margin: '3px 0 0' }}>
              {user?.mobile_number || "+91 9270441850"}
            </p>
          </div>
        </div>

        {/* Navigation Menu Links */}
        <nav style={{ padding: '20px 14px', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
                    color: '#E2E8F0',
                    fontSize: '15px',
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
                    e.currentTarget.style.color = '#E2E8F0';
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
              marginTop: '24px',
              padding: '14px',
              background: 'rgba(0, 210, 106, 0.08)',
              border: '1px solid rgba(0, 210, 106, 0.2)',
              borderRadius: '14px',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00D26A', fontSize: '12px', fontWeight: '700' }}>
              <Zap size={14} /> NK E-BIKE SHOWROOM
            </div>
            <div style={{ fontSize: '13px', color: '#F1F5F9', marginTop: '4px', fontWeight: '600' }}>
              Akole, Maharashtra
            </div>
            <div style={{ fontSize: '11px', color: '#94A3B8', marginTop: '2px' }}>
              Open 9:00 AM - 8:00 PM
            </div>
          </div>
        </nav>

        {/* Drawer Bottom Actions */}
        <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
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
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};
