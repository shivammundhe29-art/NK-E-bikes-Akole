import React, { useState } from 'react';

export const BikeIllustration = ({ 
  model = "bravo", 
  color = "#00D26A", 
  accentColor = "#0F172A",
  className = "", 
  style = {} 
}) => {
  const [imgError, setImgError] = useState(false);

  const modelKey = model.toLowerCase().replace('nk ', '').trim();
  const imagePath = `./images/${modelKey}.jpg`;

  if (!imgError) {
    return (
      <div 
        className={`bike-illustration-container ${className}`} 
        style={{ 
          width: '100%', 
          height: '200px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          overflow: 'hidden',
          borderRadius: '16px',
          ...style 
        }}
      >
        <img 
          src={imagePath} 
          alt={`NK ${model}`}
          onError={() => setImgError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 12px 20px rgba(0,210,106,0.25))',
            transition: 'transform 0.3s ease'
          }}
        />
      </div>
    );
  }

  // Fallback Vector SVG
  return (
    <div className={`bike-illustration-container ${className}`} style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', ...style }}>
      <svg 
        viewBox="0 0 500 320" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', maxWidth: '380px', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.18))' }}
      >
        <defs>
          <radialGradient id="tireGrad" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0B0F17" />
          </radialGradient>
          <radialGradient id="rimGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="60%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1E293B" />
          </radialGradient>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} />
            <stop offset="70%" stopColor={color} />
            <stop offset="100%" stopColor="#052E16" />
          </linearGradient>
        </defs>

        <ellipse cx="250" cy="285" rx="190" ry="14" fill="rgba(0,0,0,0.18)" />
        <ellipse cx="250" cy="285" rx="140" ry="8" fill="rgba(0,210,106,0.15)" />

        <g id="rear-wheel">
          <circle cx="120" cy="230" r="54" fill="url(#tireGrad)" stroke="#090D14" strokeWidth="6" />
          <circle cx="120" cy="230" r="34" fill="url(#rimGrad)" />
          <circle cx="120" cy="230" r="10" fill="#0F172A" stroke={color} strokeWidth="2.5" />
        </g>

        <g id="front-wheel">
          <circle cx="380" cy="230" r="54" fill="url(#tireGrad)" stroke="#090D14" strokeWidth="6" />
          <circle cx="380" cy="230" r="34" fill="url(#rimGrad)" />
          <circle cx="380" cy="230" r="10" fill="#0F172A" stroke={color} strokeWidth="2.5" />
        </g>

        <path d="M105 180 C110 140 160 140 230 160 L240 200 L150 215 C120 210 100 195 105 180 Z" fill="url(#bodyGrad)" />
        <path d="M320 225 L360 135 L340 90 L305 130 L290 200 Z" fill="url(#bodyGrad)" />
        
        <text x="165" y="182" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="sans-serif">
          NK {model.toUpperCase()}
        </text>
      </svg>
    </div>
  );
};

