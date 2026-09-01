import React, { useState } from 'react';
import { ArrowLeft, Zap, ShieldCheck, Sparkles, Phone, MessageSquare, Calendar, Award, Disc, Battery, Compass, CheckCircle2, Tag } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PostersScreen = ({ isMobileView = false }) => {
  const { navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState('gtr'); // 'gtr', 'wolf20', 'wolf20_offer', 'aura', 'double_light'

  const hasePhone1 = "7875493982";
  const hasePhone2 = "9975983387";

  const getWaLink = (modelName, phone, price) => {
    const text = encodeURIComponent(`Namaskar Hase Brother's! I am interested in *${modelName}* (Offer Price: ₹${price}) from NK E-BIKES Akole. Please share booking and test ride details.`);
    return `https://wa.me/91${phone}?text=${text}`;
  };

  const posterTabs = [
    { id: 'gtr', label: '⚡ GTR+ (₹51,000)', price: '51,000' },
    { id: 'wolf20', label: '🐺 WOLF 2.0 SMART (₹78,000)', price: '78,000' },
    { id: 'wolf20_offer', label: '🔥 WOLF 2.0 OFFER (₹78,000)', price: '78,000' },
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
        {/* POSTER 1: NK GTR+ (₹51,000/-) */}
        {/* ==================================================== */}
        {activeTab === 'gtr' && (
          <div style={{
            background: 'linear-gradient(145deg, #121824 0%, #09131C 100%)',
            borderRadius: '32px',
            border: '2px solid rgba(0, 210, 106, 0.4)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            padding: '32px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Header Badge */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0, 210, 106, 0.15)', color: '#00D26A', padding: '8px 20px', borderRadius: '30px', fontSize: '13px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                <Zap size={18} fill="#00D26A" /> OFFICIAL MODEL POSTER
              </div>
              <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#FFFFFF', letterSpacing: '1px', margin: '0 0 8px' }}>
                NK'S <span style={{ color: '#00D26A' }}>GTR+</span>
              </h1>
              <p style={{ fontSize: '15px', color: '#94A3B8', fontWeight: '700', letterSpacing: '2px' }}>
                INDIA'S FIRST WATERPROOF CHARGER • SMART WIRELESS CONTROLLER
              </p>
            </div>

            {/* Price Tag Highlight */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <span style={{ background: 'linear-gradient(135deg, #00D26A 0%, #00B359 100%)', color: '#000', padding: '10px 28px', borderRadius: '30px', fontSize: '22px', fontWeight: '900', boxShadow: '0 8px 20px rgba(0,210,106,0.3)' }}>
                PRICE: ₹ 51,000/-*
              </span>
              <span style={{ background: 'rgba(255,255,255,0.08)', color: '#FFF', padding: '10px 24px', borderRadius: '30px', fontSize: '14px', fontWeight: '700', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Tag size={16} color="#00D26A" /> ALL TYPE FINANCE AVAILABLE
              </span>
            </div>

            {/* Main Poster Image */}
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', border: '1px solid rgba(0, 210, 106, 0.3)', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
              <img 
                src="./posters/poster1_gtr_plus.png" 
                alt="NK GTR+ Poster - Price 51000" 
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '580px', objectFit: 'contain', background: '#05070B' }}
              />

              {/* Floating Action Buttons over Image */}
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
                border: '1px solid rgba(0, 210, 106, 0.4)',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <a
                  href={getWaLink("NK GTR+", hasePhone1, "51,000")}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: '#25D366', color: '#000', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  💬 Inquire WhatsApp
                </a>
                <a
                  href={`tel:+91${hasePhone1}`}
                  style={{ background: '#00D26A', color: '#000', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  📞 Call Hase Brother's
                </a>
                <button
                  onClick={() => navigateTo('test-ride')}
                  style={{ background: '#38BDF8', color: '#000', border: 'none', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  📅 Book Test Ride
                </button>
              </div>
            </div>

            {/* Poster Features Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0, 210, 106, 0.2)', padding: '18px', borderRadius: '20px', textAlign: 'center' }}>
                <Compass size={28} color="#00D26A" style={{ marginBottom: '8px' }} />
                <div style={{ fontSize: '18px', fontWeight: '900', color: '#FFF' }}>70-110 KM</div>
                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '700' }}>RANGE PER CHARGE</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0, 210, 106, 0.2)', padding: '18px', borderRadius: '20px', textAlign: 'center' }}>
                <Zap size={28} color="#00D26A" style={{ marginBottom: '8px' }} />
                <div style={{ fontSize: '18px', fontWeight: '900', color: '#FFF' }}>IP67 MOTOR</div>
                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '700' }}>10" BLDC HUB MOTOR</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0, 210, 106, 0.2)', padding: '18px', borderRadius: '20px', textAlign: 'center' }}>
                <Battery size={28} color="#00D26A" style={{ marginBottom: '8px' }} />
                <div style={{ fontSize: '18px', fontWeight: '900', color: '#FFF' }}>VRLA / LITHIUM</div>
                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '700' }}>60V32AH / 60V25AH</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0, 210, 106, 0.2)', padding: '18px', borderRadius: '20px', textAlign: 'center' }}>
                <ShieldCheck size={28} color="#00D26A" style={{ marginBottom: '8px' }} />
                <div style={{ fontSize: '18px', fontWeight: '900', color: '#FFF' }}>3 YRS WARRANTY</div>
                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '700' }}>LITHIUM ION BATTERY</div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ background: '#090D14', border: '1px solid #1F293D', borderRadius: '24px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: '900', color: '#00D26A', marginBottom: '6px' }}>
                NK GTR+ Special Offer Price: ₹ 51,000/-
              </div>
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px' }}>
                Contact Hase Brother's for booking near Agasti College, Akole!
              </p>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={`tel:+91${hasePhone1}`} className="btn-electric" style={{ padding: '12px 24px', fontSize: '14px' }}>
                  <Phone size={16} /> Call {hasePhone1}
                </a>
                <a href={getWaLink("NK GTR+", hasePhone1, "51,000")} target="_blank" rel="noopener noreferrer" className="btn-outline-electric" style={{ padding: '12px 24px', fontSize: '14px', borderColor: '#25D366', color: '#25D366' }}>
                  <MessageSquare size={16} /> WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* POSTER 2: NK WOLF 2.0 SMART (₹78,000/-) */}
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

            {/* Price Banner */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <span style={{ background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)', color: '#FFF', padding: '10px 28px', borderRadius: '30px', fontSize: '22px', fontWeight: '900', boxShadow: '0 8px 20px rgba(249,115,22,0.3)' }}>
                PRICE: ₹ 78,000/-*
              </span>
              <span style={{ background: 'rgba(255,255,255,0.08)', color: '#FFF', padding: '10px 24px', borderRadius: '30px', fontSize: '14px', fontWeight: '700', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#F97316" /> GRAPHENE BATTERY & APP NAVIGATION
              </span>
            </div>

            {/* Poster Image */}
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
                <button onClick={() => navigateTo('test-ride')} style={{ background: '#38BDF8', color: '#000', border: 'none', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', cursor: 'pointer' }}>
                  📅 Book Test Ride
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ background: '#090D14', border: '1px solid #1F293D', borderRadius: '24px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: '900', color: '#F97316', marginBottom: '6px' }}>
                NK WOLF 2.0 Offer Price: ₹ 78,000/-
              </div>
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px' }}>
                Hase Brother's • Near Agasti College, Akole • Contact: 7875493982 / 9975983387
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
        {/* POSTER 3: NK WOLF 2.0 SPECIAL OFFER (₹78,000/-) */}
        {/* ==================================================== */}
        {activeTab === 'wolf20_offer' && (
          <div style={{
            background: 'linear-gradient(145deg, #1C0F19 0%, #090D14 100%)',
            borderRadius: '32px',
            border: '2px solid rgba(236, 72, 153, 0.4)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            padding: '32px',
            position: 'relative'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(236, 72, 153, 0.15)', color: '#F472B6', padding: '8px 20px', borderRadius: '30px', fontSize: '13px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                🔥 SPECIAL OFFER POSTER
              </div>
              <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#FFFFFF', margin: '0 0 8px' }}>
                NK WOLF <span style={{ color: '#F472B6' }}>2.0 OFFER</span>
              </h1>
              <p style={{ fontSize: '15px', color: '#94A3B8', fontWeight: '700' }}>
                RANGE: 90-100+ KMS • 12 MONTHS WARRANTY (BATTERY, MOTOR, CHARGER, CONTROLLER)
              </p>
            </div>

            {/* Price Badge */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <span style={{ background: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)', color: '#FFF', padding: '10px 28px', borderRadius: '30px', fontSize: '22px', fontWeight: '900', boxShadow: '0 8px 20px rgba(236,72,153,0.3)' }}>
                SPECIAL OFFER PRICE: ₹ 78,000/-*
              </span>
            </div>

            {/* Image */}
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', border: '1px solid rgba(236, 72, 153, 0.3)', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
              <img 
                src="./posters/poster3_wolf20_offer.png" 
                alt="NK Wolf 2.0 Special Offer Poster - Price 78000" 
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
                border: '1px solid rgba(236, 72, 153, 0.4)',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <a href={getWaLink("NK Wolf 2.0 Offer", hasePhone1, "78,000")} target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: '#000', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none' }}>
                  💬 WhatsApp Inquiry
                </a>
                <a href={`tel:+91${hasePhone1}`} style={{ background: '#EC4899', color: '#FFF', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', textDecoration: 'none' }}>
                  📞 Call 7875493982
                </a>
              </div>
            </div>

            <div style={{ background: '#090D14', border: '1px solid #1F293D', borderRadius: '24px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: '900', color: '#F472B6', marginBottom: '6px' }}>
                Updated Special Offer Price: ₹ 78,000/-
              </div>
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px' }}>
                Colors Available: Black • White • Orange
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={`tel:+91${hasePhone1}`} className="btn-electric" style={{ padding: '12px 24px', fontSize: '14px', background: '#EC4899' }}>
                  <Phone size={16} /> Call 7875493982
                </a>
                <a href={getWaLink("NK Wolf 2.0 Offer", hasePhone2, "78,000")} target="_blank" rel="noopener noreferrer" className="btn-outline-electric" style={{ padding: '12px 24px', fontSize: '14px', borderColor: '#25D366', color: '#25D366' }}>
                  <MessageSquare size={16} /> WhatsApp Inquiry (9975983387)
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* POSTER 4: NK AURA PRO (₹75,000/-) */}
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

            {/* Price Tag */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <span style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: '#FFF', padding: '10px 28px', borderRadius: '30px', fontSize: '22px', fontWeight: '900', boxShadow: '0 8px 20px rgba(16,185,129,0.3)' }}>
                SPECIAL OFFER PRICE: ₹ 75,000/-*
              </span>
            </div>

            {/* Image */}
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
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px' }}>
                Colors: Black • White • Milky White | 12 Months Complete Warranty
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
        {/* POSTER 5: NK DOUBLE LIGHT (WOLF) (₹48,000/-) */}
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

            {/* Price Badge */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <span style={{ background: 'linear-gradient(135deg, #FACC15 0%, #EAB308 100%)', color: '#000', padding: '10px 28px', borderRadius: '30px', fontSize: '22px', fontWeight: '900', boxShadow: '0 8px 20px rgba(234,179,8,0.3)' }}>
                SPECIAL OFFER PRICE: ₹ 48,000/-*
              </span>
            </div>

            {/* Image */}
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
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px' }}>
                10" BLDC Motor • 12" Front Tyre • Colors: Black, White, Milky White
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
