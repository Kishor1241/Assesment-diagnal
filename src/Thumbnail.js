// src/components/Thumbnail.js
import React from 'react';

const Thumbnail = ({ title, imageUrl }) => (
  <div className="thumbnail">
    <img src={imageUrl} alt={title} loading="lazy" />
    <p>{title}</p>
  </div>
);

export default Thumbnail;
