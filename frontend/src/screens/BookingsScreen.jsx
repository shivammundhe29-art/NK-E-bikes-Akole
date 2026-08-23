import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Wrench, Plus, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BikeIllustration } from '../components/BikeIllustrations';

export const BookingsScreen = ({ isMobileView = false }) => {
  const { testRides, services, navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState('test_rides'); // 'test_rides' | 'services'

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return <span className="badge-status badge-completed">Completed</span>;
      case 'cancelled':
        return <span className="badge-status badge-cancelled">Cancelled</span>;
      case 'in progress':
        return <span className="badge-status badge-progress">In Progress</span>;
      default:
        return <span className="badge-status badge-pending">Pending</span>;
    }
  };

  const getBikeModelCode = (bikeName) => {
    if (bikeName?.toLowerCase().includes('nitro')) return 'nitro';
    if (bikeName?.toLowerCase().includes('falcon')) return 'falcon';
    if (bikeName?.toLowerCase().includes('lite')) return 'lite';
    return 'bravo';
  };

  return (
    <div style={{ width: '100%', minHeight: '100%', background: '#F8FAFC', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar matching Screen 9 */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: isMobileView ? '14px 18px' : '16px 28px',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #F1F5F9',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}
      >
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
          My Bookings
        </h2>
      </header>

      {/* Screen Content */}
      <div style={{ padding: isMobileView ? '16px' : '24px 32px', flex: 1, paddingBottom: '90px' }}>
        {/* Tab Switcher matching Screen 9 */}
        <div style={{
          display: 'flex',
          background: '#E2E8F0',
          borderRadius: '14px',
          padding: '4px',
          marginBottom: '20px'
        }}>
          <button
            onClick={() => setActiveTab('test_rides')}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '10px',
              border: 'none',
              background: activeTab === 'test_rides' ? '#00D26A' : 'transparent',
              color: activeTab === 'test_rides' ? '#000000' : '#64748B',
              fontSize: '14px',
              fontWeight: '800',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Test Rides ({testRides.length})
          </button>

          <button
            onClick={() => setActiveTab('services')}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '10px',
              border: 'none',
              background: activeTab === 'services' ? '#00D26A' : 'transparent',
              color: activeTab === 'services' ? '#000000' : '#64748B',
              fontSize: '14px',
              fontWeight: '800',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Services ({services.length})
          </button>
        </div>

        {/* Tab 1: Test Rides List matching Screen 9 */}
        {activeTab === 'test_rides' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {testRides.map((booking) => (
              <div
                key={booking.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  border: '1px solid #F1F5F9',
                  position: 'relative'
                }}
              >
                {/* Bike Thumbnail */}
                <div style={{
                  width: '85px',
                  height: '65px',
                  background: '#F8FAFC',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <BikeIllustration 
                    model={getBikeModelCode(booking.bike_name)} 
                    color="#00D26A" 
                    style={{ width: '75px' }} 
                  />
                </div>

                {/* Booking Information */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#0F172A', margin: 0 }}>
                      {booking.bike_name}
                    </h4>
                    {getStatusBadge(booking.status)}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748B', marginTop: '6px' }}>
                    <Calendar size={13} color="#94A3B8" />
                    <span>{booking.booking_date}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748B', marginTop: '3px' }}>
                    <Clock size={13} color="#94A3B8" />
                    <span>{booking.time_slot}</span>
                  </div>
                </div>
              </div>
            ))}

            {testRides.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px 20px', color: '#94A3B8' }}>
                <p>No test ride bookings yet.</p>
                <button onClick={() => navigateTo('test-ride')} className="btn-electric" style={{ marginTop: '12px' }}>
                  Book a Test Ride
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Service Bookings List */}
        {activeTab === 'services' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {services.map((srv) => (
              <div
                key={srv.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '16px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  border: '1px solid #F1F5F9'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#0F172A', margin: 0 }}>
                      {srv.bike_name}
                    </h4>
                    <span style={{ 
                      fontSize: '11px', 
                      fontWeight: '800', 
                      background: '#F1F5F9', 
                      color: '#334155', 
                      padding: '2px 8px', 
                      borderRadius: '6px',
                      display: 'inline-block',
                      marginTop: '4px'
                    }}>
                      {srv.vehicle_number}
                    </span>
                  </div>
                  {getStatusBadge(srv.status)}
                </div>

                <div style={{ fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
                  {srv.service_type}
                </div>

                {srv.problem_description && (
                  <p style={{ fontSize: '12px', color: '#64748B', margin: '0 0 8px', fontStyle: 'italic' }}>
                    "{srv.problem_description}"
                  </p>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#94A3B8' }}>
                  <Calendar size={13} />
                  <span>Scheduled on: <strong>{srv.preferred_date}</strong></span>
                </div>
              </div>
            ))}

            {services.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px 20px', color: '#94A3B8' }}>
                <p>No service appointments yet.</p>
                <button onClick={() => navigateTo('service')} className="btn-electric" style={{ marginTop: '12px' }}>
                  Schedule Service
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
