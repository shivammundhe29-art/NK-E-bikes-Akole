import React, { useState } from 'react';
import { 
  ArrowLeft, Heart, Zap, Gauge, BatteryCharging, Shield, CheckCircle2, 
  PhoneCall, Calendar, Sparkles, Clock, Layers 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BikeIllustration } from '../components/BikeIllustrations';

export const BikeDetailScreen = ({ isMobileView = false }) => {
  const { 
    selectedBike, 
    navigateTo, 
    wishlist, 
    toggleWishlist, 
    selectedBikeColor, 
    setSelectedBikeColor,
    showToast 
  } = useApp();

  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [enquiryName, setEnquiryName] = useState('');
  const [enquiryMobile, setEnquiryMobile] = useState('');

  if (!selectedBike) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <p>No bike selected</p>
        <button onClick={() => navigateTo('bikes')} className="btn-electric">Go to Catalog</button>
      </div>
    );
  }

  const isSaved = wishlist.includes(selectedBike.id);
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(selectedBike.price);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if (!enquiryMobile.trim()) {
      showToast('Please enter your mobile number', 'error');
      return;
    }
    showToast(`Thank you! Our Akole showroom team will contact you shortly regarding ${selectedBike.name}.`, 'success');
    setShowEnquiryModal(false);
    setEnquiryName('');
    setEnquiryMobile('');
  };

  return (
    <div style={{ width: '100%', minHeight: '100%', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar matching Screen 6 */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobileView ? '14px 18px' : '16px 28px',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #F1F5F9',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => navigateTo('bikes')}
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
            {selectedBike.name}
          </h2>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(selectedBike.id)}
          aria-label="Favorite"
          style={{
            background: 'none',
            border: 'none',
            color: isSaved ? '#EF4444' : '#CBD5E1',
            cursor: 'pointer',
            padding: '6px'
          }}
        >
          <Heart size={22} fill={isSaved ? '#EF4444' : 'none'} />
        </button>
      </header>

      {/* Screen Content Scrollable Area */}
      <div style={{ padding: isMobileView ? '16px' : '24px 32px', flex: 1, paddingBottom: '100px' }}>
        {/* Bike Graphic Showcase Area */}
        <div style={{
          background: '#F8FAFC',
          borderRadius: '24px',
          padding: '24px 16px 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          position: 'relative'
        }}>
          <div style={{ width: '100%', maxWidth: '340px' }} className="float-animation">
            <BikeIllustration 
              model={selectedBike.image_url || "bravo"} 
              color={selectedBikeColor || "#00D26A"} 
            />
          </div>

          {/* Color Selector Dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px' }}>
            {(selectedBike.color_options || ["#00D26A", "#111827", "#DC2626"]).map((clr, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedBikeColor(clr)}
                aria-label={`Select color ${clr}`}
                style={{
                  width: selectedBikeColor === clr ? '26px' : '20px',
                  height: selectedBikeColor === clr ? '26px' : '20px',
                  borderRadius: '50%',
                  backgroundColor: clr,
                  border: selectedBikeColor === clr ? '2.5px solid #00D26A' : '1.5px solid #CBD5E1',
                  boxShadow: selectedBikeColor === clr ? '0 0 8px rgba(0,210,106,0.6)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>
        </div>

        {/* Price & Name Tag matching Screen 6 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#0F172A', margin: 0 }}>
              {selectedBike.name}
            </h3>
            <p style={{ fontSize: '12px', color: '#64748B', margin: '3px 0 0' }}>
              {selectedBike.tagline || "Official Showroom Model, Akole"}
            </p>
          </div>
          <div style={{ fontSize: '22px', fontWeight: '900', color: '#00D26A' }}>
            {formattedPrice}
          </div>
        </div>

        {/* 3 Spec Badges matching Screen 6 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginBottom: '24px'
        }}>
          {/* Range Badge */}
          <div style={{
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '14px 10px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px'
          }}>
            <div style={{ color: '#00D26A' }}>
              <Gauge size={22} />
            </div>
            <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '600' }}>Range</span>
            <strong style={{ fontSize: '14px', color: '#0F172A', fontWeight: '800' }}>
              {selectedBike.range_km} KM
            </strong>
          </div>

          {/* Top Speed Badge */}
          <div style={{
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '14px 10px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px'
          }}>
            <div style={{ color: '#00D26A' }}>
              <Zap size={22} />
            </div>
            <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '600' }}>Top Speed</span>
            <strong style={{ fontSize: '14px', color: '#0F172A', fontWeight: '800' }}>
              {selectedBike.top_speed_kmh} KM/H
            </strong>
          </div>

          {/* Battery Badge */}
          <div style={{
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '14px 10px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px'
          }}>
            <div style={{ color: '#00D26A' }}>
              <BatteryCharging size={22} />
            </div>
            <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '600' }}>Battery</span>
            <strong style={{ fontSize: '14px', color: '#0F172A', fontWeight: '800' }}>
              {selectedBike.battery_spec}
            </strong>
          </div>
        </div>

        {/* Features List matching Screen 6 */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0F172A', marginBottom: '12px' }}>
            Features
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {(selectedBike.features || [
              "Powerful BLDC Motor",
              "Fast Charging",
              "Digital Display",
              "Anti Theft Alarm"
            ]).map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  color: '#00D26A',
                  background: 'rgba(0, 210, 106, 0.12)',
                  borderRadius: '50%',
                  width: '22px',
                  height: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CheckCircle2 size={14} strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: '14px', color: '#334155', fontWeight: '600' }}>
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Technical Specs */}
        <div style={{
          background: '#F8FAFC',
          borderRadius: '16px',
          padding: '16px',
          marginBottom: '20px'
        }}>
          <h5 style={{ fontSize: '13px', fontWeight: '800', color: '#0F172A', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Technical Highlights
          </h5>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px' }}>
            <div>
              <span style={{ color: '#64748B' }}>Charging Time:</span>
              <div style={{ fontWeight: '700', color: '#0F172A' }}>{selectedBike.charging_time || '3.5 Hours'}</div>
            </div>
            <div>
              <span style={{ color: '#64748B' }}>Motor:</span>
              <div style={{ fontWeight: '700', color: '#0F172A' }}>{selectedBike.motor_type || 'BLDC Hub Motor'}</div>
            </div>
            <div>
              <span style={{ color: '#64748B' }}>Brakes:</span>
              <div style={{ fontWeight: '700', color: '#0F172A' }}>{selectedBike.brake_type || 'Dual Disc CBS'}</div>
            </div>
            <div>
              <span style={{ color: '#64748B' }}>Kerb Weight:</span>
              <div style={{ fontWeight: '700', color: '#0F172A' }}>{selectedBike.weight_kg || 88} KG</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Buttons matching Screen 6 */}
      <div 
        style={{
          position: 'sticky',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#FFFFFF',
          padding: '14px 18px',
          borderTop: '1px solid #E2E8F0',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          zIndex: 90,
          boxShadow: '0 -4px 16px rgba(0,0,0,0.06)'
        }}
      >
        <button
          onClick={() => navigateTo('test-ride', selectedBike)}
          className="btn-outline-electric"
          style={{ width: '100%', padding: '12px 10px', fontSize: '13px' }}
        >
          <Calendar size={16} /> Book Test Ride
        </button>

        <button
          onClick={() => setShowEnquiryModal(true)}
          className="btn-electric"
          style={{ width: '100%', padding: '12px 10px', fontSize: '13px' }}
        >
          <PhoneCall size={16} /> Enquire Now
        </button>
      </div>

      {/* Quick Enquiry Modal */}
      {showEnquiryModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.6)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '24px',
            width: '100%',
            maxWidth: '380px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A', marginBottom: '4px' }}>
              Enquire for {selectedBike.name}
            </h3>
            <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '18px' }}>
              Leave your contact to get instant on-road price & festive discount quote in Akole.
            </p>

            <form onSubmit={handleEnquirySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label className="form-label-custom">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={enquiryName}
                  onChange={(e) => setEnquiryName(e.target.value)}
                  className="form-input-custom"
                />
              </div>

              <div>
                <label className="form-label-custom">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="+91 9270441850"
                  value={enquiryMobile}
                  onChange={(e) => setEnquiryMobile(e.target.value)}
                  className="form-input-custom"
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <button
                  type="button"
                  onClick={() => setShowEnquiryModal(false)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: '12px',
                    border: '1px solid #CBD5E1',
                    background: '#F8FAFC',
                    color: '#64748B',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-electric"
                  style={{ flex: 1, padding: '12px', borderRadius: '12px' }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
