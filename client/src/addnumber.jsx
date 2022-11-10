import React,{useState} from "react";
import './addnum.css';
function Addnumber(){

const [num1,setNum1]=useState('');
fetch('http://localhost:3001/addnum',{method:'post',body:JSON.stringify({num1}),headers:{'content-type':'application/json'}})
.then(res => res.json())
      .then((data) => {
        setNum1(data);
        console.log(data);
        console.log('operation completed.');
      });




return(
<div className="add">
<input className='num1' type="text"  value={num1} placeholder='Enter the first number' onChange={e => setNum1(e.target.value)} />
<button id='addbtn' onClick={Addnumber}>Add</button>

</div>)

}
export default Addnumber;