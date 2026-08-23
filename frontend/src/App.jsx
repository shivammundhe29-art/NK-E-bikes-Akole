import React from 'react';
import { useApp } from './context/AppContext';
import { useAuth } from './context/AuthContext';
import { ModeSwitcher } from './components/ModeSwitcher';
import { MobileFrame } from './components/MobileFrame';
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
      {/* Top Demo Bar / Mode Switcher */}
      <ModeSwitcher />

      {/* Floating Global Toast */}
      <Toast />

      {/* Slide Drawer (Active when opened) */}
      <DrawerMenu />

      {/* VIEW MODE 1: 13 SCREENS SHOWCASE GRID (Direct Match with Client Demo Screenshot) */}
      {viewMode === 'all_screens' && (
        <div style={{ padding: '30px 20px', background: '#090D14', flex: 1 }}>
          {/* Header Banner matching Screenshot Top Banner */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#00D26A', fontWeight: '900', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
              <Zap size={18} fill="#00D26A" /> RIDE ELECTRIC. RIDE SMART.
            </div>
            <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#FFFFFF', letterSpacing: '-0.03em', margin: '0 0 10px' }}>
              NK E-BIKE APP – DEMO SCREENS
            </h1>
            <p style={{ fontSize: '14px', color: '#94A3B8', fontWeight: '600' }}>
              Modern • Clean • Electric • Smart • Akole Showroom Hub
            </p>
          </div>

          {/* Row 1: Screens 1 to 6 */}
          <div style={{ 
            display: 'flex', 
            gap: '24px', 
            overflowX: 'auto', 
            paddingBottom: '24px', 
            marginBottom: '36px',
            justifyContent: 'flex-start'
          }}>
            {/* Screen 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '310px', height: '620px', borderRadius: '34px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.5)', border: '6px solid #1E293B' }}>
                <SplashScreen isStandalone={true} />
              </div>
              <span className="badge-status" style={{ background: 'rgba(0, 210, 106, 0.15)', color: '#00D26A', padding: '6px 14px', fontSize: '12px' }}>
                1. Splash Screen
              </span>
            </div>

            {/* Screen 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '310px', height: '620px', borderRadius: '34px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.5)', border: '6px solid #1E293B', background: '#FFF' }}>
                <OnboardingScreen />
              </div>
              <span className="badge-status" style={{ background: 'rgba(0, 210, 106, 0.15)', color: '#00D26A', padding: '6px 14px', fontSize: '12px' }}>
                2. Onboarding Screen
              </span>
            </div>

            {/* Screen 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '310px', height: '620px', borderRadius: '34px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.5)', border: '6px solid #1E293B', background: '#FFF', overflowY: 'auto' }}>
                <AuthScreen />
              </div>
              <span className="badge-status" style={{ background: 'rgba(0, 210, 106, 0.15)', color: '#00D26A', padding: '6px 14px', fontSize: '12px' }}>
                3. Login / Register Screen
              </span>
            </div>

            {/* Screen 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '310px', height: '620px', borderRadius: '34px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.5)', border: '6px solid #1E293B', background: '#F8FAFC', overflowY: 'auto' }}>
                <HomeScreen isMobileView={true} />
              </div>
              <span className="badge-status" style={{ background: 'rgba(0, 210, 106, 0.15)', color: '#00D26A', padding: '6px 14px', fontSize: '12px' }}>
                4. Home Screen
              </span>
            </div>

            {/* Screen 5 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '310px', height: '620px', borderRadius: '34px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.5)', border: '6px solid #1E293B', background: '#F8FAFC', overflowY: 'auto' }}>
                <BikesListScreen isMobileView={true} />
              </div>
              <span className="badge-status" style={{ background: 'rgba(0, 210, 106, 0.15)', color: '#00D26A', padding: '6px 14px', fontSize: '12px' }}>
                5. Bikes List Screen
              </span>
            </div>

            {/* Screen 6 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '310px', height: '620px', borderRadius: '34px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.5)', border: '6px solid #1E293B', background: '#FFF', overflowY: 'auto' }}>
                <BikeDetailScreen isMobileView={true} />
              </div>
              <span className="badge-status" style={{ background: 'rgba(0, 210, 106, 0.15)', color: '#00D26A', padding: '6px 14px', fontSize: '12px' }}>
                6. Bike Details Screen
              </span>
            </div>
          </div>

          {/* Row 2: Screens 7 to 13 */}
          <div style={{ 
            display: 'flex', 
            gap: '24px', 
            overflowX: 'auto', 
            paddingBottom: '24px',
            justifyContent: 'flex-start'
          }}>
            {/* Screen 7 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '310px', height: '620px', borderRadius: '34px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.5)', border: '6px solid #1E293B', background: '#FFF', overflowY: 'auto' }}>
                <TestRideScreen isMobileView={true} />
              </div>
              <span className="badge-status" style={{ background: 'rgba(0, 210, 106, 0.15)', color: '#00D26A', padding: '6px 14px', fontSize: '12px' }}>
                7. Test Ride Booking
              </span>
            </div>

            {/* Screen 8 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '310px', height: '620px', borderRadius: '34px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.5)', border: '6px solid #1E293B', background: '#FFF', overflowY: 'auto' }}>
                <ServiceScreen isMobileView={true} />
              </div>
              <span className="badge-status" style={{ background: 'rgba(0, 210, 106, 0.15)', color: '#00D26A', padding: '6px 14px', fontSize: '12px' }}>
                8. Service Booking
              </span>
            </div>

            {/* Screen 9 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '310px', height: '620px', borderRadius: '34px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.5)', border: '6px solid #1E293B', background: '#F8FAFC', overflowY: 'auto' }}>
                <BookingsScreen isMobileView={true} />
              </div>
              <span className="badge-status" style={{ background: 'rgba(0, 210, 106, 0.15)', color: '#00D26A', padding: '6px 14px', fontSize: '12px' }}>
                9. My Bookings Screen
              </span>
            </div>

            {/* Screen 10 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '310px', height: '620px', borderRadius: '34px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.5)', border: '6px solid #1E293B', background: '#F8FAFC', overflowY: 'auto' }}>
                <ProfileScreen isMobileView={true} />
              </div>
              <span className="badge-status" style={{ background: 'rgba(0, 210, 106, 0.15)', color: '#00D26A', padding: '6px 14px', fontSize: '12px' }}>
                10. Profile Screen
              </span>
            </div>

            {/* Screen 11 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '310px', height: '620px', borderRadius: '34px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.5)', border: '6px solid #1E293B', background: '#FFF', overflowY: 'auto' }}>
                <ShowroomScreen isMobileView={true} />
              </div>
              <span className="badge-status" style={{ background: 'rgba(0, 210, 106, 0.15)', color: '#00D26A', padding: '6px 14px', fontSize: '12px' }}>
                11. Showroom / Contact
              </span>
            </div>

            {/* Screen 12 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '310px', height: '620px', borderRadius: '34px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.5)', border: '6px solid #1E293B', background: '#FFF', overflowY: 'auto' }}>
                <NotificationScreen isMobileView={true} />
              </div>
              <span className="badge-status" style={{ background: 'rgba(0, 210, 106, 0.15)', color: '#00D26A', padding: '6px 14px', fontSize: '12px' }}>
                12. Notifications Screen
              </span>
            </div>

            {/* Screen 13 (Drawer preview) */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '310px', height: '620px', borderRadius: '34px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.5)', border: '6px solid #1E293B', background: '#062817', overflowY: 'auto' }}>
                <div style={{ padding: '30px 20px', color: '#FFF' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                    <img 
                      src={user?.avatar_url || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"} 
                      alt="Shivam" 
                      style={{ width: '52px', height: '52px', borderRadius: '50%', border: '2.5px solid #00D26A' }}
                    />
                    <div>
                      <h4 style={{ margin: 0, fontWeight: '800' }}>Shivam Mundhe</h4>
                      <p style={{ margin: 0, fontSize: '12px', color: '#94A3B8' }}>+91 9270441850</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', fontWeight: '600' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#00D26A' }}><Zap size={18} /> Home</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Zap size={18} /> Bikes</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Calendar size={18} /> My Bookings</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Wrench size={18} /> Service</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Bell size={18} /> Notifications</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={18} /> Showroom</div>
                  </div>
                </div>
              </div>
              <span className="badge-status" style={{ background: 'rgba(0, 210, 106, 0.15)', color: '#00D26A', padding: '6px 14px', fontSize: '12px' }}>
                13. Drawer / Menu Screen
              </span>
            </div>
          </div>

          {/* Bottom Bar matching Demo footer */}
          <div style={{
            marginTop: '30px',
            padding: '16px 24px',
            background: '#0F172A',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            color: '#94A3B8',
            fontSize: '13px',
            fontWeight: '700'
          }}>
            <span style={{ color: '#00D26A' }}>🌱 Eco Friendly</span>
            <span style={{ color: '#00D26A' }}>⚡ Zero Emission</span>
            <span style={{ color: '#00D26A' }}>🔧 Low Maintenance</span>
            <span style={{ color: '#00D26A' }}>🛡️ Smart & Safe</span>
            <span style={{ color: '#00D26A' }}>💰 Cost Effective</span>
            <span style={{ color: '#FFFFFF', fontWeight: '900' }}>RIDE ELECTRIC. RIDE SMART.</span>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: INTERACTIVE MOBILE SIMULATOR */}
      {viewMode === 'mobile' && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 10px' }}>
          {/* Quick Screen Nav Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            maxWidth: '1000px',
            width: '100%',
            padding: '10px 16px',
            marginBottom: '20px',
            background: '#121824',
            borderRadius: '30px',
            border: '1px solid #1F293D'
          }}>
            {screenNavPills.map(p => (
              <button
                key={p.id}
                onClick={() => setCurrentScreen(p.id)}
                style={{
                  background: currentScreen === p.id ? '#00D26A' : 'transparent',
                  color: currentScreen === p.id ? '#000' : '#94A3B8',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: '700',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Centered Phone Frame */}
          <div className="phone-simulator-wrapper">
            <MobileFrame>
              {renderCurrentMobileScreen()}
            </MobileFrame>
          </div>
        </div>
      )}

      {/* VIEW MODE 3: FULL EXPANSIVE WEB DESKTOP SHOWROOM */}
      {viewMode === 'web' && (
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
              <a href="#models" style={{ color: '#E2E8F0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#00D26A'} onMouseLeave={e => e.target.style.color = '#E2E8F0'}>E-Bikes</a>
              <a href="#test-ride" style={{ color: '#E2E8F0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#00D26A'} onMouseLeave={e => e.target.style.color = '#E2E8F0'}>Test Ride</a>
              <a href="#service" style={{ color: '#E2E8F0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#00D26A'} onMouseLeave={e => e.target.style.color = '#E2E8F0'}>Service Center</a>
              <a href="#showroom" style={{ color: '#E2E8F0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#00D26A'} onMouseLeave={e => e.target.style.color = '#E2E8F0'}>Showroom Location</a>
            </nav>

            {/* Header Right Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button 
                onClick={() => setViewMode('mobile')}
                style={{
                  background: 'rgba(0, 210, 106, 0.1)',
                  color: '#00D26A',
                  border: '1px solid rgba(0, 210, 106, 0.3)',
                  borderRadius: '20px',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                📱 Mobile App Simulator
              </button>

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
                <a href="#models" className="btn-outline-electric" style={{ padding: '14px 28px', fontSize: '15px' }}>
                  Explore Models (4)
                </a>
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

                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <button
                      onClick={() => {
                        navigateTo('test-ride', bike);
                        setViewMode('mobile');
                      }}
                      className="btn-electric"
                      style={{ flex: 1, padding: '10px', fontSize: '13px' }}
                    >
                      Book Test Ride
                    </button>
                    <button
                      onClick={() => {
                        navigateTo('bike-detail', bike);
                        setViewMode('mobile');
                      }}
                      className="btn-outline-electric"
                      style={{ padding: '10px 14px', fontSize: '13px' }}
                    >
                      Specs
                    </button>
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
                  NK E-BIKE Showroom, Akole
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: '#E2E8F0', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <MapPin size={20} color="#00D26A" />
                    <span>K.G. Road, Nawalewadi, Akole, Maharashtra - 422601</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Phone size={20} color="#00D26A" />
                    <span>+91 9270441850 / 1234567890</span>
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

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => window.open(showroomInfo?.map_link || 'https://maps.google.com/?q=Akole+Maharashtra+422601', '_blank')}
                    className="btn-electric" 
                    style={{ padding: '12px 24px' }}
                  >
                    Open Google Maps
                  </button>
                  <a 
                    href="tel:+919270441850" 
                    className="btn-outline-electric" 
                    style={{ padding: '12px 24px' }}
                  >
                    Call Showroom
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
              RIDE ELECTRIC. RIDE SMART. • K.G. Road, Nawalewadi, Akole, Maharashtra - 422601
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
