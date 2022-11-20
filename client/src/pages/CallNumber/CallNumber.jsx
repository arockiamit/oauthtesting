import React, { useState } from 'react';
import { HiHome } from 'react-icons/hi';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './CallNumber.css';

function AddCallNumber() {
  const [userName, setUsername] = useState('');
  const [mobileNum, setNumber] = useState();
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('accesstoken');
  const navigate = useNavigate();
  function HomePage() {
    return navigate('/');
  }
  function Back() {
    return navigate('/Menu');
  }

  const callNum = (e) => {
    e.preventDefault();
    if (userName === '' && mobileNum === '') {
      setMessage('Please Enter Fields..');
    } else {
      fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/callNumbers`, { method: 'POST', body: JSON.stringify({ token, mobileNum }), headers: { 'content-type': 'application/json' } })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 'success') {
            setNumber('');
            setUsername('');
          }
          setMessage(data.status);
        });
    }
  };
  return (
    <div className="callNumber">
      <h1>ADD CONTACT NUMBER</h1>
      <form className="registerForm">
        <input
          className="registerUserName"
          type="text"
          name="username"
          value={userName}
          placeholder="Name"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className="registerUserNumber"
          type="number"
          name="mobile number"
          value={mobileNum}
          placeholder="Contact Number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <h3>{message}</h3>
        <button type="submit" className="registerUserButton" onClick={callNum}>SAVE</button>
      </form>
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

export default AddCallNumber;
