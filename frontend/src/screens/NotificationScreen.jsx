import React from 'react';
import { ArrowLeft, Bell, CalendarCheck, Wrench, Sparkles, CheckCircle2, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const NotificationScreen = ({ isMobileView = false }) => {
  const { notifications, markNotificationAsRead, navigateTo, showToast } = useApp();

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'ride':
        return <CalendarCheck size={18} color="#00D26A" />;
      case 'service':
        return <Wrench size={18} color="#3B82F6" />;
      case 'promo':
        return <Sparkles size={18} color="#F59E0B" />;
      default:
        return <CheckCircle2 size={18} color="#10B981" />;
    }
  };

  return (
    <div style={{ width: '100%', minHeight: '100%', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar matching Screen 12 */}
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
            onClick={() => navigateTo('home')}
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
            Notifications
          </h2>
        </div>

        <button
          onClick={() => {
            notifications.forEach(n => markNotificationAsRead(n.id));
            showToast('All notifications marked as read', 'info');
          }}
          style={{
            background: 'none',
            border: 'none',
            color: '#00D26A',
            fontSize: '12px',
            fontWeight: '700',
            cursor: 'pointer'
          }}
        >
          Mark all read
        </button>
      </header>

      {/* Screen Content */}
      <div style={{ padding: isMobileView ? '16px' : '24px 32px', flex: 1, paddingBottom: '90px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {notifications.map((notif) => (
            <div
              key={notif.id}
              onClick={() => markNotificationAsRead(notif.id)}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                padding: '16px',
                borderRadius: '16px',
                background: notif.is_read ? '#FFFFFF' : 'rgba(0, 210, 106, 0.04)',
                border: `1px solid ${notif.is_read ? '#F1F5F9' : 'rgba(0, 210, 106, 0.25)'}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              {/* Category Icon */}
              <div style={{
                background: '#F8FAFC',
                borderRadius: '12px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {getCategoryIcon(notif.category)}
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h4 style={{
                    fontSize: '14px',
                    fontWeight: notif.is_read ? '600' : '800',
                    color: '#0F172A',
                    margin: 0
                  }}>
                    {notif.title}
                  </h4>
                  <span style={{ fontSize: '11px', color: '#94A3B8', marginLeft: '8px' }}>
                    {notif.timestamp_label || 'Just now'}
                  </span>
                </div>

                <p style={{
                  fontSize: '13px',
                  color: '#64748B',
                  margin: '4px 0 0',
                  lineHeight: '1.4'
                }}>
                  {notif.message}
                </p>
              </div>

              {/* Unread indicator dot */}
              {!notif.is_read && (
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#00D26A',
                  position: 'absolute',
                  top: '16px',
                  right: '12px'
                }} />
              )}
            </div>
          ))}

          {notifications.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: '#94A3B8' }}>
              <Bell size={32} opacity={0.5} />
              <p style={{ marginTop: '12px' }}>No notifications yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
