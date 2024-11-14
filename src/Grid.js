// src/components/Grid.js
import React from 'react';
import Thumbnail from './Thumbnail';
import './Grid.css';

const Grid = ({ data }) => (
  <div className="grid">
    {data.map((item, index) => (
      <Thumbnail key={index} title={item.name} imageUrl={`https://test.create.diagnal.com/images/${item.posterImage}`} />
    ))}
  </div>
);

export default Grid;
