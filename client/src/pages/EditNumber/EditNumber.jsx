/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { HiHome } from 'react-icons/hi';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './EditNumber.css';

export default function Modify() {
  const [Data, setData] = useState('');
  const [msg, setMsg] = useState('');
  const [contactNumber1, setContactNumber1] = useState();
  const [contactNumber2, setContactNumber2] = useState();
  const [contactNumber3, setContactNumber3] = useState();
  const token = localStorage.getItem('accesstoken');
  const navigate = useNavigate();
  function HomePage() {
    return navigate('/');
  }
  function Back() {
    return navigate('/Menu');
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/ViewContact`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        if (data.contactNumber1) {
          setContactNumber1(data.contactNumber1);
        }
        if (data.contactNumber2) {
          setContactNumber2(data.contactNumber2);
        }
        if (data.contactNumber3) {
          setContactNumber3(data.contactNumber3);
        }
      });
  }, [token]);

  function updatenum1() {
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/modify1`, {
      method: 'put',
      body: JSON.stringify({
        token, contactNumber1,
      }),
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then(({ msg }) => {
        setMsg(msg);
      });
  }
  function updatenum2() {
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/modify2`, {
      method: 'put',
      body: JSON.stringify({
        token, contactNumber2,
      }),
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then(({ msg }) => {
        setMsg(msg);
      });
  }

  function updatenum3() {
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/modify3`, {
      method: 'put',
      body: JSON.stringify({
        token, contactNumber3,
      }),
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then(({ msg }) => {
        setMsg(msg);
      });
  }

  return (
    <div className="content">
      <h2 className="editContactHeading"> EDIT CONTACT NUMBERS</h2>
      <table className="tab1">
        { Data.contactNumber1 ? (
          <tr>
            <th>contact 1</th>
            <td className="phnNum"><input type="text" required value={contactNumber1} onChange={(e) => setContactNumber1(e.target.value)} /></td>
            <td><button type="button" className="editBtn" onClick={updatenum1}>Edit</button></td>
          </tr>
        ) : ''}
        { Data.contactNumber2 ? (
          <tr>
            <th>contact 2</th>
            <td className="phnNum"><input type="text" required value={contactNumber2} onChange={(e) => setContactNumber2(e.target.value)} /></td>
            <td><button type="button" className="editBtn" onClick={updatenum2}>Edit</button></td>
          </tr>
        ) : ''}
        { Data.contactNumber3 ? (
          <tr>
            <th>contact 3</th>
            <td className="phnNum"><input type="text" required value={contactNumber3} onChange={(e) => setContactNumber3(e.target.value)} /></td>
            <td><button type="button" className="editBtn" onClick={updatenum3}>Edit</button></td>
          </tr>
        ) : ''}
      </table>
      <div className="atmsg">{msg}</div>
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
