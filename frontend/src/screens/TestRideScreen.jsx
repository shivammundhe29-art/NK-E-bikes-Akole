import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Phone, MapPin, CheckCircle2, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

export const TestRideScreen = ({ isMobileView = false }) => {
  const { bikes, selectedBike, navigateTo, addTestRideBooking, showToast } = useApp();
  const { user } = useAuth();

  const [bikeName, setBikeName] = useState(selectedBike?.name || 'NK Bravo');
  const [bookingDate, setBookingDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 11:00 AM');
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '01:00 PM - 02:00 PM',
    '03:00 PM - 04:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM'
  ];

  const todayDate = new Date().toISOString().split('T')[0];

  const handleNameChange = (e) => {
    // Only allow letters and spaces
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFullName(val);
  };

  const handleMobileChange = (e) => {
    // Only allow digits up to 10 characters
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation checks
    const trimmedName = fullName.trim();
    if (!trimmedName || trimmedName.length < 3) {
      showToast('Please enter a valid full name (at least 3 letters)', 'error');
      return;
    }

    if (!mobileNumber || !/^[6-9]\d{9}$/.test(mobileNumber)) {
      showToast('Please enter a valid 10-digit mobile number starting with 6-9', 'error');
      return;
    }

    if (!bookingDate) {
      showToast('Please select a test ride date', 'error');
      return;
    }

    if (bookingDate < todayDate) {
      showToast('Please select today or a future date', 'error');
      return;
    }

    setLoading(true);
    const chosenBike = bikes.find(b => b.name === bikeName) || selectedBike;
    
    try {
      await addTestRideBooking({
        user_id: user?.id || 1,
        bike_id: chosenBike?.id || 1,
        bike_name: bikeName,
        booking_date: bookingDate,
        time_slot: timeSlot,
        full_name: trimmedName,
        mobile_number: `+91 ${mobileNumber}`,
        address: address
      });

      // Format WhatsApp message
      const waText = encodeURIComponent(
        `⚡ *NEW TEST RIDE BOOKING* ⚡\n\n` +
        `🛵 *Bike Model:* ${bikeName}\n` +
        `📅 *Date:* ${bookingDate}\n` +
        `⏰ *Time Slot:* ${timeSlot}\n` +
        `👤 *Customer Name:* ${trimmedName}\n` +
        `📱 *Mobile:* +91 ${mobileNumber}\n` +
        `📍 *Address:* ${address || 'Akole, Maharashtra'}\n\n` +
        `Hello Hase Brother's (NK E-Bikes Akole), please confirm my test ride appointment!`
      );

      // Open WhatsApp directly for primary contact number 7875493982
      window.open(`https://wa.me/917875493982?text=${waText}`, '_blank');

      // Confetti burst
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      setIsSubmitted(true);
    } catch (err) {
      showToast('Error booking test ride', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: '100%', minHeight: '100%', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar matching Screen 7 */}
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
          Book Test Ride
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
              Test Ride Booked!
            </h3>
            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.5', maxWidth: '320px', margin: '0 auto 20px' }}>
              Your test ride slot for <strong>{bikeName}</strong> on <strong>{bookingDate}</strong> ({timeSlot}) is registered at NK E-BIKE Showroom Akole.
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
              <div style={{ color: '#64748B', marginBottom: '4px' }}>Showroom Venue:</div>
              <div style={{ fontWeight: '700', color: '#0F172A' }}>NK E-BIKES (Hase Brother's), Near Agasti College, Akole</div>
              <div style={{ color: '#00A853', fontWeight: '600', marginTop: '6px' }}>Status: Pending Confirmation</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={`https://wa.me/917875493982?text=${encodeURIComponent(`⚡ *TEST RIDE BOOKING* ⚡\n🛵 Bike: ${bikeName}\n📅 Date: ${bookingDate}\n⏰ Time: ${timeSlot}\n👤 Name: ${fullName}\n📱 Mobile: ${mobileNumber}\n📍 Address: ${address}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-electric"
                style={{ width: '100%', textDecoration: 'none', background: '#25D366' }}
              >
                💬 Send Message to 7875493982
              </a>
              <a
                href={`https://wa.me/919975983387?text=${encodeURIComponent(`⚡ *TEST RIDE BOOKING* ⚡\n🛵 Bike: ${bikeName}\n📅 Date: ${bookingDate}\n⏰ Time: ${timeSlot}\n👤 Name: ${fullName}\n📱 Mobile: ${mobileNumber}\n📍 Address: ${address}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-electric"
                style={{ width: '100%', textDecoration: 'none', background: '#25D366' }}
              >
                💬 Send Message to 9975983387
              </a>
              <button onClick={() => setIsSubmitted(false)} className="btn-outline-electric" style={{ width: '100%' }}>
                Book Another Ride
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Select Bike matching Screen 7 */}
            <div>
              <label className="form-label-custom">Select Bike</label>
              <div style={{ position: 'relative' }}>
                <select
                  value={bikeName}
                  onChange={(e) => setBikeName(e.target.value)}
                  className="form-input-custom"
                  style={{ appearance: 'none', cursor: 'pointer' }}
                >
                  {bikes.map(b => (
                    <option key={b.id} value={b.name}>
                      {b.name} (₹ {b.price.toLocaleString('en-IN')}) - {b.range_km} km Range
                    </option>
                  ))}
                </select>
                <Zap size={16} color="#00D26A" style={{ position: 'absolute', right: '14px', top: '16px', pointerEvents: 'none' }} />
              </div>
            </div>

            {/* Select Date matching Screen 7 */}
            <div>
              <label className="form-label-custom">Select Date</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="date"
                  min={todayDate}
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="form-input-custom"
                  required
                />
              </div>
            </div>

            {/* Select Time Slot matching Screen 7 */}
            <div>
              <label className="form-label-custom">Select Time</label>
              <div style={{ position: 'relative' }}>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="form-input-custom"
                  style={{ appearance: 'none', cursor: 'pointer' }}
                >
                  {timeSlots.map((slot, idx) => (
                    <option key={idx} value={slot}>{slot}</option>
                  ))}
                </select>
                <Clock size={16} color="#94A3B8" style={{ position: 'absolute', right: '14px', top: '16px', pointerEvents: 'none' }} />
              </div>
            </div>

            {/* Full Name matching Screen 7 */}
            <div>
              <label className="form-label-custom">Full Name</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Enter your name (e.g. Rahul Sharma)"
                  value={fullName}
                  onChange={handleNameChange}
                  className="form-input-custom"
                  style={{ paddingLeft: '40px' }}
                  required
                />
                <User size={16} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '15px' }} />
              </div>
            </div>

            {/* Mobile Number matching Screen 7 */}
            <div>
              <label className="form-label-custom">Mobile Number</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="tel"
                  placeholder="10-digit mobile number (e.g. 9876543210)"
                  value={mobileNumber}
                  onChange={handleMobileChange}
                  maxLength={10}
                  className="form-input-custom"
                  style={{ paddingLeft: '40px' }}
                  required
                />
                <Phone size={16} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '15px' }} />
              </div>
            </div>

            {/* Address matching Screen 7 */}
            <div>
              <label className="form-label-custom">Address / Location</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Enter your address in Akole / nearby"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-input-custom"
                  style={{ paddingLeft: '40px' }}
                />
                <MapPin size={16} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '15px' }} />
              </div>
            </div>

            {/* Submit Button matching Screen 7 */}
            <button
              type="submit"
              disabled={loading}
              className="btn-electric"
              style={{ width: '100%', padding: '14px', fontSize: '15px', marginTop: '12px' }}
            >
              {loading ? 'Registering Booking...' : 'Book Test Ride'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
