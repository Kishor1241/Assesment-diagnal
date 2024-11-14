// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#000',
      color: '#FFF',
    }}>
      <button style={{ background: 'none', border: 'none', color: '#FFF', fontSize: '20px', marginRight: '10px' }}>
        ←
      </button>
      <h1 style={{ flex: 1, fontSize: '18px', textAlign: 'center' }}>Romantic Comedy</h1>
      <button style={{ background: 'none', border: 'none', color: '#FFF', fontSize: '20px' }}>
        🔍
      </button>
    </div>
  );
};

export default Navbar;
