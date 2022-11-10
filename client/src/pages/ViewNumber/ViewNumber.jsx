import React from "react";
import { useState } from "react";
import './viewNumber.css';


export default function ViewNumber() {

  const [data, setData] = useState([]);
  function viewnum(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/search`, { method: 'get', headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  return (
    <div className="viewPage">

      <button id='viewbtn' onClick={viewnum}>Show</button><br />

      <table className="viewTable" >
        {data.map(({ userName, userMobileNumber, contactNumber1, contactNumber2, contactNumber3, callingNumber },index) =>
          <tr className='tableRows' key={index.id}>
            <tr>
              <th>User</th>
              <td>{userName}</td>
            </tr>
            <tr>
              <th>Phone.No</th>
              <td>{userMobileNumber}</td>
            </tr>
            <tr>
              <th>contactNumber1</th>
              <td>{contactNumber1}</td>
            </tr>
            <tr>
              <th>contactNumber2</th>
              <td>{contactNumber2}</td>
            </tr><tr>
              <th>contactNumber3</th>
              <td>{contactNumber3}</td>
            </tr><tr>
              <th>callingNumber</th>
              <td>{callingNumber}</td>
            </tr>
          </tr>

        )}
      </table>
    </div>)

}