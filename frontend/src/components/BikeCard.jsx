import React from 'react';
import { Heart, Zap, ArrowRight, Gauge, BatteryCharging } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BikeIllustration } from './BikeIllustrations';

export const BikeCard = ({ bike, layout = 'vertical', onSelect = null }) => {
  const { navigateTo, wishlist, toggleWishlist } = useApp();
  const isWishlisted = wishlist.includes(bike.id);

  const handleClick = () => {
    if (onSelect) {
      onSelect(bike);
    } else {
      navigateTo('bike-detail', bike);
    }
  };

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(bike.price);

  if (layout === 'horizontal') {
    // Used in Screen 5: All E-Bikes list
    return (
      <div 
        onClick={handleClick}
        style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
          border: '1px solid #F1F5F9',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
          position: 'relative'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)';
        }}
      >
        {/* Thumbnail Image */}
        <div style={{
          width: '100px',
          height: '75px',
          background: '#F8FAFC',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <BikeIllustration 
            model={bike.image_url || "bravo"} 
            color={bike.color_options ? bike.color_options[0] : "#00D26A"} 
            style={{ width: '90px' }} 
          />
        </div>

        {/* Info */}
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: '16px', fontWeight: '800', margin: 0, color: '#0F172A' }}>
            {bike.name}
          </h4>
          <div style={{ fontSize: '15px', fontWeight: '900', color: '#00D26A', margin: '3px 0' }}>
            {formattedPrice}
          </div>
          <div style={{ fontSize: '12px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Range <strong>{bike.range_km} km</strong></span>
            <span>•</span>
            <span>{bike.top_speed_kmh} km/h</span>
          </div>
        </div>

        {/* Favorite Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(bike.id);
          }}
          aria-label="Save Bike"
          style={{
            background: 'none',
            border: 'none',
            color: isWishlisted ? '#EF4444' : '#CBD5E1',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          <Heart size={20} fill={isWishlisted ? '#EF4444' : 'none'} />
        </button>
      </div>
    );
  }

  // Vertical card (Screen 4: Popular Models & Web Grid)
  return (
    <div 
      onClick={handleClick}
      style={{
        background: '#FFFFFF',
        borderRadius: '18px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
        border: '1px solid #F1F5F9',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        position: 'relative',
        minWidth: '150px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,210,106,0.15)';
        e.currentTarget.style.borderColor = 'rgba(0,210,106,0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.05)';
        e.currentTarget.style.borderColor = '#F1F5F9';
      }}
    >
      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(bike.id);
        }}
        aria-label="Save Bike"
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '50%',
          border: 'none',
          color: isWishlisted ? '#EF4444' : '#94A3B8',
          cursor: 'pointer',
          padding: '6px',
          zIndex: 2
        }}
      >
        <Heart size={16} fill={isWishlisted ? '#EF4444' : 'none'} />
      </button>

      {/* Bike Image */}
      <div style={{
        background: '#F8FAFC',
        borderRadius: '14px',
        padding: '10px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '12px'
      }}>
        <BikeIllustration 
          model={bike.image_url || "bravo"} 
          color={bike.color_options ? bike.color_options[0] : "#00D26A"} 
        />
      </div>

      {/* Bike Details */}
      <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#0F172A', marginBottom: '2px' }}>
        {bike.name}
      </h4>
      <div style={{ fontSize: '14px', fontWeight: '900', color: '#00D26A' }}>
        {formattedPrice}
      </div>
      <div style={{ fontSize: '11px', color: '#64748B', marginTop: '4px' }}>
        ⚡ Range {bike.range_km} km
      </div>
    </div>
  );
};
