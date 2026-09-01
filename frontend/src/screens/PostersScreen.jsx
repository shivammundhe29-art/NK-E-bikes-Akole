import React, { useState } from 'react';
import { ArrowLeft, Zap, ShieldCheck, Sparkles, Phone, MessageSquare, Calendar, Award, Disc, Battery, Compass, CheckCircle2, Tag, Truck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PostersScreen = ({ isMobileView = false }) => {
  const { navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState('gtr2'); // 'gtr2', 'loader', 'sharvil', 'wolf20', 'aura', 'double_light'

  const hasePhone1 = "7875493982";
  const hasePhone2 = "9975983387";

  const getWaLink = (modelName, phone, price) => {
    const text = encodeURIComponent(`Namaskar Hase Brother's! I am interested in *${modelName}* (Offer Price: ₹${price}) from NK E-BIKES Akole. Please share booking and test ride details.`);
    return `https://wa.me/91${phone}?text=${text}`;
  };

  const posterTabs = [
    { id: 'gtr2', label: '⚡ GTR PLUS ++ (₹51,000)', price: '51,000' },
    { id: 'loader', label: '🚚 NK LOADER (₹80,000)', price: '80,000' },
    { id: 'sharvil', label: '⚡ SHARVIL (₹71,000)', price: '71,000' },
    { id: 'wolf20', label: '🐺 WOLF 2.0 (₹78,000)', price: '78,000' },
    { id: 'aura', label: '🛵 AURA PRO (₹75,000)', price: '75,000' },
    { id: 'double_light', label: '💡 DOUBLE LIGHT (₹48,000)', price: '48,000' }
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#080B10', color: '#F8FAFC', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #1E293B',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => navigateTo('home')}
            style={{
              background: '#1E293B',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              borderRadius: '50%',
              color: '#00D26A'
            }}
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '900', margin: 0, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              NK E-BIKES <span style={{ color: '#00D26A' }}>POSTERS & CATALOG</span>
            </h2>
            <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '600' }}>
              Near Agasti College, Akole • Hase Brother's (7875493982 / 9975983387)
            </span>
          </div>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', gap: '6px', background: '#121824', padding: '4px', borderRadius: '30px', border: '1px solid #1F293D', flexWrap: 'wrap', maxWidth: '100%' }}>
          {posterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? '#00D26A' : 'transparent',
                color: activeTab === tab.id ? '#000' : '#94A3B8',
                border: 'none',
                borderRadius: '20px',
                padding: '6px 14px',
                fontSize: '12px',
                fontWeight: '800',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Container */}
      <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto', padding: '24px 16px', flex: 1, boxSizing: 'border-box' }}>

        {/* ==================================================== */}
        {/* POSTER 1: GTR PLUS ++ (₹51,000/-) */}
        {/* ==================================================== */}
        {activeTab === 'gtr2' && (
          <div style={{
            background: 'linear-gradient(145deg, #121824 0%, #09131C 100%)',
            borderRadius: '32px',
            border: '2px solid rgba(255, 102, 0, 0.4)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            padding: '32px',
            position: 'relative'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 102, 0, 0.15)', color: '#FF6600', padding: '8px 20px', borderRadius: '30px', fontSize: '13px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                <Zap size={18} fill="#FF6600" /> OFFICIAL MODEL POSTER
              </div>
              <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#FFFFFF', letterSpacing: '1px', margin: '0 0 8px' }}>
                GTR <span style={{ color: '#FF6600' }}>PLUS ++</span>
              </h1>
              <p style={{ fontSize: '15px', color: '#94A3B8', fontWeight: '700', letterSpacing: '2px' }}>
                SMART. STYLISH. SUSTAINABLE. • DESIGNED FOR THE FUTURE. BUILT FOR YOU.
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <span style={{ background: 'linear-gradient(135deg, #FF6600 0%, #CC5200 100%)', color: '#FFF', padding: '10px 28px', borderRadius: '30px', fontSize: '22px', fontWeight: '900', boxShadow: '0 8px 20px rgba(255,102,0,0.3)' }}>
                PRICE: ₹ 51,000/-*
              </span>
            </div>

            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', border: '1px solid rgba(255, 102, 0, 0.3)', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
              <img 
                src="./posters/poster6_gtr_plus2.png" 
                alt="GTR Plus ++ Poster - Price 51000" 
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '580px', objectFit: 'contain', background: '#05070B' }}
              />

              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '12px',
                background: 'rgba(9, 13, 20, 0.90)',
                backdropFilter: 'blur(12px)',
                padding: '12px 20px',
                borderRadius: '30px',
                border: '1px solid rgba(255, 102, 0, 0.4)',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <a href={getWaLink("GTR PLUS ++", hasePhone1, "51,000")} target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: '#000', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none' }}>
                  💬 WhatsApp Inquiry
                </a>
                <a href={`tel:+91${hasePhone1}`} style={{ background: '#FF6600', color: '#FFF', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none' }}>
                  📞 Call Hase Brother's
                </a>
                <button onClick={() => navigateTo('test-ride')} style={{ background: '#38BDF8', color: '#000', border: 'none', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', cursor: 'pointer' }}>
                  📅 Book Test Ride
                </button>
              </div>
            </div>

            <div style={{ background: '#090D14', border: '1px solid #1F293D', borderRadius: '24px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: '900', color: '#FF6600', marginBottom: '6px' }}>
                GTR PLUS ++ Offer Price: ₹ 51,000/-
              </div>
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px' }}>
                Contact Hase Brother's near Agasti College, Akole!
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={`tel:+91${hasePhone1}`} className="btn-electric" style={{ padding: '12px 24px', fontSize: '14px', background: '#FF6600', color: '#FFF' }}>
                  <Phone size={16} /> Call {hasePhone1}
                </a>
                <a href={getWaLink("GTR PLUS ++", hasePhone1, "51,000")} target="_blank" rel="noopener noreferrer" className="btn-outline-electric" style={{ padding: '12px 24px', fontSize: '14px', borderColor: '#25D366', color: '#25D366' }}>
                  <MessageSquare size={16} /> WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* POSTER 2: NK'S LOADER 500KG (₹80,000/-) */}
        {/* ==================================================== */}
        {activeTab === 'loader' && (
          <div style={{
            background: 'linear-gradient(145deg, #1F0B0B 0%, #090D14 100%)',
            borderRadius: '32px',
            border: '2px solid rgba(220, 38, 38, 0.4)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            padding: '32px',
            position: 'relative'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(220, 38, 38, 0.15)', color: '#EF4444', padding: '8px 20px', borderRadius: '30px', fontSize: '13px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                <Truck size={18} color="#EF4444" /> HEAVY DUTY COMMERCIAL LOADER
              </div>
              <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#FFFFFF', margin: '0 0 8px' }}>
                NK'S <span style={{ color: '#EF4444' }}>LOADER (500 KG)</span>
              </h1>
              <p style={{ fontSize: '15px', color: '#FCA5A5', fontWeight: '700' }}>
                12" MID DRIVE SMART MOTOR (IP67) • 60/72V SMART WIRELESS CONTROLLER
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <span style={{ background: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)', color: '#FFF', padding: '10px 28px', borderRadius: '30px', fontSize: '22px', fontWeight: '900', boxShadow: '0 8px 20px rgba(220,38,38,0.3)' }}>
                PRICE: ₹ 80,000/-*
              </span>
              <span style={{ background: 'rgba(255,255,255,0.08)', color: '#FFF', padding: '10px 24px', borderRadius: '30px', fontSize: '14px', fontWeight: '700', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Tag size={16} color="#EF4444" /> PAYLOAD CAPACITY: 500 KG
              </span>
            </div>

            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', border: '1px solid rgba(220, 38, 38, 0.3)', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
              <img 
                src="./posters/poster7_loader.png" 
                alt="NK Loader Poster - Price 80000" 
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '580px', objectFit: 'contain', background: '#05070B' }}
              />

              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '12px',
                background: 'rgba(9, 13, 20, 0.90)',
                backdropFilter: 'blur(12px)',
                padding: '12px 20px',
                borderRadius: '30px',
                border: '1px solid rgba(220, 38, 38, 0.4)',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <a href={getWaLink("NK Loader", hasePhone1, "80,000")} target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: '#000', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none' }}>
                  💬 WhatsApp Inquiry
                </a>
                <a href={`tel:+91${hasePhone1}`} style={{ background: '#DC2626', color: '#FFF', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none' }}>
                  📞 Call Hase Brother's
                </a>
              </div>
            </div>

            <div style={{ background: '#090D14', border: '1px solid #1F293D', borderRadius: '24px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: '900', color: '#EF4444', marginBottom: '6px' }}>
                NK Loader Price: ₹ 80,000/-
              </div>
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px' }}>
                Heavy Duty Cargo Carriage • 3 Yrs Lithium / 1 Yr Lead Warranty
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={`tel:+91${hasePhone1}`} className="btn-electric" style={{ padding: '12px 24px', fontSize: '14px', background: '#DC2626', color: '#FFF' }}>
                  <Phone size={16} /> Call 7875493982
                </a>
                <a href={getWaLink("NK Loader", hasePhone2, "80,000")} target="_blank" rel="noopener noreferrer" className="btn-outline-electric" style={{ padding: '12px 24px', fontSize: '14px', borderColor: '#25D366', color: '#25D366' }}>
                  <MessageSquare size={16} /> WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* POSTER 3: SHARVIL ELECTRIC BIKE (₹71,000/-) */}
        {/* ==================================================== */}
        {activeTab === 'sharvil' && (
          <div style={{
            background: 'linear-gradient(145deg, #0B1D12 0%, #090D14 100%)',
            borderRadius: '32px',
            border: '2px solid rgba(16, 185, 129, 0.4)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            padding: '32px',
            position: 'relative'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', padding: '8px 20px', borderRadius: '30px', fontSize: '13px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                ⚡ SMART RIDE • SMART CHOICE
              </div>
              <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#FFFFFF', margin: '0 0 8px' }}>
                NK <span style={{ color: '#10B981' }}>SHARVIL</span>
              </h1>
              <p style={{ fontSize: '15px', color: '#A7F3D0', fontWeight: '700' }}>
                3 RIDING MODES: ECO • CITY • TURBO | RANGE: 75-80+ KM
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <span style={{ background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)', color: '#FFF', padding: '10px 28px', borderRadius: '30px', fontSize: '22px', fontWeight: '900', boxShadow: '0 8px 20px rgba(16,185,129,0.3)' }}>
                PRICE: ₹ 71,000/-*
              </span>
            </div>

            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', border: '1px solid rgba(16, 185, 129, 0.3)', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
              <img 
                src="./posters/poster8_sharvil.jpg" 
                alt="Sharvil Poster - Price 71000" 
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '580px', objectFit: 'contain', background: '#05070B' }}
              />

              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '12px',
                background: 'rgba(9, 13, 20, 0.90)',
                backdropFilter: 'blur(12px)',
                padding: '12px 20px',
                borderRadius: '30px',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <a href={getWaLink("NK Sharvil", hasePhone1, "71,000")} target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: '#000', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none' }}>
                  💬 WhatsApp Inquiry
                </a>
                <a href={`tel:+91${hasePhone1}`} style={{ background: '#10B981', color: '#FFF', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none' }}>
                  📞 Call Hase Brother's
                </a>
                <button onClick={() => navigateTo('test-ride')} style={{ background: '#38BDF8', color: '#000', border: 'none', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', cursor: 'pointer' }}>
                  📅 Book Test Ride
                </button>
              </div>
            </div>

            <div style={{ background: '#090D14', border: '1px solid #1F293D', borderRadius: '24px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: '900', color: '#10B981', marginBottom: '6px' }}>
                NK Sharvil Price: ₹ 71,000/-
              </div>
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px' }}>
                1 Year Warranty on Motor, Controller & Frame
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={`tel:+91${hasePhone1}`} className="btn-electric" style={{ padding: '12px 24px', fontSize: '14px', background: '#10B981', color: '#FFF' }}>
                  <Phone size={16} /> Call 7875493982
                </a>
                <a href={getWaLink("NK Sharvil", hasePhone2, "71,000")} target="_blank" rel="noopener noreferrer" className="btn-outline-electric" style={{ padding: '12px 24px', fontSize: '14px', borderColor: '#25D366', color: '#25D366' }}>
                  <MessageSquare size={16} /> WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* POSTER 4: NK WOLF 2.0 (₹78,000/-) */}
        {/* ==================================================== */}
        {activeTab === 'wolf20' && (
          <div style={{
            background: 'linear-gradient(145deg, #1A1308 0%, #0F172A 100%)',
            borderRadius: '32px',
            border: '2px solid rgba(249, 115, 22, 0.4)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            padding: '32px',
            position: 'relative'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(249, 115, 22, 0.15)', color: '#F97316', padding: '8px 20px', borderRadius: '30px', fontSize: '13px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                <Zap size={18} fill="#F97316" /> NEXT-GEN SMART E-BIKE
              </div>
              <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#FFFFFF', margin: '0 0 8px' }}>
                NK WOLF <span style={{ color: '#F97316' }}>2.0</span>
              </h1>
              <p style={{ fontSize: '16px', color: '#FDBA74', fontWeight: '800' }}>
                POWER BHI, MILEAGE BHI • 120+ KMS SINGLE CHARGE
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <span style={{ background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)', color: '#FFF', padding: '10px 28px', borderRadius: '30px', fontSize: '22px', fontWeight: '900', boxShadow: '0 8px 20px rgba(249,115,22,0.3)' }}>
                PRICE: ₹ 78,000/-*
              </span>
            </div>

            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', border: '1px solid rgba(249, 115, 22, 0.3)', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
              <img 
                src="./posters/poster2_wolf20.jpg" 
                alt="NK Wolf 2.0 Poster - Price 78000" 
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '580px', objectFit: 'contain', background: '#05070B' }}
              />

              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '12px',
                background: 'rgba(9, 13, 20, 0.90)',
                backdropFilter: 'blur(12px)',
                padding: '12px 20px',
                borderRadius: '30px',
                border: '1px solid rgba(249, 115, 22, 0.4)',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <a href={getWaLink("NK Wolf 2.0", hasePhone1, "78,000")} target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: '#000', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none' }}>
                  💬 WhatsApp Inquiry
                </a>
                <a href={`tel:+91${hasePhone2}`} style={{ background: '#F97316', color: '#FFF', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none' }}>
                  📞 Call 9975983387
                </a>
              </div>
            </div>

            <div style={{ background: '#090D14', border: '1px solid #1F293D', borderRadius: '24px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: '900', color: '#F97316', marginBottom: '6px' }}>
                NK WOLF 2.0 Offer Price: ₹ 78,000/-
              </div>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '16px' }}>
                <a href={`tel:+91${hasePhone1}`} className="btn-electric" style={{ padding: '12px 24px', fontSize: '14px', background: '#F97316', color: '#FFF' }}>
                  <Phone size={16} /> Call Hase Brother's
                </a>
                <a href={getWaLink("NK Wolf 2.0", hasePhone1, "78,000")} target="_blank" rel="noopener noreferrer" className="btn-outline-electric" style={{ padding: '12px 24px', fontSize: '14px', borderColor: '#25D366', color: '#25D366' }}>
                  <MessageSquare size={16} /> WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* POSTER 5: NK AURA PRO (₹75,000/-) */}
        {/* ==================================================== */}
        {activeTab === 'aura' && (
          <div style={{
            background: 'linear-gradient(145deg, #0D1B1E 0%, #090D14 100%)',
            borderRadius: '32px',
            border: '2px solid rgba(16, 185, 129, 0.4)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            padding: '32px',
            position: 'relative'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', padding: '8px 20px', borderRadius: '30px', fontSize: '13px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                ✨ SMART • SAFE • SUSTAINABLE
              </div>
              <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#FFFFFF', margin: '0 0 8px' }}>
                NK'S <span style={{ color: '#10B981' }}>AURA PRO</span>
              </h1>
              <p style={{ fontSize: '15px', color: '#94A3B8', fontWeight: '700' }}>
                YOUR EVERYDAY ELECTRIC COMPANION • RANGE: 80-90+ KMS
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <span style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: '#FFF', padding: '10px 28px', borderRadius: '30px', fontSize: '22px', fontWeight: '900', boxShadow: '0 8px 20px rgba(16,185,129,0.3)' }}>
                SPECIAL OFFER PRICE: ₹ 75,000/-*
              </span>
            </div>

            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', border: '1px solid rgba(16, 185, 129, 0.3)', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
              <img 
                src="./posters/poster4_aura_pro.jpg" 
                alt="NK Aura Pro Poster - Price 75000" 
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '580px', objectFit: 'contain', background: '#05070B' }}
              />

              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '12px',
                background: 'rgba(9, 13, 20, 0.90)',
                backdropFilter: 'blur(12px)',
                padding: '12px 20px',
                borderRadius: '30px',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <a href={getWaLink("NK Aura Pro", hasePhone1, "75,000")} target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: '#000', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none' }}>
                  💬 WhatsApp Inquiry
                </a>
                <a href={`tel:+91${hasePhone1}`} style={{ background: '#10B981', color: '#FFF', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none' }}>
                  📞 Call Hase Brother's
                </a>
              </div>
            </div>

            <div style={{ background: '#090D14', border: '1px solid #1F293D', borderRadius: '24px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: '900', color: '#10B981', marginBottom: '6px' }}>
                NK Aura Pro Price: ₹ 75,000/-
              </div>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '16px' }}>
                <a href={`tel:+91${hasePhone1}`} className="btn-electric" style={{ padding: '12px 24px', fontSize: '14px', background: '#10B981' }}>
                  <Phone size={16} /> Call 7875493982
                </a>
                <a href={getWaLink("NK Aura Pro", hasePhone2, "75,000")} target="_blank" rel="noopener noreferrer" className="btn-outline-electric" style={{ padding: '12px 24px', fontSize: '14px', borderColor: '#25D366', color: '#25D366' }}>
                  <MessageSquare size={16} /> WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* POSTER 6: NK DOUBLE LIGHT (WOLF) (₹48,000/-) */}
        {/* ==================================================== */}
        {activeTab === 'double_light' && (
          <div style={{
            background: 'linear-gradient(145deg, #1F190B 0%, #090D14 100%)',
            borderRadius: '32px',
            border: '2px solid rgba(234, 179, 8, 0.4)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            padding: '32px',
            position: 'relative'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(234, 179, 8, 0.15)', color: '#FACC15', padding: '8px 20px', borderRadius: '30px', fontSize: '13px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                💡 DOUBLE LIGHT. DOUBLE POWER. MAXIMUM IMPACT.
              </div>
              <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#FFFFFF', margin: '0 0 8px' }}>
                NK'S <span style={{ color: '#FACC15' }}>DOUBLE LIGHT</span> (WOLF)
              </h1>
              <p style={{ fontSize: '15px', color: '#FEF08A', fontWeight: '700' }}>
                RIDE SMARTER. RIDE STRONGER. RIDE NK.
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <span style={{ background: 'linear-gradient(135deg, #FACC15 0%, #EAB308 100%)', color: '#000', padding: '10px 28px', borderRadius: '30px', fontSize: '22px', fontWeight: '900', boxShadow: '0 8px 20px rgba(234,179,8,0.3)' }}>
                SPECIAL OFFER PRICE: ₹ 48,000/-*
              </span>
            </div>

            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', border: '1px solid rgba(234, 179, 8, 0.3)', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
              <img 
                src="./posters/poster5_double_light.png" 
                alt="NK Double Light Poster - Price 48000" 
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '580px', objectFit: 'contain', background: '#05070B' }}
              />

              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '12px',
                background: 'rgba(9, 13, 20, 0.90)',
                backdropFilter: 'blur(12px)',
                padding: '12px 20px',
                borderRadius: '30px',
                border: '1px solid rgba(234, 179, 8, 0.4)',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <a href={getWaLink("NK Double Light (Wolf)", hasePhone1, "48,000")} target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: '#000', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none' }}>
                  💬 WhatsApp Inquiry
                </a>
                <a href={`tel:+91${hasePhone1}`} style={{ background: '#FACC15', color: '#000', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none' }}>
                  📞 Call Hase Brother's
                </a>
              </div>
            </div>

            <div style={{ background: '#090D14', border: '1px solid #1F293D', borderRadius: '24px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: '900', color: '#FACC15', marginBottom: '6px' }}>
                NK Double Light (Wolf) Offer Price: ₹ 48,000/-
              </div>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '16px' }}>
                <a href={`tel:+91${hasePhone1}`} className="btn-electric" style={{ padding: '12px 24px', fontSize: '14px', background: '#FACC15', color: '#000' }}>
                  <Phone size={16} /> Call 7875493982
                </a>
                <a href={getWaLink("NK Double Light (Wolf)", hasePhone2, "48,000")} target="_blank" rel="noopener noreferrer" className="btn-outline-electric" style={{ padding: '12px 24px', fontSize: '14px', borderColor: '#25D366', color: '#25D366' }}>
                  <MessageSquare size={16} /> WhatsApp Inquiry (9975983387)
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
