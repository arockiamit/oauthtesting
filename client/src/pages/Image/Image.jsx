import React from 'react';
import './image.css';

export default function Imagecapture() {
  const img = localStorage.getItem('image');
  // console.log(img);
  return (
    <img src={img} alt="img" className="alertcapturedimage" />
  );
}
