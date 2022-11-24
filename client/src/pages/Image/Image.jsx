/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import './image.css';

export default function Imagecapture() {
  // const img = localStorage.getItem('image');
  const [Data, setData] = useState();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/getImage?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.image);
        });
    }
  }, [email]);
  // console.log(img);
  return Data ? (
    <img src={Data} alt="img" className="alertcapturedimage" />
  ) : <span className="no-image">Image not found.</span>;
}
