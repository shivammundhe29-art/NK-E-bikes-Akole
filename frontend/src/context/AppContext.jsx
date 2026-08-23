import React, { createContext, useContext, useState, useEffect } from 'react';
import { api, INITIAL_BIKES, INITIAL_SHOWROOM, INITIAL_NOTIFICATIONS, INITIAL_TEST_RIDES, INITIAL_SERVICES } from '../services/api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Navigation State
  const [currentScreen, setCurrentScreen] = useState('home'); // splash, onboarding, auth, home, bikes, bike-detail, test-ride, service, bookings, profile, showroom, notifications
  const [activeBottomTab, setActiveBottomTab] = useState('home');
  const [selectedBike, setSelectedBike] = useState(INITIAL_BIKES[0]); // default NK Bravo
  const [selectedBikeColor, setSelectedBikeColor] = useState('#00D26A');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [viewMode, setViewMode] = useState('both'); // 'responsive_web', 'mobile_demo', 'both'

  // Data State
  const [bikes, setBikes] = useState(INITIAL_BIKES);
  const [testRides, setTestRides] = useState(INITIAL_TEST_RIDES);
  const [services, setServices] = useState(INITIAL_SERVICES);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [showroomInfo, setShowroomInfo] = useState(INITIAL_SHOWROOM);
  const [wishlist, setWishlist] = useState([1]); // Default saved bike: Bravo (id: 1)
  const [searchQuery, setSearchQuery] = useState('');
  
  // Toast state
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Load bikes from backend
  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedBikes = await api.getBikes();
        if (fetchedBikes && fetchedBikes.length > 0) setBikes(fetchedBikes);

        const fetchedShowroom = await api.getShowroom();
        if (fetchedShowroom) setShowroomInfo(fetchedShowroom);

        const fetchedNotifs = await api.getNotifications();
        if (fetchedNotifs) setNotifications(fetchedNotifs);
      } catch (e) {
        console.log('Using initial state');
      }
    };
    loadData();
  }, []);

  // Navigate helper
  const navigateTo = (screen, bikeObj = null) => {
    if (bikeObj) {
      setSelectedBike(bikeObj);
      if (bikeObj.color_options && bikeObj.color_options.length > 0) {
        setSelectedBikeColor(bikeObj.color_options[0]);
      }
    }
    setCurrentScreen(screen);
    setIsDrawerOpen(false);

    // Sync bottom tab if matching
    if (['home', 'bikes', 'service', 'bookings', 'profile'].includes(screen)) {
      setActiveBottomTab(screen);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleWishlist = (bikeId) => {
    setWishlist(prev => {
      const isSaved = prev.includes(bikeId);
      if (isSaved) {
        showToast('Removed from Saved Bikes', 'info');
        return prev.filter(id => id !== bikeId);
      } else {
        showToast('Added to Saved Bikes!', 'success');
        return [...prev, bikeId];
      }
    });
  };

  // Booking handlers
  const addTestRideBooking = async (bookingData) => {
    const result = await api.createTestRide(bookingData);
    setTestRides(prev => [result, ...prev]);
    
    // Add local notification
    const newNotif = {
      id: Date.now(),
      title: "Test Ride Requested",
      message: `Your test ride for ${bookingData.bike_name} on ${bookingData.booking_date} (${bookingData.time_slot}) has been scheduled!`,
      category: "ride",
      timestamp_label: "Just now",
      is_read: false
    };
    setNotifications(prev => [newNotif, ...prev]);
    showToast(`Test ride for ${bookingData.bike_name} booked successfully!`, 'success');
    return result;
  };

  const addServiceBooking = async (serviceData) => {
    const result = await api.createService(serviceData);
    setServices(prev => [result, ...prev]);

    const newNotif = {
      id: Date.now(),
      title: "Service Booking Received",
      message: `Service request for ${serviceData.bike_name} (${serviceData.vehicle_number}) received for ${serviceData.preferred_date}.`,
      category: "service",
      timestamp_label: "Just now",
      is_read: false
    };
    setNotifications(prev => [newNotif, ...prev]);
    showToast(`Service appointment booked for ${serviceData.preferred_date}!`, 'success');
    return result;
  };

  const markNotificationAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, is_read: true } : n));
    api.markNotificationRead(id);
  };

  const unreadNotificationsCount = notifications.filter(n => !n.is_read).length;

  return (
    <AppContext.Provider value={{
      currentScreen,
      setCurrentScreen,
      navigateTo,
      activeBottomTab,
      setActiveBottomTab,
      selectedBike,
      setSelectedBike,
      selectedBikeColor,
      setSelectedBikeColor,
      isDrawerOpen,
      setIsDrawerOpen,
      viewMode,
      setViewMode,
      bikes,
      testRides,
      services,
      notifications,
      unreadNotificationsCount,
      markNotificationAsRead,
      showroomInfo,
      wishlist,
      toggleWishlist,
      searchQuery,
      setSearchQuery,
      addTestRideBooking,
      addServiceBooking,
      toast,
      showToast
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
