import React from "react";
import {useState} from "react";

function Modify(){

    const[data,setData]=useState('');
    const[number,setNumber]=useState([]);
    console.log(number);


    fetch('http://localhost:3001/search',{method:'get',headers:{'content-type':'application/json'}})
    .then((res)=>res.json())
    .then((data)=>{
        setData(data)
    });

    function updatenum(){
    fetch('http://localhost:3001/modify',{method:'put',body:JSON.stringify({number}),headers:{'content-type':'application/json'}})
    .then((res)=>res.json())
    .then((data) =>{
      setNumber(data)});
  
    }



  return(
  <div>
    <table className="tab2" border={2}>
      {data.map(({ userName, userMobileNumber, contactNumber1, contactNumber2, contactNumber3, callingNumber }) =>

        <tr id='tab2head'>
          <tr>
          <th>User</th>
          <td>{userName}</td>
          <td className1="update-container"><button onClick={updatenum}>✏️</button></td>

          </tr>
          <tr>
          <th>Phone.No</th>
          <td>{userMobileNumber}</td>
          <td className="update-container"><button onClick={updatenum}>✏️</button></td>
          </tr>
          <tr>
          <th>contactNumber1</th>
          <td>{contactNumber1}</td>
          <td className="update-container"><button onClick={updatenum}>✏️</button></td>
          </tr>
          <tr>
          <th>contactNumber2</th>
          <td>{contactNumber2}</td>
          <td className="update-container"><button onClick={updatenum}>✏️</button></td>
            </tr><tr>
          <th>contactNumber3</th>
          <td>{contactNumber3}</td>
          <td className="update-container"><button onClick={updatenum}>✏️</button></td>
          </tr><tr>
          <th>callingNumber</th>
          <td>{callingNumber}</td>
          <td className="update-container"><button onClick={updatenum}>✏️</button></td>
        </tr>
        </tr>

      )}
      </table>
    


  </div>)

}
export default Modify;