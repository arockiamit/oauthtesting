import React, { useState } from 'react';
import './EditNumber.css';

function EditNumber() {
  const [Data, setData] = useState('');
  const [number, setNumber] = useState([]);
  const token = localStorage.getItem('token');

  fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/ViewContact`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });

  function updatenum() {
    fetch('http://localhost:3001/modify', { method: 'put', body: JSON.stringify({ number }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setNumber(data);
      });
  }

  return (
    <div>
      <table className="tab2" border={2}>
        <tr id="tab2head">
          <tr>
            <th>contactNumber1</th>
            <td>{Data.contactNumber1}</td>
            <td className="update-container"><button type="submit" onClick={updatenum}>✏️</button></td>
          </tr>
          <tr>
            <th>contactNumber2</th>
            <td>{Data.contactNumber2}</td>
            <td className="update-container"><button type="submit" onClick={updatenum}>✏️</button></td>
          </tr>
          <tr>
            <th>contactNumber3</th>
            <td>{Data.contactNumber3}</td>
            <td className="update-container"><button type="submit" onClick={updatenum}>✏️</button></td>
          </tr>
        </tr>
      </table>
    </div>
  );
}

export default EditNumber;
