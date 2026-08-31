import React, { useState } from 'react';
import { Phone, Lock, Eye, EyeOff, ArrowLeft, CheckCircle2, User, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';

export const AuthScreen = () => {
  const { login } = useAuth();
  const { navigateTo, showToast } = useApp();

  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mobileNumber.trim()) {
      showToast('Please enter your mobile number', 'error');
      return;
    }

    setLoading(true);
    try {
      await login(mobileNumber, password);
      showToast(isRegisterMode ? 'Account registered successfully!' : 'Welcome back to NK E-BIKE!', 'success');
      navigateTo('home');
    } catch (err) {
      showToast('Authentication error', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    login('+91 9270441850', 'google_auth');
    showToast('Logged in with Google', 'success');
    navigateTo('home');
  };

  return (
    <div 
      style={{
        width: '100%',
        minHeight: '100%',
        background: '#FFFFFF',
        color: '#0F172A',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 20px',
        position: 'relative'
      }}
    >
      {/* Top Back Nav */}
      <div style={{ marginBottom: '24px' }}>
        <button
          onClick={() => navigateTo('home')}
          aria-label="Back"
          style={{
            background: '#F1F5F9',
            border: 'none',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#0F172A'
          }}
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#0F172A', margin: 0 }}>
          {isRegisterMode ? 'Create Account' : 'Welcome Back!'}
        </h2>
        <p style={{ fontSize: '13px', color: '#64748B', marginTop: '6px' }}>
          {isRegisterMode ? 'Register to book test rides and track service' : 'Login to continue'}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {isRegisterMode && (
          <div>
            <label className="form-label-custom">Full Name</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Shivam Mundhe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="form-input-custom"
                style={{ paddingLeft: '42px' }}
                required
              />
              <User size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '14px' }} />
            </div>
          </div>
        )}

        <div>
          <label className="form-label-custom">Mobile Number</label>
          <div style={{ position: 'relative' }}>
            <input
              type="tel"
              placeholder="+91 9270441850"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="form-input-custom"
              style={{ paddingLeft: '42px' }}
              required
            />
            <Phone size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '14px' }} />
          </div>
        </div>

        <div>
          <label className="form-label-custom">Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input-custom"
              style={{ paddingLeft: '42px', paddingRight: '42px' }}
              required
            />
            <Lock size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '14px' }} />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
              style={{
                position: 'absolute',
                right: '14px',
                top: '12px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#94A3B8'
              }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {!isRegisterMode && (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={() => showToast('Password reset link sent to registered mobile', 'info')}
              style={{
                background: 'none',
                border: 'none',
                color: '#00D26A',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              Forgot Password?
            </button>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-electric"
          style={{ width: '100%', padding: '14px', fontSize: '15px', marginTop: '6px' }}
        >
          {loading ? 'Processing...' : isRegisterMode ? 'Register' : 'Login'}
        </button>
      </form>

      {/* Divider */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        margin: '22px 0',
        color: '#94A3B8',
        fontSize: '12px',
        fontWeight: '700'
      }}>
        <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
        <span style={{ padding: '0 12px' }}>OR</span>
        <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
      </div>

      {/* Google Login Button matching Screen 3 */}
      <button
        onClick={handleGoogleLogin}
        style={{
          width: '100%',
          padding: '12px 16px',
          borderRadius: '12px',
          border: '1.5px solid #E2E8F0',
          background: '#FFFFFF',
          color: '#334155',
          fontSize: '14px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
        Continue with Google
      </button>

      {/* Switch Mode Toggle */}
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <p style={{ fontSize: '13px', color: '#64748B' }}>
          {isRegisterMode ? 'Already have an account? ' : "Don't have an account? "}
          <button
            type="button"
            onClick={() => setIsRegisterMode(!isRegisterMode)}
            style={{
              background: 'none',
              border: 'none',
              color: '#00D26A',
              fontWeight: '800',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            {isRegisterMode ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
};
