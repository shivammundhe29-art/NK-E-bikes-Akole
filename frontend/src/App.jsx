import React from 'react';
import { useApp } from './context/AppContext';
import { useAuth } from './context/AuthContext';
import { DrawerMenu } from './components/DrawerMenu';
import { Toast } from './components/Toast';

// Screens
import { SplashScreen } from './screens/SplashScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { AuthScreen } from './screens/AuthScreen';
import { HomeScreen } from './screens/HomeScreen';
import { BikesListScreen } from './screens/BikesListScreen';
import { BikeDetailScreen } from './screens/BikeDetailScreen';
import { TestRideScreen } from './screens/TestRideScreen';
import { ServiceScreen } from './screens/ServiceScreen';
import { BookingsScreen } from './screens/BookingsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { ShowroomScreen } from './screens/ShowroomScreen';
import { NotificationScreen } from './screens/NotificationScreen';
import { PostersScreen } from './screens/PostersScreen';

// Full Web Components
import { Zap, Phone, MapPin, Mail, Clock, Heart, Bell, User, Calendar, Wrench, Shield, Leaf, IndianRupee, Menu, ChevronRight, Sun, Moon, Globe } from 'lucide-react';
import { BikeCard } from './components/BikeCard';
import { BikeIllustration } from './components/BikeIllustrations';

