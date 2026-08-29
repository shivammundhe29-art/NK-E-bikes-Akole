const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

// Fallback Initial State matching Demo Screens
export const INITIAL_BIKES = [
  {
    id: 1,
    name: "NK Bravo",
    model_code: "NK-BRAVO-72V",
    tagline: "Maximum Power, Superior Long-Distance Comfort",
    price: 109999,
    range_km: 150,
    top_speed_kmh: 60,
    battery_spec: "72V 32Ah",
    charging_time: "3.5 Hours",
    motor_type: "2500W High Torque BLDC Motor",
    brake_type: "Front & Rear Disc Brakes",
    weight_kg: 88,
    image_url: "bravo",
    color_options: ["#00D26A", "#111827", "#DC2626", "#E2E8F0"],
    features: [
      "Powerful BLDC Motor",
      "Fast Charging",
      "Digital Display",
      "Anti Theft Alarm",
      "Regenerative Braking System",
      "USB Mobile Charging Port"
    ],
    is_popular: true,
    is_active: true
  },
  {
    id: 2,
    name: "NK Nitro",
    model_code: "NK-NITRO-60V",
    tagline: "Agile City Commuter with Dynamic Acceleration",
    price: 89999,
    range_km: 120,
    top_speed_kmh: 55,
    battery_spec: "60V 30Ah",
    charging_time: "3 Hours",
    motor_type: "1800W High Efficiency BLDC Hub Motor",
    brake_type: "Dual Disc Brakes",
    weight_kg: 82,
    image_url: "nitro",
    color_options: ["#10B981", "#0F172A", "#F59E0B"],
    features: [
      "Dual Riding Modes (Eco / Sport)",
      "LED Projector Headlight",
      "Digital Odometer",
      "Tubeless Tyres"
    ],
    is_popular: true,
    is_active: true
  },
  {
    id: 3,
    name: "NK Falcon",
    model_code: "NK-FALCON-72V",
    tagline: "The Ultimate Beast – Extended Range & GPS Tracking",
    price: 119999,
    range_km: 160,
    top_speed_kmh: 70,
    battery_spec: "72V 40Ah",
    charging_time: "4 Hours",
    motor_type: "3000W High Performance BLDC Motor",
    brake_type: "Hydraulic Disc Brakes",
    weight_kg: 92,
    image_url: "falcon",
    color_options: ["#059669", "#1E1B4B", "#DC2626"],
    features: [
      "Dual Battery Support",
      "GPS Tracking & App Connectivity",
      "Cruise Control",
      "Heavy Duty Gas Suspension"
    ],
    is_popular: false,
    is_active: true
  },
  {
    id: 4,
    name: "NK Lite",
    model_code: "NK-LITE-48V",
    tagline: "Ultra Lightweight, Economical & Easy to Handle",
    price: 74999,
    range_km: 100,
    top_speed_kmh: 45,
    battery_spec: "48V 26Ah",
    charging_time: "2.5 Hours",
    motor_type: "1200W Energy Saving Motor",
    brake_type: "Combi Drum & Disc",
    weight_kg: 74,
    image_url: "lite",
    color_options: ["#00D26A", "#64748B", "#F43F5E"],
    features: [
      "Lightweight Frame",
      "Removable Battery",
      "Under-seat Storage 25L",
      "Zero Emission Commute"
    ],
    is_popular: false,
    is_active: true
  }
];

export const INITIAL_SHOWROOM = {
  name: "NK E-BIKES (Hase Brother's)",
  address: "Near Agasti College",
  city: "Akole",
  district: "Ahilyanagar",
  state: "Maharashtra",
  pincode: "422601",
  phone1: "7875493982",
  phone2: "9975983387",
  email: "info@nkebike.com",
  timings: "Mon - Sun : 9:00 AM - 8:00 PM",
  map_link: "https://maps.google.com/?q=Agasti+College+Akole+Maharashtra"
};

export const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    title: "Your test ride is confirmed",
    message: "25 May 2025 - 10:00 AM",
    category: "ride",
    timestamp_label: "2m ago",
    is_read: false
  },
  {
    id: 2,
    title: "Service booking received",
    message: "We will contact you soon",
    category: "service",
    timestamp_label: "15m ago",
    is_read: false
  },
  {
    id: 3,
    title: "New offer available",
    message: "Check out exciting offers!",
    category: "promo",
    timestamp_label: "1d ago",
    is_read: true
  },
  {
    id: 4,
    title: "Thank you for choosing NK E-BIKE!",
    message: "Welcome to NK E-BIKE!",
    category: "info",
    timestamp_label: "2d ago",
    is_read: true
  }
];

