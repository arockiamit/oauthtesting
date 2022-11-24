/* eslint-disable no-console */
import React, { useState } from 'react';

import './image.css';

export default function Imagecapture() {
  // const img = localStorage.getItem('image');
  const [Data, setData] = useState();

  const getImage = () => {
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/getImage/`, { method: 'GET', headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setData(data.image);
      });
  };

  getImage();
  // console.log(img);
  return (
    <img src={Data} alt="img" className="alertcapturedimage" />
  );
}
