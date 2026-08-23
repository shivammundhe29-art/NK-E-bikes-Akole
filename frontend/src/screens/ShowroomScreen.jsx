import React from 'react';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Navigation, PhoneCall, Sparkles, Building } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ShowroomScreen = ({ isMobileView = false }) => {
  const { showroomInfo, navigateTo, showToast } = useApp();

  const handleDirections = () => {
    window.open(showroomInfo?.map_link || 'https://maps.google.com/?q=Akole+Maharashtra+422601', '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${showroomInfo?.phone2 || '+919270441850'}`;
  };

  return (
    <div style={{ width: '100%', minHeight: '100%', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar matching Screen 11 */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: isMobileView ? '14px 18px' : '16px 28px',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #F1F5F9',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}
      >
        <button
          onClick={() => navigateTo('home')}
          aria-label="Back"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px',
            borderRadius: '50%',
            color: '#0F172A'
          }}
        >
          <ArrowLeft size={22} />
        </button>
        <h2 style={{ fontSize: '18px', fontWeight: '800', margin: 0, color: '#0F172A' }}>
          Our Showroom
        </h2>
      </header>

      {/* Screen Content */}
      <div style={{ padding: isMobileView ? '16px' : '24px 32px', flex: 1, paddingBottom: '90px' }}>
        {/* Showroom Visual Banner matching Screen 11 */}
        <div style={{
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          marginBottom: '20px',
          height: '180px',
          background: 'linear-gradient(135deg, #09121E 0%, #062817 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
        }}>
          {/* Glowing Signboard */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.7)',
            padding: '12px 28px',
            borderRadius: '14px',
            border: '1.5px solid #00D26A',
            boxShadow: '0 0 25px rgba(0, 210, 106, 0.4)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
              NK <span style={{ color: '#00D26A' }}>E-BIKE</span>
            </h3>
            <span style={{ fontSize: '10px', color: '#94A3B8', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
              AKOLE SHOWROOM
            </span>
          </div>

          <div style={{
            position: 'absolute',
            bottom: '10px',
            fontSize: '11px',
            color: '#00D26A',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <Building size={14} /> Authorized Sales & Service Hub
          </div>
        </div>

        {/* Showroom Information Card matching Screen 11 */}
        <div style={{
          background: '#F8FAFC',
          borderRadius: '20px',
          padding: '20px',
          border: '1px solid #E2E8F0',
          marginBottom: '24px'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#0F172A', marginBottom: '8px' }}>
            {showroomInfo?.name || "NK E-BIKE, Akole"}
          </h3>

          {/* Address */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
            <MapPin size={18} color="#00D26A" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: '1.4' }}>
              {showroomInfo?.address || "K.G. Road, Nawalewadi"},<br />
              {showroomInfo?.city || "Akole"}, {showroomInfo?.state || "Maharashtra"} - {showroomInfo?.pincode || "422601"}
            </p>
          </div>

          {/* Phone */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Phone size={18} color="#00D26A" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '13px', color: '#334155', fontWeight: '600' }}>
              {showroomInfo?.phone1 || "1234567890"} / {showroomInfo?.phone2 || "+91 9270441850"}
            </div>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Mail size={18} color="#00D26A" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '13px', color: '#334155', fontWeight: '600' }}>
              {showroomInfo?.email || "info@nkebike.com"}
            </div>
          </div>

          {/* Timings */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Clock size={18} color="#00D26A" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '13px', color: '#334155', fontWeight: '600' }}>
              {showroomInfo?.timings || "Mon - Sun : 9:00 AM - 8:00 PM"}
            </div>
          </div>
        </div>

        {/* Action Buttons matching Screen 11 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Get Directions Button */}
          <button
            onClick={handleDirections}
            className="btn-electric"
            style={{ width: '100%', padding: '14px', fontSize: '15px' }}
          >
            <Navigation size={18} /> Get Directions
          </button>

          {/* Call Now Button */}
          <button
            onClick={handleCall}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '30px',
              border: '1.5px solid #00D26A',
              background: '#FFFFFF',
              color: '#00A853',
              fontSize: '15px',
              fontWeight: '800',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <PhoneCall size={18} /> Call Now
          </button>
        </div>
      </div>
    </div>
  );
};