export const INITIAL_TEST_RIDES = [
  {
    id: 101,
    bike_name: "NK Bravo",
    booking_date: "25 May 2025",
    time_slot: "10:00 AM - 11:00 AM",
    full_name: "Shivam Mundhe",
    mobile_number: "+91 9270441850",
    address: "K.G. Road, Akole",
    status: "Pending"
  },
  {
    id: 102,
    bike_name: "NK Nitro",
    booking_date: "18 May 2025",
    time_slot: "11:00 AM - 12:00 PM",
    full_name: "Shivam Mundhe",
    mobile_number: "+91 9270441850",
    address: "Nawalewadi, Akole",
    status: "Completed"
  },
  {
    id: 103,
    bike_name: "NK Falcon",
    booking_date: "10 May 2025",
    time_slot: "03:00 PM - 04:00 PM",
    full_name: "Shivam Mundhe",
    mobile_number: "+91 9270441850",
    address: "Akole, Maharashtra",
    status: "Cancelled"
  }
];

export const INITIAL_SERVICES = [
  {
    id: 201,
    bike_name: "NK Bravo",
    vehicle_number: "MH 15 AB 1234",
    service_type: "General Service",
    problem_description: "General inspection and periodic maintenance.",
    preferred_date: "25 May 2025",
    status: "Pending"
  }
];

// Helper fetcher with API and fallback
async function fetchWithFallback(url, options = {}, fallbackData = null) {
  try {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      },
      ...options
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn(`API call ${url} failed, using local state:`, err.message);
  }
  return fallbackData;
}

export const api = {
  // Bikes
  getBikes: async (params = {}) => {
    let query = '';
    const qParts = [];
    if (params.search) qParts.push(`search=${encodeURIComponent(params.search)}`);
    if (params.popular) qParts.push(`popular=true`);
    if (qParts.length > 0) query = `?${qParts.join('&')}`;

    const res = await fetchWithFallback(`/bikes${query}`, {}, INITIAL_BIKES);
    return res || INITIAL_BIKES;
  },
  
  getBikeById: async (id) => {
    const res = await fetchWithFallback(`/bikes/${id}`, {}, null);
    if (res) return res;
    return INITIAL_BIKES.find(b => b.id === parseInt(id)) || INITIAL_BIKES[0];
  },

  // Test Rides
  getTestRides: async (userId) => {
    const res = await fetchWithFallback(`/test-rides${userId ? `?user_id=${userId}` : ''}`, {}, INITIAL_TEST_RIDES);
    return res || INITIAL_TEST_RIDES;
  },

  createTestRide: async (data) => {
    const res = await fetchWithFallback('/test-rides', {
      method: 'POST',
      body: JSON.stringify(data)
    }, { ...data, id: Date.now(), status: "Pending", created_at: new Date().toISOString() });
    return res;
  },

  updateTestRideStatus: async (rideId, status) => {
    return await fetchWithFallback(`/test-rides/${rideId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status })
    }, { success: true, status });
  },

  // Services
  getServices: async (userId) => {
    const res = await fetchWithFallback(`/services${userId ? `?user_id=${userId}` : ''}`, {}, INITIAL_SERVICES);
    return res || INITIAL_SERVICES;
  },

  createService: async (data) => {
    const res = await fetchWithFallback('/services', {
      method: 'POST',
      body: JSON.stringify(data)
    }, { ...data, id: Date.now(), status: "Pending", created_at: new Date().toISOString() });
    return res;
  },

  updateServiceStatus: async (serviceId, status) => {
    return await fetchWithFallback(`/services/${serviceId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status })
    }, { success: true, status });
  },

  // Auth & Profile
  login: async (mobile, password) => {
    const res = await fetchWithFallback('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ mobile_number: mobile, password })
    }, {
      id: 1,
      full_name: "Shivam Mundhe",
      mobile_number: mobile || "+91 9270441850",
      email: "shivam.mundhe@example.com",
      avatar_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      address: "Akole, Maharashtra - 422601"
    });
    return res;
  },

  // Showroom & Enquiries
  getShowroom: async () => {
    const res = await fetchWithFallback('/showroom', {}, INITIAL_SHOWROOM);
    return res || INITIAL_SHOWROOM;
  },

  getEnquiries: async () => {
    const res = await fetchWithFallback('/enquiries', {}, []);
    return res || [];
  },

  submitEnquiry: async (data) => {
    const res = await fetchWithFallback('/enquiries', {
      method: 'POST',
      body: JSON.stringify(data)
    }, { ...data, id: Date.now(), created_at: new Date().toISOString() });
    return res;
  },

  // Notifications
  getNotifications: async (userId) => {
    const res = await fetchWithFallback(`/notifications${userId ? `?user_id=${userId}` : ''}`, {}, INITIAL_NOTIFICATIONS);
    return res || INITIAL_NOTIFICATIONS;
  },

  markNotificationRead: async (id) => {
    return await fetchWithFallback(`/notifications/${id}/read`, { method: 'POST' }, { success: true });
  }
};
