/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import './ViewNumber.css';

export default function ViewNumber() {
  const [Data, setData] = useState('');
  const token = localStorage.getItem('token');
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/ViewContact`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [token]);

  return (
    <div>
      <h2>Registerd Numbers</h2>
      { Data.contactNumber1 ? (
        <p>
          <h3>Contact Number 1</h3>
          {Data.contactNumber1}
        </p>
      ) : ''}
      { Data.contactNumber2 ? (
        <p>
          <h3>Contact Number 1</h3>
          {Data.contactNumber2}
        </p>
      ) : ''}
      { Data.contactNumber3 ? (
        <p>
          <h3>Contact Number 1</h3>
          {Data.contactNumber3}
        </p>
      ) : ''}
    </div>
  );
}
