import React, { useState } from 'react';
import { 
  User, CalendarCheck, HelpCircle, Heart, Lock, LogOut, ChevronRight, 
  Settings, Phone, Mail, MapPin, Edit3, CheckCircle2 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';

export const ProfileScreen = ({ isMobileView = false }) => {
  const { user, logout, updateUser } = useAuth();
  const { navigateTo, wishlist, testRides, showToast } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.full_name || 'Shivam Mundhe');
  const [phone, setPhone] = useState(user?.mobile_number || '+91 9270441850');
  const [email, setEmail] = useState(user?.email || 'shivam.mundhe@example.com');
  const [address, setAddress] = useState(user?.address || 'Akole, Maharashtra - 422601');

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateUser({
      full_name: name,
      mobile_number: phone,
      email: email,
      address: address
    });
    setIsEditing(false);
    showToast('Profile updated successfully!', 'success');
  };

  const handleLogout = () => {
    logout();
    navigateTo('auth');
    showToast('Logged out', 'info');
  };

  return (
    <div style={{ width: '100%', minHeight: '100%', background: '#F8FAFC', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar matching Screen 10 */}
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
        <div style={{ width: '24px' }}></div>
        <h2 style={{ fontSize: '18px', fontWeight: '800', margin: 0, color: '#0F172A' }}>
          My Profile
        </h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          aria-label="Edit Profile"
          style={{
            background: 'none',
            border: 'none',
            color: '#0F172A',
            cursor: 'pointer',
            padding: '4px'
          }}
        >
          <Settings size={20} />
        </button>
      </header>

      {/* Screen Content */}
      <div style={{ padding: isMobileView ? '20px 18px' : '28px 32px', flex: 1, paddingBottom: '90px' }}>
        {/* User Card matching Screen 10 */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '24px 20px',
          textAlign: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
          border: '1px solid #F1F5F9',
          marginBottom: '24px'
        }}>
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '12px' }}>
            <img
              src={user?.avatar_url || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"}
              alt="Shivam Mundhe"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '3px solid #00D26A',
                objectFit: 'cover'
              }}
            />
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#0F172A', margin: 0 }}>
            {user?.full_name || 'Shivam Mundhe'}
          </h3>
          <p style={{ fontSize: '13px', color: '#64748B', margin: '4px 0 0' }}>
            {user?.mobile_number || '+91 9270441850'}
          </p>
        </div>

        {/* Edit Profile Form if toggle is active */}
        {isEditing ? (
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '20px',
            marginBottom: '20px',
            border: '1px solid #E2E8F0'
          }}>
            <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#0F172A', marginBottom: '14px' }}>
              Edit Profile Info
            </h4>
            <form onSubmit={handleSaveProfile} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label className="form-label-custom">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input-custom"
                  required
                />
              </div>
              <div>
                <label className="form-label-custom">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input-custom"
                  required
                />
              </div>
              <div>
                <label className="form-label-custom">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input-custom"
                />
              </div>
              <div>
                <label className="form-label-custom">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-input-custom"
                />
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: '10px',
                    border: '1px solid #CBD5E1',
                    background: '#F8FAFC',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-electric"
                  style={{ flex: 1, padding: '10px', borderRadius: '10px' }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Profile Menu Options matching Screen 10 */
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
            border: '1px solid #F1F5F9'
          }}>
            {/* My Bookings */}
            <button
              onClick={() => navigateTo('bookings')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid #F1F5F9',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1E293B',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <CalendarCheck size={18} color="#00D26A" />
                <span>My Bookings</span>
              </div>
              <ChevronRight size={18} color="#94A3B8" />
            </button>

            {/* My Enquiries */}
            <button
              onClick={() => showToast('You have 1 active enquiry for NK Bravo', 'info')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid #F1F5F9',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1E293B',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <HelpCircle size={18} color="#3B82F6" />
                <span>My Enquiries</span>
              </div>
              <ChevronRight size={18} color="#94A3B8" />
            </button>

            {/* My Profile */}
            <button
              onClick={() => setIsEditing(true)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid #F1F5F9',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1E293B',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <User size={18} color="#8B5CF6" />
                <span>My Profile</span>
              </div>
              <ChevronRight size={18} color="#94A3B8" />
            </button>

            {/* Saved Bikes */}
            <button
              onClick={() => navigateTo('bikes')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid #F1F5F9',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1E293B',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Heart size={18} color="#EF4444" />
                <span>Saved Bikes ({wishlist.length})</span>
              </div>
              <ChevronRight size={18} color="#94A3B8" />
            </button>

            {/* Change Password */}
            <button
              onClick={() => showToast('Password reset link sent to mobile', 'info')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid #F1F5F9',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1E293B',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Lock size={18} color="#64748B" />
                <span>Change Password</span>
              </div>
              <ChevronRight size={18} color="#94A3B8" />
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: 'none',
                border: 'none',
                fontSize: '14px',
                fontWeight: '700',
                color: '#EF4444',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <LogOut size={18} />
                <span>Logout</span>
              </div>
              <ChevronRight size={18} color="#EF4444" opacity={0.6} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
