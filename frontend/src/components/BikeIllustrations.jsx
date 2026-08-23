import React from 'react';

export const BikeIllustration = ({ 
  model = "bravo", 
  color = "#00D26A", 
  accentColor = "#0F172A",
  className = "", 
  style = {} 
}) => {
  return (
    <div className={`bike-illustration-container ${className}`} style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', ...style }}>
      <svg 
        viewBox="0 0 500 320" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', maxWidth: '380px', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.18))' }}
      >
        <defs>
          {/* Wheel Gradients */}
          <radialGradient id="tireGrad" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0B0F17" />
          </radialGradient>
          <radialGradient id="rimGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="60%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1E293B" />
          </radialGradient>
          
          {/* Body Gloss Gradient */}
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} />
            <stop offset="70%" stopColor={color} />
            <stop offset="100%" stopColor="#052E16" />
          </linearGradient>

          {/* Windshield / Dark Accent */}
          <linearGradient id="darkAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Neon Glow Light */}
          <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E676" />
            <stop offset="100%" stopColor="#69F0AE" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ground Shadow */}
        <ellipse cx="250" cy="285" rx="190" ry="14" fill="rgba(0,0,0,0.18)" />
        <ellipse cx="250" cy="285" rx="140" ry="8" fill="rgba(0,210,106,0.15)" />

        {/* REAR WHEEL */}
        <g id="rear-wheel">
          {/* Outer Tire */}
          <circle cx="120" cy="230" r="54" fill="url(#tireGrad)" stroke="#090D14" strokeWidth="6" />
          {/* Tire Treads */}
          <circle cx="120" cy="230" r="44" stroke="#334155" strokeWidth="2" strokeDasharray="6 4" />
          {/* Alloy Rim */}
          <circle cx="120" cy="230" r="34" fill="url(#rimGrad)" />
          {/* Disc Brake */}
          <circle cx="120" cy="230" r="22" fill="#64748B" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Hub & Spokes */}
          <path d="M120 196 L120 264 M86 230 L154 230 M96 206 L144 254 M96 254 L144 206" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
          <circle cx="120" cy="230" r="10" fill="#0F172A" stroke={color} strokeWidth="2.5" />
        </g>

        {/* FRONT WHEEL */}
        <g id="front-wheel">
          <circle cx="380" cy="230" r="54" fill="url(#tireGrad)" stroke="#090D14" strokeWidth="6" />
          <circle cx="380" cy="230" r="44" stroke="#334155" strokeWidth="2" strokeDasharray="6 4" />
          <circle cx="380" cy="230" r="34" fill="url(#rimGrad)" />
          <circle cx="380" cy="230" r="22" fill="#64748B" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M380 196 L380 264 M346 230 L414 230 M356 206 L404 254 M356 254 L404 206" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
          <circle cx="380" cy="230" r="10" fill="#0F172A" stroke={color} strokeWidth="2.5" />
        </g>

        {/* SUSPENSION & SWINGARM */}
        <path d="M120 230 L180 220 L210 180" stroke="#475569" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M380 230 L345 130" stroke="#64748B" strokeWidth="10" strokeLinecap="round" />
        {/* Front Fender Mudguard */}
        <path d="M340 195 C345 160 385 160 415 190" stroke="url(#bodyGrad)" strokeWidth="12" strokeLinecap="round" />

        {/* MAIN BODY CHASSIS / FLOORBOARD */}
        {/* Underbody */}
        <path d="M140 220 L230 235 L330 235 L310 190 L180 190 Z" fill="#0F172A" />
        {/* Battery Compartment with subtle EV lightning */}
        <rect x="200" y="200" width="90" height="24" rx="6" fill="#1E293B" stroke="rgba(255,255,255,0.1)" />
        <path d="M245 204 L238 214 L246 214 L241 222 L252 211 L244 211 Z" fill={color} />

        {/* REAR BODYWORK / MOTOR COWL */}
        <path 
          d="M105 180 C110 140 160 140 230 160 L240 200 L150 215 C120 210 100 195 105 180 Z" 
          fill="url(#bodyGrad)" 
        />
        {/* Seat / Saddle */}
        <path 
          d="M140 140 C170 135 220 135 275 160 L270 172 C210 152 170 152 135 152 Z" 
          fill="#1E293B" 
          stroke="#0F172A" 
          strokeWidth="3"
        />
        {/* Grab Rail / Luggage Carrier */}
        <path d="M125 150 L105 150 L95 165" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />

        {/* FRONT APRON & HEADLIGHT ASSEMBLY */}
        <path 
          d="M320 225 L360 135 L340 90 L305 130 L290 200 Z" 
          fill="url(#bodyGrad)" 
        />
        {/* Dark Windshield / Instrument Cluster Visor */}
        <path d="M338 90 L350 60 L325 55 L315 85 Z" fill="url(#darkAccent)" />
        {/* Handlebars & Mirrors */}
        <path d="M325 65 L295 62" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
        <path d="M325 65 L345 62" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
        {/* Mirrors */}
        <ellipse cx="290" cy="50" rx="8" ry="5" fill="#334155" stroke="#0F172A" strokeWidth="2" />
        <path d="M295 62 L290 55" stroke="#1E293B" strokeWidth="3" />

        {/* DYNAMIC LED HEADLIGHT (V-Shape Signature) */}
        <path 
          d="M348 115 L358 135 L338 130 Z" 
          fill="#FFFFFF" 
          stroke="#00E676" 
          strokeWidth="2"
          filter="url(#glow)"
        />
        {/* Side Graphic Stripe */}
        <path d="M160 170 L225 180 L205 190 L145 180 Z" fill="rgba(255,255,255,0.25)" />
        <path d="M310 145 L345 140" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        
        {/* Model Badge Text */}
        <text 
          x="165" 
          y="182" 
          fill="#FFFFFF" 
          fontSize="10" 
          fontWeight="900" 
          fontFamily="sans-serif"
          letterSpacing="1.5"
        >
          NK {model.toUpperCase()}
        </text>

        {/* Taillight LED */}
        <rect x="100" y="165" width="6" height="12" rx="3" fill="#EF4444" filter="url(#glow)" />
      </svg>
    </div>
  );
};
