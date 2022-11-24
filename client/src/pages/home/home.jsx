/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import './home.css';
import { IoCall } from 'react-icons/io5';
import Webcam from 'react-webcam';
import toast from 'toast-me';
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
  const [email, setEmail] = useState();
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
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/ViewContact`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
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
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/alertMessage`, { method: 'POST', body: JSON.stringify({ token, location, pictureSrc }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        toast(data.status);
      });
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/imageStoring`, { method: 'POST', body: JSON.stringify({ token, pictureSrc }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setEmail(data.userEmail);
      });
    // localStorage.setItem('image', pictureSrc);
  };

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
        <button className="button" type="button" onClick={() => { alertMessage(); }}>SOS</button>
      </div>
      <hr />
      <div className="menu">
        <a href="/menu">MENU</a>
      </div>
      <div className="web-image">
        {picture === '' ? (
          <Webcam
            audio={false}
            height={300}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
        ) : <img hidden="hidden" src={picture} alt="MY img" />}
      </div>
    </div>
  );
}
