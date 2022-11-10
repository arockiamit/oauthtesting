import React from 'react';
import './home.css';
import volume from './volume.png';
import { useState } from 'react';
import song from './audio/siren.mp3';

const siren = new Audio(song);
siren.load();

export default function Home() {
  const [audio, setAudio] = useState(false);
  const sirenaudio = () => {
    if (audio === false) {
      siren.play();
      setAudio(true);
    } else if (audio === true) {
      siren.pause();
      setAudio(false);
    }
  };
  return (
    <div className="homePage">
      <nav className="navBar">
        <button type="button" onClick={sirenaudio} >
          <img src={volume} alt="Alert" />
        </button>
      </nav>
      <div className="alertButton">
        <button className="button" type="button">SOS</button>
      </div>
      <hr/>
      <div className='footer'>
        <a href='/menu'>MENU</a>
      </div>
    </div>
  );
}
