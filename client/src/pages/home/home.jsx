/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import './home.css';
import { IoCall } from 'react-icons/io5';
import Webcam from 'react-webcam';
import volume from './volume.png';
import song from './audio/static/siren.mp3';

const WebcamComponent = () => {
  <Webcam />;
};
WebcamComponent();

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
};

const siren = new Audio(song);
siren.load();

export default function Home() {
  const [audio, setAudio] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [location, setLocation] = useState();
  const [mobileNum, setMobileNum] = useState();
  const [picture, setPicture] = useState('');
  const [item, setItem] = useState({ title: '', image: '' });
  const webcamRef = React.useRef(null);
  const token = localStorage.getItem('accesstoken');
  const sirenaudio = () => {
    if (audio === false) {
      siren.play();
      setAudio(true);
    } else if (audio === true) {
      siren.pause();
      setAudio(false);
    }
  };

  useEffect(() => {
    // const getMobileNumber = () => {
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/getCallNumber`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setMobileNum(data.callingNumber);
      });
    // };
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setLocation(`http://maps.google.com/?q=${latitude},${longitude}`);
    });
  });

  const alertMessage = () => {
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/alertMessage`, { method: 'POST', body: JSON.stringify({ token, location }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setMobileNum(data.mobileNum);
      });
  };

  // const sendimage = () => {
  // };

  const capture = async () => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
    // console.log(picture);
    // sendimage();
  };

  console.log(picture);
  fetch('http://localhost:3001/image1', { method: 'POST', body: JSON.stringify({ picture }), headers: { 'content-type': 'application/json' } })
    .then((res) => res.json());

  return (
    <div className="homePage">
      <div className="callalertbtn">
        <div className="callButton">
          <a href={`tel:${mobileNum}`}>
            <IoCall />
          </a>
        </div>
        <div className="alertButton">
          <button type="button" className="alarmBtn" onClick={sirenaudio}>
            <img src={volume} alt="Alert" />
          </button>
        </div>
      </div>
      <div className="messageButton">
        {picture === '' ? (
          <Webcam
            audio={false}
            height={200}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={220}
            videoConstraints={videoConstraints}
          />
        ) : <img src={picture} alt="MY img" />}
        <button className="button" type="button" onClick={() => { alertMessage(); capture(); }}>SOS</button>
      </div>
      <hr />
      <div className="menu">
        <a href="/menu">MENU</a>
      </div>
    </div>
  );
}
