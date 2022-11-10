/* eslint-disable no-console */
import React, { useState } from 'react';

import './ViewNumber.css';

function ViewNumber() {
  const [Data, setData] = useState('');
  const token = localStorage.getItem('token');
  function viewnum(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/ViewContact`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }

  return (
    <div className="content">
      <h1 id="title1">Safety App</h1>
      <h3 id="title2">click to view numbers </h3>
      <button id="viewbtn" type="submit" onClick={viewnum}>Show</button>
      <br />

      <table className="tab1" border={2}>
        <tr id="tab1head">
          <tr>
            <th>User</th>
            <td>{Data.userName}</td>
          </tr>
          <tr>
            <th>contactNumber1</th>
            <td>{Data.contactNumber1}</td>
          </tr>
          <tr>
            <th>contactNumber2</th>
            <td>{Data.contactNumber2}</td>
          </tr>
          <tr>
            <th>contactNumber3</th>
            <td>{Data.contactNumber3}</td>
          </tr>
        </tr>
      </table>
    </div>
  );
}

export default ViewNumber;
