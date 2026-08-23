import React, { useState } from 'react';
import { Filter, SlidersHorizontal, ArrowLeft, Search, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Navbar } from '../components/Navbar';
import { BikeCard } from '../components/BikeCard';

export const BikesListScreen = ({ isMobileView = false }) => {
  const { bikes, navigateTo, searchQuery, setSearchQuery } = useApp();
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [maxPrice, setMaxPrice] = useState(130000);
  const [minRange, setMinRange] = useState(0);

  const filteredBikes = bikes.filter(bike => {
    const matchesSearch = 
      bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.battery_spec.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = bike.price <= maxPrice;
    const matchesRange = bike.range_km >= minRange;
    return matchesSearch && matchesPrice && matchesRange;
  });

  return (
    <div style={{ width: '100%', minHeight: '100%', background: '#F8FAFC' }}>
      {/* Top Navbar */}
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
            aria-label="Back to Home"
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
            All E-Bikes
          </h2>
        </div>

        {/* Filter Trigger Button */}
        <button
          onClick={() => setShowFilterModal(!showFilterModal)}
          aria-label="Filter"
          style={{
            background: showFilterModal ? 'rgba(0, 210, 106, 0.15)' : 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            color: showFilterModal ? '#00D26A' : '#0F172A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Filter size={20} />
        </button>
      </header>

      <div style={{ padding: isMobileView ? '16px' : '24px 32px' }}>
        {/* Search Input */}
        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <input
            type="text"
            placeholder="Search bike by name or specs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input-custom"
            style={{
              paddingLeft: '42px',
              paddingRight: '36px',
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              height: '46px'
            }}
          />
          <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '14px' }} />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '12px',
                top: '12px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#94A3B8'
              }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filter Drawer / Panel */}
        {showFilterModal && (
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '16px 20px',
            marginBottom: '20px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '800', margin: 0, color: '#0F172A' }}>
                Filter Catalog
              </h4>
              <button
                onClick={() => { setMaxPrice(130000); setMinRange(0); }}
                style={{ background: 'none', border: 'none', color: '#00D26A', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}
              >
                Reset
              </button>
            </div>

            {/* Price Filter Slider */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
                <span>Max Price:</span>
                <strong style={{ color: '#00D26A' }}>₹ {maxPrice.toLocaleString('en-IN')}</strong>
              </div>
              <input
                type="range"
                min="70000"
                max="130000"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#00D26A' }}
              />
            </div>

            {/* Min Range Filter */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
                <span>Minimum Range:</span>
                <strong style={{ color: '#00D26A' }}>{minRange} KM+</strong>
              </div>
              <input
                type="range"
                min="0"
                max="160"
                step="10"
                value={minRange}
                onChange={(e) => setMinRange(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#00D26A' }}
              />
            </div>
          </div>
        )}

        {/* Results Counter */}
        <div style={{ fontSize: '13px', fontWeight: '700', color: '#64748B', marginBottom: '14px' }}>
          Showing {filteredBikes.length} E-Bike Models
        </div>

        {/* Bikes List matching Screen 5 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredBikes.map(bike => (
            <BikeCard key={bike.id} bike={bike} layout="horizontal" />
          ))}
          {filteredBikes.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: '#94A3B8' }}>
              <p>No bikes match the selected criteria.</p>
              <button
                onClick={() => { setSearchQuery(''); setMaxPrice(130000); setMinRange(0); }}
                className="btn-outline-electric"
                style={{ marginTop: '12px' }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
