import React, { useState } from 'react';
import { ArrowLeft, Wrench, Calendar, Hash, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

export const ServiceScreen = ({ isMobileView = false }) => {
  const { bikes, navigateTo, addServiceBooking, showToast } = useApp();
  const { user } = useAuth();

  const [bikeName, setBikeName] = useState('NK Bravo');
  const [vehicleNumber, setVehicleNumber] = useState('MH 15 AB 1234');
  const [serviceType, setServiceType] = useState('General Service');
  const [problemDescription, setProblemDescription] = useState('Periodic inspection and battery diagnostics.');
  const [preferredDate, setPreferredDate] = useState('2025-05-25');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const serviceTypes = [
    'General Service',
    'Battery Health Check & BMS Diagnostic',
    'Brake & Suspension Maintenance',
    'Electrical & Wiring Inspection',
    'Tyre Replacement & Wheel Alignment',
    'Motor & Controller Tuning'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!vehicleNumber.trim()) {
      showToast('Please enter your vehicle number', 'error');
      return;
    }

    setLoading(true);
    const chosenBike = bikes.find(b => b.name === bikeName);

    try {
      await addServiceBooking({
        user_id: user?.id || 1,
        bike_id: chosenBike?.id || 1,
        bike_name: bikeName,
        vehicle_number: vehicleNumber.toUpperCase(),
        service_type: serviceType,
        problem_description: problemDescription,
        preferred_date: preferredDate
      });

      // Format WhatsApp message
      const waText = encodeURIComponent(
        `🔧 *NEW SERVICE BOOKING* 🔧\n\n` +
        `🛵 *Bike:* ${bikeName}\n` +
        `🔢 *Vehicle No:* ${vehicleNumber.toUpperCase()}\n` +
        `🛠️ *Service Type:* ${serviceType}\n` +
        `📝 *Details:* ${problemDescription}\n` +
        `📅 *Preferred Date:* ${preferredDate}\n\n` +
        `Hello Hase Brother's (NK E-Bikes Akole), please confirm my service appointment!`
      );

      // Open WhatsApp directly for 7875493982
      window.open(`https://wa.me/917875493982?text=${waText}`, '_blank');

      try {
        confetti({
          particleCount: 90,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      setIsSubmitted(true);
    } catch (err) {
      showToast('Error booking service appointment', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: '100%', minHeight: '100%', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar matching Screen 8 */}
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
          Book Service
        </h2>
      </header>

      {/* Screen Content */}
      <div style={{ padding: isMobileView ? '20px 18px' : '28px 32px', flex: 1, paddingBottom: '90px' }}>
        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(0, 210, 106, 0.15)',
              color: '#00D26A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#0F172A', marginBottom: '8px' }}>
              Service Appointment Booked!
            </h3>
            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.5', maxWidth: '320px', margin: '0 auto 20px' }}>
              We have reserved a technician slot for <strong>{vehicleNumber}</strong> ({bikeName}) on <strong>{preferredDate}</strong> at NK E-BIKE Service Center, Akole.
            </p>

            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
              padding: '16px',
              textAlign: 'left',
              marginBottom: '24px',
              fontSize: '13px'
            }}>
              <div style={{ color: '#64748B' }}>Service Category:</div>
              <div style={{ fontWeight: '700', color: '#0F172A', marginBottom: '6px' }}>{serviceType}</div>
              <div style={{ color: '#00A853', fontWeight: '600' }}>Technician will inspect within 30 mins of arrival</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button onClick={() => navigateTo('bookings')} className="btn-electric" style={{ width: '100%' }}>
                View in My Bookings
              </button>
              <button onClick={() => setIsSubmitted(false)} className="btn-outline-electric" style={{ width: '100%' }}>
                Book Another Service
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Select Bike matching Screen 8 */}
            <div>
              <label className="form-label-custom">Select Bike</label>
              <select
                value={bikeName}
                onChange={(e) => setBikeName(e.target.value)}
                className="form-input-custom"
                style={{ cursor: 'pointer' }}
              >
                {bikes.map(b => (
                  <option key={b.id} value={b.name}>{b.name}</option>
                ))}
              </select>
            </div>

            {/* Vehicle Number matching Screen 8 */}
            <div>
              <label className="form-label-custom">Vehicle Number</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="MH 15 AB 1234"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                  className="form-input-custom"
                  style={{ paddingLeft: '40px', fontWeight: '700', letterSpacing: '1px' }}
                  required
                />
                <Hash size={16} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '15px' }} />
              </div>
            </div>

            {/* Service Type matching Screen 8 */}
            <div>
              <label className="form-label-custom">Service Type</label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="form-input-custom"
                style={{ cursor: 'pointer' }}
              >
                {serviceTypes.map((st, idx) => (
                  <option key={idx} value={st}>{st}</option>
                ))}
              </select>
            </div>

            {/* Problem Description matching Screen 8 */}
            <div>
              <label className="form-label-custom">Problem Description</label>
              <textarea
                rows={3}
                placeholder="Write problem details..."
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
                className="form-input-custom"
                style={{ resize: 'vertical' }}
              />
            </div>

            {/* Preferred Date matching Screen 8 */}
            <div>
              <label className="form-label-custom">Preferred Date</label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="form-input-custom"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-electric"
              style={{ width: '100%', padding: '14px', fontSize: '15px', marginTop: '12px' }}
            >
              {loading ? 'Submitting Service Request...' : 'Book Service'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
