/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { HiHome } from 'react-icons/hi';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './DeleteRegNum.css';

function DeleteRegNumber() {
  const [Data, setData] = useState('');
  const [contactNumber1, setContactNumber1] = useState();
  const [contactNumber2, setContactNumber2] = useState();
  const [contactNumber3, setContactNumber3] = useState();

  const token = localStorage.getItem('accesstoken');
  const navigate = useNavigate();
  function HomePage() {
    return navigate('/');
  }
  function Back() {
    return navigate('/Menu');
  }
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/ViewContact`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        if (data.contactNumber1) {
          setContactNumber1(data.contactNumber1);
        }
        if (data.contactNumber2) {
          setContactNumber2(data.contactNumber2);
        }
        if (data.contactNumber3) {
          setContactNumber3(data.contactNumber3);
        }
      });
  }, [token]);

  function deleteContactNumber1(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/deleteContactNumber1`, { method: 'POST', body: JSON.stringify({ token, contactNumber1 }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  function deleteContactNumber2(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/deleteContactNumber2`, { method: 'POST', body: JSON.stringify({ token, contactNumber2 }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  function deleteContactNumber3(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/deleteContactNumber3`, { method: 'POST', body: JSON.stringify({ token, contactNumber3 }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  return (
    <div className="deleteRegisterUser">
      <h2 className="deleteContactNumber">DELETE CONTACT NUMBER</h2>
      { Data.contactNumber1 ? (
        <li className="contactList">
          {Data.contactNumber1}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" className="deleteBtn" onClick={deleteContactNumber1}>Delete</button>
        </li>
      ) : ''}
      { Data.contactNumber2 ? (
        <li className="contactList">
          {Data.contactNumber2}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" className="deleteBtn" onClick={deleteContactNumber2}>Delete</button>
        </li>
      ) : ''}
      { Data.contactNumber3 ? (
        <li className="contactList">
          {Data.contactNumber3}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" className="deleteBtn" onClick={deleteContactNumber3}>Delete</button>
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

export default DeleteRegNumber;
