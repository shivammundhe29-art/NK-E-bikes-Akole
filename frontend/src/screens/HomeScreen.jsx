import React from 'react';
import { Search, ArrowRight, Zap, Leaf, Shield, Wrench, IndianRupee, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Navbar } from '../components/Navbar';
import { BikeCard } from '../components/BikeCard';
import { BikeIllustration } from '../components/BikeIllustrations';

export const HomeScreen = ({ isMobileView = false }) => {
  const { bikes, navigateTo, searchQuery, setSearchQuery } = useApp();

  const popularBikes = bikes.filter(b => b.is_popular);

  const keyFeatures = [
    { icon: Leaf, title: 'Eco Friendly', desc: '100% Green Energy' },
    { icon: Zap, title: 'Zero Emission', desc: 'Clean Air Mobility' },
    { icon: Wrench, title: 'Low Maintenance', desc: 'Minimal moving parts' },
    { icon: Shield, title: 'Smart & Safe', desc: 'Anti-theft & GPS' },
    { icon: IndianRupee, title: 'Cost Effective', desc: '₹0.15 per km run' },
  ];

  return (
    <div style={{ width: '100%', minHeight: '100%', background: '#F8FAFC' }}>
      {/* Top Navbar */}
      <Navbar isMobileView={isMobileView} />

      <div style={{ padding: isMobileView ? '16px' : '24px 32px' }}>
        {/* Search Bar matching Screen 4 */}
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Search bikes, accessories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') navigateTo('bikes');
            }}
            className="form-input-custom"
            style={{
              paddingLeft: '44px',
              paddingRight: '16px',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #E2E8F0',
              borderRadius: '16px',
              height: '48px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}
          />
          <Search 
            size={20} 
            color="#94A3B8" 
            style={{ position: 'absolute', left: '16px', top: '14px' }} 
          />
        </div>

        {/* Hero Promo Banner Card matching Screen 4 */}
        <div 
          onClick={() => navigateTo('bikes')}
          style={{
            background: 'linear-gradient(135deg, #052E16 0%, #064E3B 50%, #022C22 100%)',
            borderRadius: '24px',
            padding: '20px 22px',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(5, 46, 22, 0.3)',
            marginBottom: '28px',
            border: '1px solid rgba(0, 210, 106, 0.2)'
          }}
        >
          {/* Background Glow */}
          <div style={{
            position: 'absolute',
            right: '-20px',
            top: '-20px',
            width: '180px',
            height: '180px',
            background: 'radial-gradient(circle, rgba(0,210,106,0.35) 0%, rgba(0,210,106,0) 70%)',
            borderRadius: '50%'
          }} />

          {/* Left Text */}
          <div style={{ zIndex: 2, maxWidth: '60%' }}>
            <span style={{ 
              fontSize: '10px', 
              fontWeight: '900', 
              letterSpacing: '1px', 
              color: '#00D26A',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '4px'
            }}>
              NK E-BIKE AKOLE
            </span>

            <h3 style={{ fontSize: '20px', fontWeight: '900', lineHeight: '1.2', margin: '0 0 12px', color: '#FFFFFF' }}>
              Ride Electric<br />Ride Smart
            </h3>

            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              color: '#00D26A', 
              fontSize: '13px', 
              fontWeight: '800' 
            }}>
              Explore Now <ArrowRight size={14} />
            </div>
          </div>

          {/* Right Bike Graphic */}
          <div style={{ width: '130px', zIndex: 2, display: 'flex', justifyContent: 'center' }}>
            <BikeIllustration model="bravo" color="#00D26A" />
          </div>
        </div>

        {/* Popular Models Section */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', margin: 0, color: '#0F172A' }}>
              Popular Models
            </h3>
            <button
              onClick={() => navigateTo('bikes')}
              style={{
                background: 'none',
                border: 'none',
                color: '#00D26A',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              View All
            </button>
          </div>

          {/* Popular Cards Grid / Horizontal view */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobileView ? '1fr 1fr' : 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '14px'
          }}>
            {popularBikes.map(bike => (
              <BikeCard key={bike.id} bike={bike} layout="vertical" />
            ))}
          </div>
        </div>

        {/* Quick Action Test Ride Booking Banner */}
        <div 
          onClick={() => navigateTo('test-ride')}
          style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '18px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            border: '1.5px solid rgba(0, 210, 106, 0.3)',
            marginBottom: '28px',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              background: 'rgba(0, 210, 106, 0.15)',
              color: '#00A853',
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Zap size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: '800', margin: 0, color: '#0F172A' }}>
                Book Free Test Ride
              </h4>
              <p style={{ fontSize: '12px', color: '#64748B', margin: '2px 0 0' }}>
                Experience instant torque at Akole showroom
              </p>
            </div>
          </div>
          <ArrowRight size={18} color="#00D26A" />
        </div>

        {/* Core Value Pillars Footer Bar (matching mockup footer) */}
        <div style={{
          background: '#0B0F17',
          borderRadius: '18px',
          padding: '16px',
          color: '#FFFFFF'
        }}>
          <div style={{ 
            fontSize: '11px', 
            fontWeight: '800', 
            letterSpacing: '1px', 
            color: '#00D26A', 
            textAlign: 'center',
            marginBottom: '12px',
            textTransform: 'uppercase'
          }}>
            Why Choose NK E-BIKE?
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '10px'
          }}>
            {keyFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '8px 10px',
                  borderRadius: '10px'
                }}>
                  <Icon size={16} color="#00D26A" />
                  <span style={{ fontSize: '11px', fontWeight: '700', color: '#E2E8F0' }}>
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
