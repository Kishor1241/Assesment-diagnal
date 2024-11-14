import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    style={{
      width: '100%',
      padding: '8px',
      marginBottom: '16px',
      fontSize: '16px'
    }}
  />
);

export default SearchBar;