export function App() {
  const { 
    currentScreen, 
    setCurrentScreen,
    viewMode, 
    setViewMode, 
    bikes, 
    selectedBike, 
    selectedBikeColor,
    setSelectedBikeColor,
    navigateTo, 
    wishlist, 
    unreadNotificationsCount,
    showroomInfo,
    setIsDrawerOpen,
    language,
    setLanguage,
    themeMode,
    toggleTheme,
    t
  } = useApp();

  const { user } = useAuth();

  const isLight = themeMode === 'light';

  const mainBg = isLight ? '#F8FAFC' : '#090D14';
  const mainTextColor = isLight ? '#0F172A' : '#F8FAFC';
  const cardBg = isLight ? '#FFFFFF' : '#121824';
  const cardBorder = isLight ? '#E2E8F0' : '#1F293D';
  const mutedTextColor = isLight ? '#64748B' : '#94A3B8';
  const headerBg = isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(9, 13, 20, 0.95)';
  const headerBorder = isLight ? '#E2E8F0' : 'rgba(255, 255, 255, 0.08)';

  // Helper to render the active mobile screen
  const renderCurrentMobileScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'onboarding':
        return <OnboardingScreen />;
      case 'auth':
        return <AuthScreen />;
      case 'home':
        return <HomeScreen isMobileView={true} />;
      case 'bikes':
        return <BikesListScreen isMobileView={true} />;
      case 'bike-detail':
        return <BikeDetailScreen isMobileView={true} />;
      case 'test-ride':
        return <TestRideScreen isMobileView={true} />;
      case 'service':
        return <ServiceScreen isMobileView={true} />;
      case 'bookings':
        return <BookingsScreen isMobileView={true} />;
      case 'profile':
        return <ProfileScreen isMobileView={true} />;
      case 'showroom':
        return <ShowroomScreen isMobileView={true} />;
      case 'notifications':
        return <NotificationScreen isMobileView={true} />;
      default:
        return <HomeScreen isMobileView={true} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: mainBg, color: mainTextColor, display: 'flex', flexDirection: 'column', transition: 'background 0.3s ease, color 0.3s ease' }}>
      {/* Floating Global Toast */}
      <Toast />

      {/* Slide Drawer (Active when opened) */}
      <DrawerMenu />

      {/* FULL WEB SHOWROOM / POSTERS SCREEN */}
      {currentScreen === 'posters' ? (
        <PostersScreen />
      ) : (
        <div className="app-container" style={{ flex: 1, background: mainBg, color: mainTextColor }}>
          {/* Responsive Header */}
          <header className="site-header" style={{ background: headerBg, borderBottom: `1px solid ${headerBorder}` }}>
            {/* Logo + Hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button 
                onClick={() => setIsDrawerOpen(true)} 
                aria-label="Toggle Menu"
                className="mobile-only"
                style={{ 
                  background: isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255, 255, 255, 0.08)', 
                  border: isLight ? '1px solid #CBD5E1' : '1px solid rgba(255, 255, 255, 0.15)', 
                  borderRadius: '10px', 
                  padding: '8px', 
                  color: '#00D26A', 
                  cursor: 'pointer',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Menu size={22} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => navigateTo('home')}>
                <div style={{
                  background: '#00D26A',
                  color: '#000',
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(0,210,106,0.5)',
                  flexShrink: 0
                }}>
                  <Zap size={22} fill="#000" strokeWidth={0} />
                </div>
                <div>
                  <span style={{ fontSize: '20px', fontWeight: '900', letterSpacing: '-0.03em', color: mainTextColor, lineHeight: 1 }}>
                    NK <span style={{ color: '#00D26A' }}>E-BIKE</span>
                  </span>
                  <span style={{ display: 'block', fontSize: '9px', color: '#00D26A', fontWeight: '800', letterSpacing: '1.5px', marginTop: '2px' }}>
                    AKOLE SHOWROOM
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <nav className="desktop-only" style={{ alignItems: 'center', gap: '24px', fontSize: '14px', fontWeight: '700' }}>
              <button 
                onClick={() => navigateTo('posters')} 
                style={{ background: 'none', border: 'none', color: '#00D26A', fontWeight: '800', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                {t('postersGallery')}
              </button>
              <a href="#models" style={{ color: isLight ? '#334155' : '#E2E8F0', textDecoration: 'none', transition: 'color 0.2s' }}>{t('eBikes')}</a>
              <a href="#test-ride" style={{ color: isLight ? '#334155' : '#E2E8F0', textDecoration: 'none', transition: 'color 0.2s' }}>{t('testRide')}</a>
              <a href="#service" style={{ color: isLight ? '#334155' : '#E2E8F0', textDecoration: 'none', transition: 'color 0.2s' }}>{t('serviceCenter')}</a>
              <a href="#showroom" style={{ color: isLight ? '#334155' : '#E2E8F0', textDecoration: 'none', transition: 'color 0.2s' }}>{t('showroomLocation')}</a>
            </nav>

            {/* Header Right Actions: Language Switcher, Theme Switcher & Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Language Selector Dropdown */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                aria-label="Select Language"
                style={{
                  background: isLight ? '#F1F5F9' : 'rgba(255, 255, 255, 0.1)',
                  color: isLight ? '#0F172A' : '#FFFFFF',
                  border: isLight ? '1px solid #CBD5E1' : '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  padding: '6px 10px',
                  fontSize: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <option value="en" style={{ background: '#121824', color: '#FFF' }}>🇬🇧 EN</option>
                <option value="mr" style={{ background: '#121824', color: '#FFF' }}>🇮🇳 मराठी</option>
                <option value="hi" style={{ background: '#121824', color: '#FFF' }}>🇮🇳 हिंदी</option>
              </select>

              {/* Dark / Light Theme Mode Switcher */}
              <button
                onClick={toggleTheme}
                title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
                style={{
                  background: isLight ? '#E2E8F0' : 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isLight ? '#0F172A' : '#FFFFFF',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {isLight ? <Moon size={18} color="#0F172A" /> : <Sun size={18} color="#F59E0B" />}
              </button>

              <a
                href="tel:+917875493982"
                style={{
                  background: 'rgba(0, 210, 106, 0.15)',
                  color: '#00D26A',
                  border: '1px solid rgba(0, 210, 106, 0.4)',
                  borderRadius: '20px',
                  padding: '7px 14px',
                  fontSize: '12px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                📞 <span className="desktop-only">{t('call')}</span>
              </a>

              <a
                href="https://wa.me/917875493982"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(37, 211, 102, 0.15)',
                  color: '#25D366',
                  border: '1px solid rgba(37, 211, 102, 0.4)',
                  borderRadius: '20px',
                  padding: '7px 14px',
                  fontSize: '12px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span className="desktop-only">{t('whatsapp')}</span>
              </a>

              <button 
                onClick={() => {
                  const elem = document.getElementById('test-ride');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-electric desktop-only"
                style={{ padding: '8px 16px', fontSize: '13px' }}
              >
                {t('bookTestRide')}
              </button>
            </div>
          </header>

          {/* Hero Section */}
          <section className="hero-section">
            <div style={{ flex: '1 1 320px', width: '100%' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 210, 106, 0.12)',
                color: '#00D26A',
                padding: '6px 14px',
                borderRadius: '30px',
                fontSize: '12px',
                fontWeight: '800',
                marginBottom: '16px'
              }}>
                <Zap size={14} fill="#00D26A" /> {t('authorizedShowroom')}
              </div>

              <h1 className="hero-title" style={{ color: mainTextColor }}>
                {t('heroTitleLine1')}<br />
                <span style={{ color: '#00D26A' }}>{t('heroTitleLine2')}</span>
              </h1>

              <p className="hero-subtitle" style={{ color: mutedTextColor }}>
                {t('heroSubtitle')}
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#test-ride" className="btn-electric touch-btn" style={{ padding: '12px 22px', fontSize: '14px' }}>
                  <Calendar size={16} /> {t('freeTestRideBtn')}
                </a>
                <button 
                  onClick={() => navigateTo('posters')} 
                  className="btn-outline-electric touch-btn" 
                  style={{ padding: '12px 20px', fontSize: '14px', borderColor: '#00D26A' }}
                >
                  {t('postersBtn')}
                </button>
              </div>

              {/* Stats Bar */}
              <div className="stats-grid" style={{ borderTop: `1px solid ${cardBorder}` }}>
                <div>
                  <div style={{ fontSize: '26px', fontWeight: '900', color: '#00D26A' }}>160 KM</div>
                  <div style={{ fontSize: '11px', color: mutedTextColor, fontWeight: '700' }}>{t('maxRange')}</div>
                </div>
                <div>
                  <div style={{ fontSize: '26px', fontWeight: '900', color: mainTextColor }}>70 KM/H</div>
                  <div style={{ fontSize: '11px', color: mutedTextColor, fontWeight: '700' }}>{t('topSpeed')}</div>
                </div>
                <div>
                  <div style={{ fontSize: '26px', fontWeight: '900', color: '#00D26A' }}>3.5 Hrs</div>
                  <div style={{ fontSize: '11px', color: mutedTextColor, fontWeight: '700' }}>{t('fastCharging')}</div>
                </div>
                <div>
                  <div style={{ fontSize: '26px', fontWeight: '900', color: mainTextColor }}>₹0.15</div>
                  <div style={{ fontSize: '11px', color: mutedTextColor, fontWeight: '700' }}>{t('perKmCost')}</div>
                </div>
              </div>
            </div>

            {/* Hero Graphic Card */}
            <div style={{ flex: '1 1 320px', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                background: isLight ? 'linear-gradient(145deg, #FFFFFF 0%, #E6F8EF 100%)' : 'linear-gradient(145deg, #121824 0%, #062817 100%)',
                borderRadius: '28px',
                padding: '24px 20px',
                width: '100%',
                maxWidth: '480px',
                border: '1px solid rgba(0, 210, 106, 0.3)',
                boxShadow: isLight ? '0 10px 30px rgba(0,210,106,0.15)' : '0 20px 50px rgba(0,0,0,0.5)',
                position: 'relative',
                overflow: 'hidden',
                boxSizing: 'border-box'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '900', color: '#00D26A', letterSpacing: '1px' }}>
                    {t('flagshipModel')}
                  </span>
                  <span style={{ background: '#00D26A', color: '#000', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '900' }}>
                    ₹ 1,09,999
                  </span>
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: '900', margin: '0 0 6px', color: mainTextColor }}>NK Bravo</h3>
                <p style={{ fontSize: '12px', color: mutedTextColor, margin: '0 0 16px' }}>72V 32Ah Lithium • 150 KM Range • 60 KM/H</p>

                <div className="float-animation" style={{ margin: '14px 0' }}>
                  <BikeIllustration model="bravo" color="#00D26A" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginTop: '16px' }}>
                  <div style={{ background: isLight ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.05)', padding: '8px 4px', borderRadius: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '10px', color: mutedTextColor }}>{t('rangeLabel')}</div>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: '#00D26A' }}>150 KM</div>
                  </div>
                  <div style={{ background: isLight ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.05)', padding: '8px 4px', borderRadius: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '10px', color: mutedTextColor }}>{t('speedLabel')}</div>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: mainTextColor }}>60 KM/H</div>
                  </div>
                  <div style={{ background: isLight ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.05)', padding: '8px 4px', borderRadius: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '10px', color: mutedTextColor }}>Battery</div>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: '#00D26A' }}>72V 32Ah</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* E-Bikes Catalog Grid Section */}
          <section id="models" className="responsive-section">
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span style={{ fontSize: '12px', fontWeight: '900', color: '#00D26A', letterSpacing: '2px', textTransform: 'uppercase' }}>
                {t('exploreModels')}
              </span>
              <h2 style={{ fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: '900', color: mainTextColor, margin: '8px 0 12px' }}>
                {t('catalogTitle')}
              </h2>
              <p style={{ fontSize: '14px', color: mutedTextColor, maxWidth: '600px', margin: '0 auto' }}>
                {t('catalogSubtitle')}
              </p>
            </div>

            <div className="bikes-grid">
              {bikes.map(bike => (
                <div 
                  key={bike.id}
                  style={{
                    background: cardBg,
                    borderRadius: '24px',
                    padding: '20px',
                    border: `1px solid ${cardBorder}`,
                    boxShadow: isLight ? '0 4px 20px rgba(0,0,0,0.05)' : '0 8px 24px rgba(0,0,0,0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <div>
                        <h3 style={{ fontSize: '18px', fontWeight: '800', color: mainTextColor, margin: 0 }}>{bike.name}</h3>
                        <span style={{ fontSize: '11px', color: '#00D26A', fontWeight: '700' }}>{bike.battery_spec}</span>
                      </div>
                      <div style={{ fontSize: '17px', fontWeight: '900', color: '#00D26A' }}>
                        ₹ {bike.price.toLocaleString('en-IN')}
                      </div>
                    </div>

                    <div style={{ background: isLight ? '#F1F5F9' : '#090D14', borderRadius: '18px', padding: '12px 0', margin: '12px 0', display: 'flex', justifyContent: 'center' }}>
                      <BikeIllustration model={bike.image_url || 'bravo'} color={bike.color_options ? bike.color_options[0] : '#00D26A'} />
                    </div>

                    {/* Specs Mini Bar */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px', fontSize: '12px' }}>
                      <div style={{ background: isLight ? '#F8FAFC' : 'rgba(255,255,255,0.04)', padding: '8px 10px', borderRadius: '10px' }}>
                        <span style={{ color: mutedTextColor }}>{t('rangeLabel')}</span> <strong style={{ color: mainTextColor }}>{bike.range_km} KM</strong>
                      </div>
                      <div style={{ background: isLight ? '#F8FAFC' : 'rgba(255,255,255,0.04)', padding: '8px 10px', borderRadius: '10px' }}>
                        <span style={{ color: mutedTextColor }}>{t('speedLabel')}</span> <strong style={{ color: mainTextColor }}>{bike.top_speed_kmh} KM/H</strong>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                    <button
                      onClick={() => {
                        const elem = document.getElementById('test-ride');
                        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn-electric touch-btn"
                      style={{ width: '100%', padding: '10px', fontSize: '13px' }}
                    >
                      📅 {t('bookTestRide')}
                    </button>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <a
                        href="tel:+917875493982"
                        className="btn-outline-electric touch-btn"
                        style={{ 
                          padding: '8px', 
                          fontSize: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px'
                        }}
                      >
                        📞 {t('call')}
                      </a>
                      <a
                        href="https://wa.me/917875493982"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-electric touch-btn"
                        style={{ 
                          padding: '8px', 
                          fontSize: '12px',
                          borderColor: '#25D366',
                          color: '#25D366',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px'
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        {t('whatsapp')}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Test Ride & Service Booking Dual Section */}
          <section id="test-ride" className="responsive-section" style={{ background: isLight ? '#F1F5F9' : '#0D131F' }}>
            <div className="booking-dual-grid">
              {/* Test Ride Form Card */}
              <div style={{ background: cardBg, borderRadius: '24px', padding: '24px 18px', border: `1px solid ${cardBorder}`, boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00D26A', marginBottom: '8px' }}>
                  <Zap size={18} />
                  <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '1px' }}>{t('freeExperience')}</span>
                </div>
                <h3 style={{ fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: '900', color: mainTextColor, marginBottom: '6px' }}>
                  {t('testRideTitle')}
                </h3>
                <p style={{ fontSize: '13px', color: mutedTextColor, marginBottom: '16px' }}>
                  {t('testRideSubtitle')}
                </p>

                <div style={{ background: isLight ? '#F8FAFC' : '#090D14', borderRadius: '18px', overflow: 'hidden', padding: '6px', boxSizing: 'border-box' }}>
                  <TestRideScreen isMobileView={false} />
                </div>
              </div>

              {/* Service Appointment Form Card */}
              <div id="service" style={{ background: cardBg, borderRadius: '24px', padding: '24px 18px', border: `1px solid ${cardBorder}`, boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38BDF8', marginBottom: '8px' }}>
                  <Wrench size={18} />
                  <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '1px' }}>{t('expertWorkshop')}</span>
                </div>
                <h3 style={{ fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: '900', color: mainTextColor, marginBottom: '6px' }}>
                  {t('serviceTitle')}
                </h3>
                <p style={{ fontSize: '13px', color: mutedTextColor, marginBottom: '16px' }}>
                  {t('serviceSubtitle')}
                </p>

                <div style={{ background: isLight ? '#F8FAFC' : '#090D14', borderRadius: '18px', overflow: 'hidden', padding: '6px', boxSizing: 'border-box' }}>
                  <ServiceScreen isMobileView={false} />
                </div>
              </div>
            </div>
          </section>

          {/* Akole Showroom Location Section */}
          <section id="showroom" className="responsive-section">
            <div style={{
              background: isLight ? 'linear-gradient(135deg, #FFFFFF 0%, #E6F8EF 100%)' : 'linear-gradient(135deg, #121824 0%, #062817 100%)',
              borderRadius: '28px',
              padding: '28px 20px',
              border: '1px solid rgba(0, 210, 106, 0.3)',
              boxSizing: 'border-box'
            }}>
              <div className="showroom-grid">
                <div>
                  <span style={{ fontSize: '11px', fontWeight: '900', color: '#00D26A', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    {t('visitHub')}
                  </span>
                  <h2 style={{ fontSize: 'clamp(22px, 5vw, 32px)', fontWeight: '900', color: mainTextColor, margin: '6px 0 14px' }}>
                    {t('showroomName')}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: isLight ? '#334155' : '#E2E8F0', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <MapPin size={18} color="#00D26A" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{t('address')}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Phone size={18} color="#00D26A" style={{ flexShrink: 0 }} />
                        <strong style={{ color: mainTextColor }}>{t('contactTitle')}</strong>
                      </div>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', paddingLeft: '28px' }}>
                        <a 
                          href="tel:+917875493982"
                          style={{ color: '#00D26A', textDecoration: 'none', fontWeight: '700', background: 'rgba(0,210,106,0.12)', padding: '6px 12px', borderRadius: '10px', fontSize: '13px' }}
                        >
                          📞 7875493982
                        </a>
                        <a 
                          href="tel:+919975983387"
                          style={{ color: '#00D26A', textDecoration: 'none', fontWeight: '700', background: 'rgba(0,210,106,0.12)', padding: '6px 12px', borderRadius: '10px', fontSize: '13px' }}
                        >
                          📞 9975983387
                        </a>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Mail size={18} color="#00D26A" style={{ flexShrink: 0 }} />
                      <span>info@nkebike.com</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Clock size={18} color="#00D26A" style={{ flexShrink: 0 }} />
                      <span>{t('openDays')}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <button 
                      onClick={() => window.open(showroomInfo?.map_link || 'https://maps.google.com/?q=Agasti+College+Akole+Maharashtra', '_blank')}
                      className="btn-electric touch-btn" 
                      style={{ padding: '10px 18px', fontSize: '13px' }}
                    >
                      {t('googleMaps')}
                    </button>
                    <a 
                      href={`https://wa.me/917875493982?text=${encodeURIComponent('Namaskar Hase Brother\'s! I want to visit NK E-BIKES Showroom near Agasti College, Akole. Please share exact location and timing details.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-electric touch-btn" 
                      style={{ 
                        padding: '10px 16px',
                        borderColor: '#25D366',
                        color: '#25D366',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px'
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      {t('whatsapp')}
                    </a>
                  </div>
                </div>

                {/* Showroom Visual Card */}
                <div style={{
                  background: isLight ? '#FFFFFF' : '#090D14',
                  borderRadius: '20px',
                  padding: '24px 18px',
                  border: isLight ? '1px solid #CBD5E1' : '1px solid rgba(255,255,255,0.1)',
                  textAlign: 'center',
                  boxSizing: 'border-box'
                }}>
                  <div style={{
                    background: 'rgba(0, 210, 106, 0.1)',
                    border: '1.5px solid #00D26A',
                    padding: '12px 18px',
                    borderRadius: '14px',
                    display: 'inline-block',
                    marginBottom: '16px'
                  }}>
                    <h3 style={{ fontSize: '20px', fontWeight: '900', margin: 0, color: mainTextColor }}>
                      NK <span style={{ color: '#00D26A' }}>E-BIKE</span>
                    </h3>
                    <span style={{ fontSize: '10px', color: mutedTextColor, fontWeight: '800', letterSpacing: '1px' }}>
                      {t('salesServiceSpares')}
                    </span>
                  </div>

                  <p style={{ fontSize: '13px', color: mutedTextColor, lineHeight: '1.5', margin: 0 }}>
                    {t('showroomDesc')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer style={{
            background: isLight ? '#E2E8F0' : '#06090E',
            borderTop: `1px solid ${cardBorder}`,
            padding: '30px 16px',
            textAlign: 'center',
            color: mutedTextColor,
            fontSize: '12px',
            boxSizing: 'border-box'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '10px' }}>
              <div style={{ background: '#00D26A', color: '#000', width: '22px', height: '22px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900' }}>
                <Zap size={13} fill="#000" />
              </div>
              <strong style={{ color: mainTextColor, fontSize: '15px' }}>NK E-BIKE AKOLE</strong>
            </div>
            <p style={{ margin: '0 0 10px', lineHeight: '1.5' }}>
              {t('tagline')} • Hase Brother's • Near Agasti College, Akole, Maharashtra - 422601 • Contact: 7875493982 / 9975983387
            </p>
            <p style={{ margin: 0, fontSize: '11px', color: mutedTextColor }}>
              © {new Date().getFullYear()} NK E-BIKE Akole. {t('allRightsReserved')}
            </p>
          </footer>

          {/* Floating Mobile Bottom Action Bar */}
          <div className="mobile-bottom-bar" style={{ background: isLight ? 'rgba(255, 255, 255, 0.96)' : 'rgba(9, 13, 20, 0.96)' }}>
            <a
              href="tel:+917875493982"
              className="touch-btn"
              style={{
                flex: '1',
                background: 'rgba(0, 210, 106, 0.15)',
                color: '#00D26A',
                border: '1px solid rgba(0, 210, 106, 0.4)',
                borderRadius: '12px',
                padding: '10px 8px',
                fontSize: '13px',
                fontWeight: '800',
                textDecoration: 'none',
                gap: '4px'
              }}
            >
              📞 {t('call')}
            </a>

            <a
              href="https://wa.me/917875493982"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-btn"
              style={{
                flex: '1',
                background: 'rgba(37, 211, 102, 0.18)',
                color: '#25D366',
                border: '1px solid rgba(37, 211, 102, 0.4)',
                borderRadius: '12px',
                padding: '10px 8px',
                fontSize: '13px',
                fontWeight: '800',
                textDecoration: 'none',
                gap: '4px'
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t('whatsapp')}
            </a>

            <button
              onClick={() => {
                const elem = document.getElementById('test-ride');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-electric touch-btn"
              style={{
                flex: '1.2',
                padding: '10px 8px',
                fontSize: '12px',
                borderRadius: '12px'
              }}
            >
              ⚡ {t('testRide')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

