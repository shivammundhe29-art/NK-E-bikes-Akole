import React from 'react';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Navigation, PhoneCall, Sparkles, Building } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ShowroomScreen = ({ isMobileView = false }) => {
  const { showroomInfo, navigateTo, showToast } = useApp();

  const handleDirections = () => {
    window.open(showroomInfo?.map_link || 'https://maps.google.com/?q=Akole+Maharashtra+422601', '_blank');
  };

  const handleCall = () => {
    const number = showroomInfo?.phone2?.replace(/\D/g, '') || '919270441850';
    window.open(`https://wa.me/${number}`, '_blank');
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

        {/* Showroom Information Card */}
        <div style={{
          background: '#F8FAFC',
          borderRadius: '20px',
          padding: '20px',
          border: '1px solid #E2E8F0',
          marginBottom: '24px'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#0F172A', marginBottom: '8px' }}>
            NK E-BIKES (Hase Brother's)
          </h3>

          {/* Address */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
            <MapPin size={18} color="#00D26A" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: '1.4' }}>
              Near Agasti College, Akole,<br />
              Maharashtra - 422601
            </p>
          </div>

          {/* Phone */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
            <Phone size={18} color="#00D26A" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600' }}>Hase Brother's Contact:</div>
              <div style={{ fontSize: '14px', color: '#0F172A', fontWeight: '800' }}>
                7875493982 / 9975983387
              </div>
            </div>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Mail size={18} color="#00D26A" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '13px', color: '#334155', fontWeight: '600' }}>
              info@nkebike.com
            </div>
          </div>

          {/* Timings */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Clock size={18} color="#00D26A" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '13px', color: '#334155', fontWeight: '600' }}>
              Mon - Sun : 9:00 AM - 8:00 PM
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Get Directions Button */}
          <button
            onClick={handleDirections}
            className="btn-electric"
            style={{ width: '100%', padding: '14px', fontSize: '15px' }}
          >
            <Navigation size={18} /> Get Directions
          </button>

          {/* Direct Call Options */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <a
              href="tel:+917875493982"
              style={{
                padding: '12px',
                borderRadius: '30px',
                border: '1.5px solid #00D26A',
                background: '#FFFFFF',
                color: '#00A853',
                fontSize: '13px',
                fontWeight: '800',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              📞 Call 7875493982
            </a>
            <a
              href="tel:+919975983387"
              style={{
                padding: '12px',
                borderRadius: '30px',
                border: '1.5px solid #00D26A',
                background: '#FFFFFF',
                color: '#00A853',
                fontSize: '13px',
                fontWeight: '800',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              📞 Call 9975983387
            </a>
          </div>

          {/* Direct WhatsApp Options */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <a
              href="https://wa.me/917875493982"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px',
                borderRadius: '30px',
                border: '1.5px solid #25D366',
                background: 'rgba(37, 211, 102, 0.1)',
                color: '#25D366',
                fontSize: '13px',
                fontWeight: '800',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              💬 WhatsApp 1
            </a>
            <a
              href="https://wa.me/919975983387"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px',
                borderRadius: '30px',
                border: '1.5px solid #25D366',
                background: 'rgba(37, 211, 102, 0.1)',
                color: '#25D366',
                fontSize: '13px',
                fontWeight: '800',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              💬 WhatsApp 2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
