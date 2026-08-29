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
import { Zap, Phone, MapPin, Mail, Clock, Heart, Bell, User, Calendar, Wrench, Shield, Leaf, IndianRupee, Menu, ChevronRight } from 'lucide-react';
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
    setIsDrawerOpen
  } = useApp();

  const { user } = useAuth();

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

  const screenNavPills = [
    { id: 'splash', label: '1. Splash' },
    { id: 'onboarding', label: '2. Onboarding' },
    { id: 'auth', label: '3. Auth' },
    { id: 'home', label: '4. Home' },
    { id: 'bikes', label: '5. Bikes List' },
    { id: 'bike-detail', label: '6. Bike Details' },
    { id: 'test-ride', label: '7. Test Ride' },
    { id: 'service', label: '8. Service' },
    { id: 'bookings', label: '9. Bookings' },
    { id: 'profile', label: '10. Profile' },
    { id: 'showroom', label: '11. Showroom' },
    { id: 'notifications', label: '12. Notifications' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#090D14', color: '#F8FAFC', display: 'flex', flexDirection: 'column' }}>
      {/* Floating Global Toast */}
      <Toast />

      {/* Slide Drawer (Active when opened) */}
      <DrawerMenu />

      {/* FULL WEB DESKTOP SHOWROOM / POSTERS SCREEN */}
      {currentScreen === 'posters' ? (
        <PostersScreen />
      ) : (
        <div style={{ flex: 1, background: '#090D14', color: '#F8FAFC' }}>
          {/* Full Web Desktop Navigation Header */}
          <header style={{
            background: 'rgba(9, 13, 20, 0.95)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            padding: '16px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            {/* Logo */}
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
                boxShadow: '0 0 15px rgba(0,210,106,0.5)'
              }}>
                <Zap size={22} fill="#000" strokeWidth={0} />
              </div>
              <div>
                <span style={{ fontSize: '22px', fontWeight: '900', letterSpacing: '-0.03em', color: '#FFFFFF' }}>
                  NK <span style={{ color: '#00D26A' }}>E-BIKE</span>
                </span>
                <span style={{ display: 'block', fontSize: '10px', color: '#00D26A', fontWeight: '800', letterSpacing: '1.5px' }}>
                  AKOLE SHOWROOM
                </span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '28px', fontSize: '14px', fontWeight: '700' }}>
              <button 
                onClick={() => navigateTo('posters')} 
                style={{ background: 'none', border: 'none', color: '#00D26A', fontWeight: '800', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                🖼️ Official Posters
              </button>
              <a href="#models" style={{ color: '#E2E8F0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#00D26A'} onMouseLeave={e => e.target.style.color = '#E2E8F0'}>E-Bikes</a>
              <a href="#test-ride" style={{ color: '#E2E8F0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#00D26A'} onMouseLeave={e => e.target.style.color = '#E2E8F0'}>Test Ride</a>
              <a href="#service" style={{ color: '#E2E8F0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#00D26A'} onMouseLeave={e => e.target.style.color = '#E2E8F0'}>Service Center</a>
              <a href="#showroom" style={{ color: '#E2E8F0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#00D26A'} onMouseLeave={e => e.target.style.color = '#E2E8F0'}>Showroom Location</a>
            </nav>

            {/* Header Right Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a
                href="tel:+917875493982"
                style={{
                  background: 'rgba(0, 210, 106, 0.15)',
                  color: '#00D26A',
                  border: '1px solid rgba(0, 210, 106, 0.4)',
                  borderRadius: '20px',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                📞 Call
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
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>

              <button 
                onClick={() => {
                  const elem = document.getElementById('test-ride');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-electric"
                style={{ padding: '10px 20px', fontSize: '13px' }}
              >
                Book Test Ride
              </button>
            </div>
          </header>

          {/* Desktop Hero Section */}
          <section style={{
            padding: '80px 40px 60px',
            background: 'radial-gradient(circle at 65% 40%, rgba(0, 210, 106, 0.15) 0%, rgba(9, 13, 20, 0) 65%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1280px',
            margin: '0 auto',
            flexWrap: 'wrap',
            gap: '40px'
          }}>
            <div style={{ flex: '1 1 500px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 210, 106, 0.12)',
                color: '#00D26A',
                padding: '8px 16px',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: '800',
                marginBottom: '20px'
              }}>
                <Zap size={16} fill="#00D26A" /> AUTHORIZED E-BIKE SHOWROOM • AKOLE
              </div>

              <h1 style={{ fontSize: '54px', fontWeight: '900', lineHeight: '1.1', letterSpacing: '-0.03em', margin: '0 0 20px' }}>
                Ride Electric.<br />
                <span style={{ color: '#00D26A' }}>Ride Smart.</span>
              </h1>

              <p style={{ fontSize: '18px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '32px', maxWidth: '520px' }}>
                Switch to next-generation high-speed electric scooters with up to 160 KM range, instant torque, and ₹0.15/km running cost in Akole, Maharashtra.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#test-ride" className="btn-electric" style={{ padding: '14px 28px', fontSize: '15px' }}>
                  <Calendar size={18} /> Book Free Test Ride
                </a>
                <button 
                  onClick={() => navigateTo('posters')} 
                  className="btn-outline-electric" 
                  style={{ padding: '14px 28px', fontSize: '15px', borderColor: '#00D26A' }}
                >
                  🖼️ View Official Posters Gallery
                </button>
              </div>

              {/* Stats Bar */}
              <div style={{ display: 'flex', gap: '32px', marginTop: '48px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '28px' }}>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: '900', color: '#00D26A' }}>160 KM</div>
                  <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600' }}>Max Range</div>
                </div>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: '900', color: '#FFFFFF' }}>70 KM/H</div>
                  <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600' }}>Top Speed</div>
                </div>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: '900', color: '#00D26A' }}>3.5 Hrs</div>
                  <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600' }}>Fast Charging</div>
                </div>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: '900', color: '#FFFFFF' }}>₹0.15</div>
                  <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600' }}>Per KM Cost</div>
                </div>
              </div>
            </div>

            {/* Hero Graphic Card */}
            <div style={{ flex: '1 1 480px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{
                background: 'linear-gradient(145deg, #121824 0%, #062817 100%)',
                borderRadius: '36px',
                padding: '40px',
                width: '100%',
                maxWidth: '480px',
                border: '1px solid rgba(0, 210, 106, 0.3)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '900', color: '#00D26A', letterSpacing: '1px' }}>
                    FLAGSHIP MODEL
                  </span>
                  <span style={{ background: '#00D26A', color: '#000', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '900' }}>
                    ₹ 1,09,999
                  </span>
                </div>

                <h3 style={{ fontSize: '28px', fontWeight: '900', margin: '0 0 10px', color: '#FFF' }}>NK Bravo</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', margin: '0 0 20px' }}>72V 32Ah Lithium • 150 KM Range • 60 KM/H</p>

                <div className="float-animation" style={{ margin: '20px 0' }}>
                  <BikeIllustration model="bravo" color="#00D26A" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '20px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#94A3B8' }}>Range</div>
                    <div style={{ fontSize: '14px', fontWeight: '800', color: '#00D26A' }}>150 KM</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#94A3B8' }}>Top Speed</div>
                    <div style={{ fontSize: '14px', fontWeight: '800', color: '#FFF' }}>60 KM/H</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#94A3B8' }}>Battery</div>
                    <div style={{ fontSize: '14px', fontWeight: '800', color: '#00D26A' }}>72V 32Ah</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* E-Bikes Catalog Grid Section */}
          <section id="models" style={{ padding: '80px 40px', maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span style={{ fontSize: '12px', fontWeight: '900', color: '#00D26A', letterSpacing: '2px', textTransform: 'uppercase' }}>
                EXPLORE ALL MODELS
              </span>
              <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#FFFFFF', margin: '8px 0 12px' }}>
                Electric Scooters Built For Akole Roads
              </h2>
              <p style={{ fontSize: '15px', color: '#94A3B8', maxWidth: '600px', margin: '0 auto' }}>
                Engineered with high torque BLDC motors, smart lithium batteries, and rugged suspension for all terrain comfort.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
              {bikes.map(bike => (
                <div 
                  key={bike.id}
                  style={{
                    background: '#121824',
                    borderRadius: '24px',
                    padding: '24px',
                    border: '1px solid #1F293D',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#00D26A';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#1F293D';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                      <div>
                        <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#FFF', margin: 0 }}>{bike.name}</h3>
                        <span style={{ fontSize: '11px', color: '#00D26A', fontWeight: '700' }}>{bike.battery_spec}</span>
                      </div>
                      <div style={{ fontSize: '18px', fontWeight: '900', color: '#00D26A' }}>
                        ₹ {bike.price.toLocaleString('en-IN')}
                      </div>
                    </div>

                    <div style={{ background: '#090D14', borderRadius: '18px', padding: '16px 0', margin: '16px 0', display: 'flex', justifyContent: 'center' }}>
                      <BikeIllustration model={bike.image_url || 'bravo'} color={bike.color_options ? bike.color_options[0] : '#00D26A'} />
                    </div>

                    {/* Specs Mini Bar */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '18px', fontSize: '12px' }}>
                      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '8px 12px', borderRadius: '10px' }}>
                        <span style={{ color: '#64748B' }}>Range:</span> <strong style={{ color: '#FFF' }}>{bike.range_km} KM</strong>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '8px 12px', borderRadius: '10px' }}>
                        <span style={{ color: '#64748B' }}>Speed:</span> <strong style={{ color: '#FFF' }}>{bike.top_speed_kmh} KM/H</strong>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '14px' }}>
                    <button
                      onClick={() => {
                        const elem = document.getElementById('test-ride');
                        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn-electric"
                      style={{ width: '100%', padding: '10px', fontSize: '13px' }}
                    >
                      📅 Book Test Ride
                    </button>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <a
                        href="tel:+917875493982"
                        className="btn-outline-electric"
                        style={{ 
                          padding: '8px', 
                          fontSize: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px'
                        }}
                      >
                        📞 Call
                      </a>
                      <a
                        href="https://wa.me/917875493982"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-electric"
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
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Test Ride & Service Booking Dual Section */}
          <section id="test-ride" style={{ padding: '60px 40px 80px', background: '#0D131F' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
              {/* Test Ride Form Card */}
              <div style={{ background: '#121824', borderRadius: '28px', padding: '32px', border: '1px solid #1F293D' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#00D26A', marginBottom: '8px' }}>
                  <Zap size={20} />
                  <span style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '1px' }}>FREE EXPERIENCE</span>
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#FFF', marginBottom: '8px' }}>
                  Book A Test Ride In Akole
                </h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px' }}>
                  Take any model for a 15-minute test ride at our Nawalewadi Road showroom.
                </p>

                <div style={{ background: '#090D14', borderRadius: '20px', overflow: 'hidden', padding: '10px' }}>
                  <TestRideScreen isMobileView={false} />
                </div>
              </div>

              {/* Service Appointment Form Card */}
              <div id="service" style={{ background: '#121824', borderRadius: '28px', padding: '32px', border: '1px solid #1F293D' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#38BDF8', marginBottom: '8px' }}>
                  <Wrench size={20} />
                  <span style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '1px' }}>EXPERT WORKSHOP</span>
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#FFF', marginBottom: '8px' }}>
                  Book Maintenance & Service
                </h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px' }}>
                  Genuine spare parts, battery health diagnostic, and certified technicians.
                </p>

                <div style={{ background: '#090D14', borderRadius: '20px', overflow: 'hidden', padding: '10px' }}>
                  <ServiceScreen isMobileView={false} />
                </div>
              </div>
            </div>
          </section>

          {/* Akole Showroom Location Section */}
          <section id="showroom" style={{ padding: '80px 40px', maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{
              background: 'linear-gradient(135deg, #121824 0%, #062817 100%)',
              borderRadius: '32px',
              padding: '40px',
              border: '1px solid rgba(0, 210, 106, 0.3)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              alignItems: 'center'
            }}>
              <div>
                <span style={{ fontSize: '12px', fontWeight: '900', color: '#00D26A', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  VISIT OUR HUB
                </span>
                <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#FFFFFF', margin: '8px 0 16px' }}>
                  NK E-BIKES (Hase Brother's)
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: '#E2E8F0', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <MapPin size={20} color="#00D26A" />
                    <span>Near Agasti College, Akole, Maharashtra - 422601</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Phone size={20} color="#00D26A" />
                      <strong style={{ color: '#FFF' }}>Contact (Hase Brother's):</strong>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingLeft: '32px' }}>
                      <a 
                        href="tel:+917875493982"
                        style={{ color: '#00D26A', textDecoration: 'none', fontWeight: '700', background: 'rgba(0,210,106,0.1)', padding: '4px 10px', borderRadius: '10px' }}
                      >
                        📞 7875493982
                      </a>
                      <a 
                        href="tel:+919975983387"
                        style={{ color: '#00D26A', textDecoration: 'none', fontWeight: '700', background: 'rgba(0,210,106,0.1)', padding: '4px 10px', borderRadius: '10px' }}
                      >
                        📞 9975983387
                      </a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Mail size={20} color="#00D26A" />
                    <span>info@nkebike.com</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Clock size={20} color="#00D26A" />
                    <span>Open All 7 Days: 9:00 AM - 8:00 PM</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => window.open(showroomInfo?.map_link || 'https://maps.google.com/?q=Agasti+College+Akole+Maharashtra', '_blank')}
                    className="btn-electric" 
                    style={{ padding: '12px 20px', fontSize: '13px' }}
                  >
                    📍 Open Google Maps
                  </button>
                  <a 
                    href={`https://wa.me/917875493982?text=${encodeURIComponent('Namaskar Hase Brother\'s! I want to visit NK E-BIKES Showroom near Agasti College, Akole. Please share exact location and timing details.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-electric" 
                    style={{ 
                      padding: '12px 18px',
                      borderColor: '#25D366',
                      color: '#25D366',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Visit Shop Inquiry (7875493982)
                  </a>
                  <a 
                    href={`https://wa.me/919975983387?text=${encodeURIComponent('Namaskar Hase Brother\'s! I want to visit NK E-BIKES Showroom near Agasti College, Akole. Please share exact location and timing details.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-electric" 
                    style={{ 
                      padding: '12px 18px',
                      borderColor: '#25D366',
                      color: '#25D366',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Visit Shop Inquiry (9975983387)
                  </a>
                </div>
              </div>

              {/* Showroom Visual Card */}
              <div style={{
                background: '#090D14',
                borderRadius: '24px',
                padding: '30px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <div style={{
                  background: 'rgba(0, 210, 106, 0.1)',
                  border: '1.5px solid #00D26A',
                  padding: '16px 24px',
                  borderRadius: '16px',
                  display: 'inline-block',
                  marginBottom: '20px'
                }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '900', margin: 0, color: '#FFF' }}>
                    NK <span style={{ color: '#00D26A' }}>E-BIKE</span>
                  </h3>
                  <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '800', letterSpacing: '1px' }}>
                    SALES • SERVICE • SPARES
                  </span>
                </div>

                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.5' }}>
                  Complete showroom and service support with live test drives, instant financing options, and exchange bonus for old petrol scooters.
                </p>
              </div>
            </div>
          </section>

          {/* Desktop Footer */}
          <footer style={{
            background: '#06090E',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '40px',
            textAlign: 'center',
            color: '#64748B',
            fontSize: '13px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ background: '#00D26A', color: '#000', width: '24px', height: '24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900' }}>
                <Zap size={14} fill="#000" />
              </div>
              <strong style={{ color: '#FFF', fontSize: '16px' }}>NK E-BIKE AKOLE</strong>
            </div>
            <p style={{ margin: '0 0 14px' }}>
              RIDE ELECTRIC. RIDE SMART. • Hase Brother's • Near Agasti College, Akole, Maharashtra - 422601 • Contact: 7875493982 / 9975983387
            </p>
            <p style={{ margin: 0, fontSize: '12px' }}>
              © {new Date().getFullYear()} NK E-BIKE. Powered by React + FastAPI + PostgreSQL. Built for GitHub Deployment.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}
