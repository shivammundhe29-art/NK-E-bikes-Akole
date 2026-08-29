import React, { useState } from 'react';
import { ArrowLeft, Zap, ShieldCheck, Sparkles, Phone, MessageSquare, Calendar, Award, Disc, Battery, Compass, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PostersScreen = ({ isMobileView = false }) => {
  const { navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState('gtr'); // 'gtr', 'classic', 'lead'
  const [selectedClassicColor, setSelectedClassicColor] = useState('black');

  const hasePhone1 = "7875493982";
  const hasePhone2 = "9975983387";

  const getWaLink = (modelName, phone) => {
    const text = encodeURIComponent(`Namaskar Hase Brother's! I am interested in *${modelName}* from NK E-BIKES Akole. Please share exact price, offers, and test ride details.`);
    return `https://wa.me/91${phone}?text=${text}`;
  };

  const classicColors = [
    { id: 'black', name: 'Glossy Black', hex: '#111111' },
    { id: 'red', name: 'Cherry Red', hex: '#8B0000' },
    { id: 'copper', name: 'Rose Gold / Copper', hex: '#B87333' },
    { id: 'beige', name: 'Cream Beige', hex: '#D7C4B7' },
    { id: 'white', name: 'Pearl White', hex: '#F5F5F5' }
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#080B10', color: '#F8FAFC', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 32px',
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #1E293B',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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
            <h2 style={{ fontSize: '20px', fontWeight: '900', margin: 0, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              NK E-BIKES <span style={{ color: '#00D26A' }}>OFFICIAL POSTERS & CATALOG</span>
            </h2>
            <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '600' }}>
              Near Agasti College, Akole • Contact: 7875493982 / 9975983387
            </span>
          </div>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', gap: '8px', background: '#121824', padding: '6px', borderRadius: '30px', border: '1px solid #1F293D' }}>
          <button
            onClick={() => setActiveTab('gtr')}
            style={{
              background: activeTab === 'gtr' ? '#00D26A' : 'transparent',
              color: activeTab === 'gtr' ? '#000' : '#94A3B8',
              border: 'none',
              borderRadius: '20px',
              padding: '8px 18px',
              fontSize: '13px',
              fontWeight: '800',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            ⚡ GTR PLUS ++
          </button>
          <button
            onClick={() => setActiveTab('classic')}
            style={{
              background: activeTab === 'classic' ? '#00D26A' : 'transparent',
              color: activeTab === 'classic' ? '#000' : '#94A3B8',
              border: 'none',
              borderRadius: '20px',
              padding: '8px 18px',
              fontSize: '13px',
              fontWeight: '800',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            🛵 CLASSIC RETRO (5 Colors)
          </button>
          <button
            onClick={() => setActiveTab('lead')}
            style={{
              background: activeTab === 'lead' ? '#00D26A' : 'transparent',
              color: activeTab === 'lead' ? '#000' : '#94A3B8',
              border: 'none',
              borderRadius: '20px',
              padding: '8px 18px',
              fontSize: '13px',
              fontWeight: '800',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            🏆 ENGINEERED TO LEAD
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '36px 20px', flex: 1 }}>

        {/* POSTER 1: GTR PLUS ++ */}
        {activeTab === 'gtr' && (
          <div style={{
            background: 'linear-gradient(145deg, #121824 0%, #09131C 100%)',
            borderRadius: '32px',
            border: '2px solid rgba(0, 210, 106, 0.3)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Header Badge */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0, 210, 106, 0.12)', color: '#00D26A', padding: '8px 20px', borderRadius: '30px', fontSize: '13px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                <Zap size={18} fill="#00D26A" /> OFFICIAL MODEL POSTER
              </div>
              <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#FFFFFF', letterSpacing: '2px', margin: '0 0 8px' }}>
                GTR <span style={{ color: '#00D26A' }}>PLUS ++</span>
              </h1>
              <p style={{ fontSize: '16px', color: '#94A3B8', fontWeight: '700', letterSpacing: '3px' }}>
                SMART • STYLISH • SUSTAINABLE
              </p>
            </div>

            {/* Price Tag & Highlights */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <span style={{ background: '#00D26A', color: '#000', padding: '8px 24px', borderRadius: '30px', fontSize: '18px', fontWeight: '900' }}>
                PRICE: ₹ 74,999/-*
              </span>
              <span style={{ background: 'rgba(255,255,255,0.08)', color: '#FFF', padding: '8px 24px', borderRadius: '30px', fontSize: '14px', fontWeight: '700', border: '1px solid rgba(255,255,255,0.15)' }}>
                DESIGNED FOR THE FUTURE. BUILT FOR YOU.
              </span>
            </div>

            {/* Poster Main Bike Image with Overlay Buttons */}
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', border: '1px solid rgba(0, 210, 106, 0.3)', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
              <img 
                src="/gtr_plus_scooter.jpg" 
                alt="GTR PLUS ++ Electric Scooter" 
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '520px', objectFit: 'cover' }}
              />

              {/* Floating Interactive Buttons over image */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '12px',
                background: 'rgba(9, 13, 20, 0.85)',
                backdropFilter: 'blur(12px)',
                padding: '12px 20px',
                borderRadius: '30px',
                border: '1px solid rgba(0, 210, 106, 0.4)',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <a
                  href={getWaLink('GTR PLUS ++', hasePhone1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#25D366',
                    color: '#000',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '800',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  💬 Inquire on WhatsApp
                </a>
                <a
                  href="tel:+917875493982"
                  style={{
                    background: '#00D26A',
                    color: '#000',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '800',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  📞 Call Hase Brother's
                </a>
                <button
                  onClick={() => navigateTo('test-ride')}
                  style={{
                    background: '#38BDF8',
                    color: '#000',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '800',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  📅 Book Test Ride
                </button>
              </div>
            </div>

            {/* Poster Feature Grid (Matches Image Icons) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '40px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0, 210, 106, 0.2)', padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
                <Compass size={32} color="#00D26A" style={{ marginBottom: '10px' }} />
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#FFF' }}>90 KM</div>
                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '700' }}>RANGE PER CHARGE</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0, 210, 106, 0.2)', padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
                <Zap size={32} color="#00D26A" style={{ marginBottom: '10px' }} />
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#FFF' }}>POWERFUL</div>
                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '700' }}>HIGH TORQUE MOTOR</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0, 210, 106, 0.2)', padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
                <Battery size={32} color="#00D26A" style={{ marginBottom: '10px' }} />
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#FFF' }}>ADVANCED</div>
                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '700' }}>SMART LITHIUM BATTERY</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0, 210, 106, 0.2)', padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
                <Disc size={32} color="#00D26A" style={{ marginBottom: '10px' }} />
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#FFF' }}>DISC BRAKE</div>
                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '700' }}>SAFETY & STABILITY</div>
              </div>
            </div>

            {/* Interactive Call & WhatsApp Action Buttons */}
            <div style={{ background: '#090D14', border: '1px solid #1F293D', borderRadius: '24px', padding: '28px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#FFF', marginBottom: '8px' }}>
                Interested in GTR PLUS ++ ?
              </h3>
              <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '24px' }}>
                Contact Hase Brother's for best showroom discount & free test ride near Agasti College, Akole!
              </p>

              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="tel:+917875493982"
                  className="btn-electric"
                  style={{ padding: '14px 28px', fontSize: '15px' }}
                >
                  <Phone size={18} /> Call 7875493982
                </a>
                <a
                  href={getWaLink('GTR PLUS ++', hasePhone1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-electric"
                  style={{ padding: '14px 28px', fontSize: '15px', borderColor: '#25D366', color: '#25D366' }}
                >
                  <MessageSquare size={18} /> WhatsApp Inquiry (7875493982)
                </a>
                <a
                  href={getWaLink('GTR PLUS ++', hasePhone2)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-electric"
                  style={{ padding: '14px 28px', fontSize: '15px', borderColor: '#25D366', color: '#25D366' }}
                >
                  <MessageSquare size={18} /> WhatsApp Inquiry (9975983387)
                </a>
                <button
                  onClick={() => navigateTo('test-ride')}
                  className="btn-electric"
                  style={{ padding: '14px 28px', fontSize: '15px', background: '#38BDF8', color: '#000' }}
                >
                  <Calendar size={18} /> Book Free Test Ride
                </button>
              </div>
            </div>
          </div>
        )}

        {/* POSTER 2: NK E-BIKES CLASSIC RETRO (5 COLORS) */}
        {activeTab === 'classic' && (
          <div style={{
            background: 'linear-gradient(145deg, #1A1829 0%, #0F172A 100%)',
            borderRadius: '32px',
            border: '2px solid rgba(168, 85, 247, 0.3)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            padding: '40px',
            position: 'relative'
          }}>
            {/* Header in Marathi & English */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(168, 85, 247, 0.15)', color: '#C084FC', padding: '8px 20px', borderRadius: '30px', fontSize: '13px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '12px' }}>
                🌱 पर्यावरण पूरक... भविष्य सुरक्षित...
              </div>
              <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#FFFFFF', margin: '0 0 8px' }}>
                NK ई-बाईक्स अकोले <span style={{ color: '#00D26A' }}>CLASSIC SERIES</span>
              </h1>
              <p style={{ fontSize: '18px', color: '#E2E8F0', fontWeight: '800' }}>
                स्मार्ट चाल, स्मार्ट पर्याय! (5 Premium Vintage Colors)
              </p>
            </div>

            {/* Interactive Color Picker */}
            <div style={{ background: '#090D14', border: '1px solid #1F293D', borderRadius: '24px', padding: '24px', textAlign: 'center', marginBottom: '28px' }}>
              <span style={{ fontSize: '13px', fontWeight: '800', color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
                CHOOSE YOUR COLOR VARIANT:
              </span>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {classicColors.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedClassicColor(c.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      borderRadius: '30px',
                      border: selectedClassicColor === c.id ? '2px solid #00D26A' : '1px solid #334155',
                      background: selectedClassicColor === c.id ? 'rgba(0,210,106,0.15)' : '#1E293B',
                      color: selectedClassicColor === c.id ? '#00D26A' : '#FFF',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: c.hex, border: '1px solid #FFF' }}></span>
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Poster Main Bike Lineup Image */}
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', border: '1px solid rgba(168, 85, 247, 0.3)', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
              <img 
                src="/classic_retro_scooters.jpg" 
                alt="NK Classic Retro Scooters 5 Colors" 
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '500px', objectFit: 'cover' }}
              />

              {/* Floating Overlay Action Button */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '12px',
                background: 'rgba(9, 13, 20, 0.85)',
                backdropFilter: 'blur(12px)',
                padding: '12px 20px',
                borderRadius: '30px',
                border: '1px solid rgba(168, 85, 247, 0.4)',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <a
                  href={getWaLink(`NK Classic Retro (${selectedClassicColor.toUpperCase()})`, hasePhone2)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#25D366',
                    color: '#000',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '800',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  💬 Inquire Color on WhatsApp
                </a>
                <a
                  href="tel:+919975983387"
                  style={{
                    background: '#C084FC',
                    color: '#000',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '800',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  📞 Call 9975983387
                </a>
              </div>
            </div>

            {/* Highlights in Marathi */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Battery size={28} color="#00D26A" style={{ marginBottom: '8px' }} />
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#FFF' }}>80 - 100 KM मायलेज</div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>एका चार्ज मध्ये लांब पल्ला</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Zap size={28} color="#00D26A" style={{ marginBottom: '8px' }} />
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#FFF' }}>शक्तिशाली BLDC मोटर</div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>उत्कृष्ट परफॉर्मन्स व चढावावर ताकद</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Disc size={28} color="#00D26A" style={{ marginBottom: '8px' }} />
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#FFF' }}>डिस्क ब्रेक सुरक्षितता</div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>कठीण रस्त्यांवर उत्तम ग्रिप</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Sparkles size={28} color="#00D26A" style={{ marginBottom: '8px' }} />
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#FFF' }}>स्टायलिश डिझाईन</div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>मजबूत बॉडी व कमी खर्चात बचत</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ background: '#090D14', border: '1px solid #1F293D', borderRadius: '24px', padding: '28px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: '900', color: '#00D26A', marginBottom: '8px' }}>
                किंमत: ₹ 69,999/-* (विशेष ऑफर उपलब्ध)
              </div>
              <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '24px' }}>
                पत्ता: अगस्ति कॉलेज जवळ, अकोले. संपर्क: हासे बंधू (9975983387 / 7875493982)
              </p>

              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="tel:+919975983387"
                  className="btn-electric"
                  style={{ padding: '14px 28px', fontSize: '15px' }}
                >
                  <Phone size={18} /> कॉल ९९७५९८३३८७
                </a>
                <a
                  href={getWaLink('NK Classic Retro', hasePhone2)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-electric"
                  style={{ padding: '14px 28px', fontSize: '15px', borderColor: '#25D366', color: '#25D366' }}
                >
                  <MessageSquare size={18} /> WhatsApp Inquiry
                </a>
                <button
                  onClick={() => navigateTo('test-ride')}
                  className="btn-electric"
                  style={{ padding: '14px 28px', fontSize: '15px', background: '#C084FC', color: '#000' }}
                >
                  <Calendar size={18} /> बुक टेस्ट राईड
                </button>
              </div>
            </div>
          </div>
        )}

        {/* POSTER 3: ENGINEERED TO LEAD (NK LEAD / BRAVO) */}
        {activeTab === 'lead' && (
          <div style={{
            background: 'linear-gradient(145deg, #1A1308 0%, #090D14 100%)',
            borderRadius: '32px',
            border: '2px solid rgba(234, 179, 8, 0.4)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            padding: '40px',
            position: 'relative'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(234, 179, 8, 0.15)', color: '#FACC15', padding: '8px 24px', borderRadius: '30px', fontSize: '14px', fontWeight: '900', border: '1px solid rgba(234,179,8,0.3)', marginBottom: '12px' }}>
                <ShieldCheck size={20} color="#FACC15" /> 1 YEAR WARRANTY* (MOTOR | CONTROLLER | FRAME)
              </div>
              <h1 style={{ fontSize: '52px', fontWeight: '900', color: '#FFFFFF', letterSpacing: '-0.02em', margin: '0 0 8px' }}>
                ENGINEERED TO <span style={{ color: '#FACC15' }}>LEAD</span>
              </h1>
              <p style={{ fontSize: '16px', color: '#94A3B8', fontWeight: '700', letterSpacing: '2px' }}>
                POWERFUL | RELIABLE | INTELLIGENT | SUSTAINABLE
              </p>
            </div>

            {/* Poster Main Bike Image for Flagship Lead */}
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', border: '1px solid rgba(234, 179, 8, 0.3)', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
              <img 
                src="/engineered_lead_scooter.jpg" 
                alt="Engineered to Lead Flagship Scooter" 
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '520px', objectFit: 'cover' }}
              />

              {/* Floating Action Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '12px',
                background: 'rgba(9, 13, 20, 0.85)',
                backdropFilter: 'blur(12px)',
                padding: '12px 20px',
                borderRadius: '30px',
                border: '1px solid rgba(234, 179, 8, 0.4)',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <a
                  href={getWaLink('NK Engineered to Lead Flagship', hasePhone1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#25D366',
                    color: '#000',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '800',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  💬 WhatsApp 7875493982
                </a>
                <a
                  href={getWaLink('NK Engineered to Lead Flagship', hasePhone2)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#FACC15',
                    color: '#000',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '800',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  💬 WhatsApp 9975983387
                </a>
              </div>
            </div>

            {/* Poster Feature List */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(234, 179, 8, 0.2)', padding: '20px', borderRadius: '20px' }}>
                <Award size={28} color="#FACC15" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#FFF', margin: '0 0 6px' }}>HIGH PERFORMANCE</h4>
                <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>Powerful motor for every journey and steep hills.</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(234, 179, 8, 0.2)', padding: '20px', borderRadius: '20px' }}>
                <Battery size={28} color="#FACC15" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#FFF', margin: '0 0 6px' }}>LONG RANGE BATTERY</h4>
                <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>Up to 150+ KM. Go farther, worry less.</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(234, 179, 8, 0.2)', padding: '20px', borderRadius: '20px' }}>
                <ShieldCheck size={28} color="#FACC15" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#FFF', margin: '0 0 6px' }}>RUGGED & DURABLE</h4>
                <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>Built strong specifically for Indian & Akole roads.</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(234, 179, 8, 0.2)', padding: '20px', borderRadius: '20px' }}>
                <Sparkles size={28} color="#FACC15" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#FFF', margin: '0 0 6px' }}>ZERO EMISSION</h4>
                <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>Cleaner rides for a better tomorrow.</p>
              </div>
            </div>

            {/* Interactive Actions */}
            <div style={{ background: '#090D14', border: '1px solid #1F293D', borderRadius: '24px', padding: '28px', textAlign: 'center' }}>
              <div style={{ fontSize: '22px', fontWeight: '900', color: '#FACC15', marginBottom: '8px' }}>
                FLAGSHIP MODEL: ₹ 1,09,999/-*
              </div>
              <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '24px' }}>
                Hase Brother's • Contact: 7875493982 / 9975983387 • Near Agasti College, Akole
              </p>

              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="tel:+917875493982"
                  className="btn-electric"
                  style={{ padding: '14px 28px', fontSize: '15px', background: '#FACC15', color: '#000' }}
                >
                  <Phone size={18} /> Call 7875493982
                </a>
                <a
                  href={getWaLink('NK Lead Flagship (Engineered to Lead)', hasePhone1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-electric"
                  style={{ padding: '14px 28px', fontSize: '15px', borderColor: '#25D366', color: '#25D366' }}
                >
                  <MessageSquare size={18} /> WhatsApp Inquiry
                </a>
                <button
                  onClick={() => navigateTo('test-ride')}
                  className="btn-electric"
                  style={{ padding: '14px 28px', fontSize: '15px' }}
                >
                  <Calendar size={18} /> Book Free Test Ride
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
