import React from "react";
import {useState } from "react";
import './viewnumber.css';


export default function View(){

    const [data, setData] = useState([]);
    function viewnum(e){      
    e.preventDefault();  
    fetch('http://localhost:3001/search', { method: 'get', headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      });
    }
    
  return (
    <div className="content">
      <h1 id='title1'>Safety App</h1>
      <h3 id='title2'>click to view numbers </h3>
      <button id='viewbtn' onClick={viewnum}>Show</button><br />

      <table className="tab1" border={2}>
      {data.map(({ userName, userMobileNumber, contactNumber1, contactNumber2, contactNumber3, callingNumber }) =>

        <tr id='tab1head'>
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