import React from "react";
import { useState } from "react";
import './App.css';


  function Delete() {

    const [data, setData] = useState([]);
    const[id]=useState('');
    fetch('http://localhost:3001/search',{method:'get',headers:{'content-type':'application/json'}})
    .then((res)=>res.json())
    .then((data)=>{
        setData(data)
    });
    function removenum(){
    fetch(`http://localhost:3001/remove:${id}`, { method: 'delete', headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      });
    }

  return (
    <div className="content">
      <h1 id='title'>Safety App</h1>
      <h1>Delete a number</h1>

      <table className="tab1" border={2}>
      {data.map(({ userName, userMobileNumber, contactNumber1, contactNumber2, contactNumber3, callingNumber }) =>

        <tr id='tab1head'>
          <tr>
          <th>User</th>
          <td>{userName}</td>
          <td className="delete-container"><button onClick={removenum}>🗑️</button></td>

          </tr>
          <tr>
          <th>Phone.No</th>
          <td>{userMobileNumber}</td>
          <td className="delete-container"><button onClick={removenum}>🗑️</button></td>
          </tr>
          <tr>
          <th>contactNumber1</th>
          <td>{contactNumber1}</td>
          <td className="delete-container"><button onClick={removenum}>🗑️</button></td>
          </tr>
          <tr>
          <th>contactNumber2</th>
          <td>{contactNumber2}</td>
          <td className="delete-container"><button onClick={removenum}>🗑️</button></td>
            </tr><tr>
          <th>contactNumber3</th>
          <td>{contactNumber3}</td>
          <td className="delete-container"><button onClick={removenum}>🗑️</button></td>
          </tr><tr>
          <th>callingNumber</th>
          <td>{callingNumber}</td>
          <td className="delete-container"><button onClick={removenum}>🗑️</button></td>
        </tr>
        </tr>

      )}
      </table>


    </div>)

}
export default Delete;




