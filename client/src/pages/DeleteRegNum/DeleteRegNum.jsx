import React, { useState } from 'react';

function DeleteRegNumber() {
  const [Data, setData] = useState('');
  const token = localStorage.getItem('token');

  fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/ViewContact`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });

  function removenum() {
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/remove`, { method: 'delete', headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  return (
    <div>
      <table className="tab2" border={2}>
        <tr id="tab2head">
          <tr>
            <th>contactNumber1</th>
            <td>{Data.contactNumber1}</td>
            <td className="update-container"><button type="submit" onClick={removenum}>🗑️</button></td>
          </tr>
          <tr>
            <th>contactNumber2</th>
            <td>{Data.contactNumber2}</td>
            <td className="update-container"><button type="submit" onClick={removenum}>🗑️</button></td>
          </tr>
          <tr>
            <th>contactNumber3</th>
            <td>{Data.contactNumber3}</td>
            <td className="update-container"><button type="submit" onClick={removenum}>🗑️</button></td>
          </tr>
        </tr>
      </table>
    </div>
  );
}

export default DeleteRegNumber;
