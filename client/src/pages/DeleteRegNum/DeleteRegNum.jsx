/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

function DeleteRegNumber() {
  const [Data, setData] = useState('');
  const [contactNumber1, setContactNumber1] = useState();
  const [contactNumber2, setContactNumber2] = useState();
  const [contactNumber3, setContactNumber3] = useState();

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/ViewContact`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
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
  }, []);

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
    <div>
      { Data.contactNumber1 ? (
        <li>
          {Data.contactNumber1}
          <button type="button" onClick={deleteContactNumber1}>Delete</button>
        </li>
      ) : ''}
      { Data.contactNumber2 ? (
        <li>
          {Data.contactNumber2}
          <button type="button" onClick={deleteContactNumber2}>Delete</button>
        </li>
      ) : ''}
      { Data.contactNumber3 ? (
        <li>
          {Data.contactNumber3}
          <button type="button" onClick={deleteContactNumber3}>Delete</button>
        </li>
      ) : ''}
    </div>
  );
}

export default DeleteRegNumber;
