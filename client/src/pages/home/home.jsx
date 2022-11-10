import React from 'react';
import './home.css';
import volume from './volume.png';

export default function Home() {
  return (
    <div className="homePage">
      <nav className="navBar">
        <button type="button">
          <img src={volume} alt="Alert" />
        </button>
      </nav>
      <div className="alertButton">
        <button className="button" type="button">SOS</button>
      </div>
    </div>
  );
}
