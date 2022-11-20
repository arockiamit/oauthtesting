/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import './home.css';
import volume from './volume.png';
import song from './audio/static/siren.mp3';

const siren = new Audio(song);
siren.load();

export default function Home() {
  const [audio, setAudio] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [location, setLocation] = useState();
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
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
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
      });
  };

  return (
    <div className="homePage">
      <div className="alertButton">
        <button type="button" className="alarmBtn" onClick={sirenaudio}>
          <img src={volume} alt="Alert" />
        </button>
      </div>
      <div className="messageButton">
        <button className="button" type="button" onClick={() => { alertMessage(); }}>SOS</button>
      </div>
      <hr />
      <div className="menu">
        <a href="/menu">MENU</a>
      </div>
    </div>
  );
}
