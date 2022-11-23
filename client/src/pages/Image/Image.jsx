/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import image from './myImg.png';
import './image.css';

export default function Imagecapture() {
  // const img = localStorage.getItem('image');
  // const token = localStorage.getItem('accesstoken');
  // const [Data, setData] = useState();

  // const getImage = () => {
  //   fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/getImage`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.image);
  //       console.log(Data);
  //     });
  // };

  // getImage();
  // console.log(img);
  return (
    <img src={image} alt="img" className="alertcapturedimage" />
  );
}
