/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { HiHome } from 'react-icons/hi';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './viewnum.css';

export default function ViewNumber() {
  const [Data, setData] = useState('');
  const token = localStorage.getItem('accesstoken');
  const navigate = useNavigate();
  function HomePage() {
    return navigate('/Home');
  }
  function Back() {
    return navigate('/Menu');
  }
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/ViewContact`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="viewRegisteredNumber">
      <h2>VIEW CONTACT NUMBERS</h2>
      { Data.contactNumber1 ? (
        <li className="contactList">
          <p>
            {`${Data.contactName1} - ${Data.contactNumber1}`}
          </p>
        </li>
      ) : ''}
      { Data.contactNumber2 ? (
        <li className="contactList">
          <p>
            {`${Data.contactName2} - ${Data.contactNumber2}`}
          </p>
        </li>
      ) : ''}
      { Data.contactNumber3 ? (
        <li className="contactList">
          <p>
            {`${Data.contactName3} - ${Data.contactNumber3}`}
          </p>
        </li>
      ) : ''}
      <div className="footer">
        <div className="home">
          <button className="clear" type="submit">
            <FaBars />
          </button>
        </div>
        <div className="home">
          <button className="bhome" onClick={HomePage} type="submit">
            <HiHome />
          </button>
        </div>
        <div className="home">
          <button className="back" onClick={Back} type="submit">
            <RiArrowGoBackFill />
          </button>
        </div>
      </div>
    </div>
  );
}
