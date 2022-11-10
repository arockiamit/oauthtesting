import React, { useState } from 'react';
import { HiHome } from 'react-icons/hi';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './EditNumber.css';

function EditNumber() {
  const [Data, setData] = useState('');
  const [number, setNumber] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  function HomePage() {
    return navigate('/');
  }
  function Back() {
    return navigate('/Menu');
  }

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
    <div className="editRegisteredNumber">
      <h1>Edit Number</h1>
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
      <div className="footer">
        <div className="home">
          <button className="clear" type="submit">
            <FaBars />
          </button>
        </div>
        <div className="home">
          <button className="bhome" onClick={HomePage} type="submit">
            <HiHome />
          </button>
        </div>
        <div className="home">
          <button className="back" onClick={Back} type="submit">
            <RiArrowGoBackFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditNumber;
