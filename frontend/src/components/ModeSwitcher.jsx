import React from 'react';
import { Smartphone, Monitor, Grid, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ModeSwitcher = () => {
  const { viewMode, setViewMode } = useApp();

  return (
    <div 
      className="view-mode-bar"
      style={{
        background: '#0F172A',
        borderBottom: '1px solid #1E293B',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        zIndex: 900
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ 
          background: '#00D26A', 
          color: '#000', 
          fontSize: '10px', 
          fontWeight: '900', 
          padding: '2px 8px', 
          borderRadius: '20px' 
        }}>
          LIVE DEMO
        </span>
        <span style={{ fontSize: '13px', fontWeight: '600', color: '#94A3B8' }}>
          NK E-BIKE AKOLE (FastAPI + React + PostgreSQL)
        </span>
      </div>

      {/* Switcher Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#1E293B', padding: '4px', borderRadius: '30px' }}>
        <button
          onClick={() => setViewMode('web')}
          style={{
            background: viewMode === 'web' ? '#00D26A' : 'transparent',
            color: viewMode === 'web' ? '#000' : '#94A3B8',
            border: 'none',
            borderRadius: '20px',
            padding: '6px 14px',
            fontSize: '12px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <Monitor size={14} /> Full Web App
        </button>

        <button
          onClick={() => setViewMode('mobile')}
          style={{
            background: viewMode === 'mobile' ? '#00D26A' : 'transparent',
            color: viewMode === 'mobile' ? '#000' : '#94A3B8',
            border: 'none',
            borderRadius: '20px',
            padding: '6px 14px',
            fontSize: '12px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <Smartphone size={14} /> Mobile App Simulator
        </button>

        <button
          onClick={() => setViewMode('all_screens')}
          style={{
            background: viewMode === 'all_screens' ? '#00D26A' : 'transparent',
            color: viewMode === 'all_screens' ? '#000' : '#94A3B8',
            border: 'none',
            borderRadius: '20px',
            padding: '6px 14px',
            fontSize: '12px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <Grid size={14} /> All 13 Screens Grid
        </button>
      </div>
    </div>
  );
};
