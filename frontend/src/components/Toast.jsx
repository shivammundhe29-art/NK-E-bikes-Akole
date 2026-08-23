import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Toast = () => {
  const { toast } = useApp();

  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isInfo = toast.type === 'info';

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '80px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 99999,
        background: isSuccess ? '#052E16' : isInfo ? '#1E293B' : '#450A0A',
        color: '#FFFFFF',
        border: `1.5px solid ${isSuccess ? '#00D26A' : isInfo ? '#38BDF8' : '#EF4444'}`,
        boxShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(0,210,106,0.3)',
        borderRadius: '30px',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontSize: '14px',
        fontWeight: '600',
        animation: 'pulseGlow 1.5s ease-in-out',
        maxWidth: '90vw'
      }}
    >
      {isSuccess && <CheckCircle2 size={18} color="#00D26A" />}
      {isInfo && <Info size={18} color="#38BDF8" />}
      {!isSuccess && !isInfo && <AlertCircle size={18} color="#EF4444" />}
      <span>{toast.message}</span>
    </div>
  );
};
