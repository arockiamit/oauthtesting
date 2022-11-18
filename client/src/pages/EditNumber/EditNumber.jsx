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
  const [data, setData] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const token = localStorage.getItem('accesstoken');
  const navigate = useNavigate();
  function HomePage() {
    return navigate('/');
  }
  function Back() {
    return navigate('/Menu');
  }
  const [updatePopup, setUpdatePopUp] = useState(false);

  const toggleModal = () => {
    setUpdatePopUp(!updatePopup);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/ViewContact`, { method: 'post', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setNum1(data.contactNumber1);
        setNum2(data.contactNumber2);
        setNum3(data.contactNumber3);
      });
  }, []);

  function updatenum() {
    setData('');
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/modify`, {
      method: 'put',
      body: JSON.stringify({
        token, num1, num2, num3,
      }),
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    if (num1 !== '' && num2 !== '' && num3 !== '') {
      setUpdatePopUp(!updatePopup);
    } else {
      setUpdatePopUp(updatePopup);
    }
  }

  return (
    <div className="content">
      <h2 className="editContactHeading"> EDIT CONTACT NUMBERS</h2>
      <table className="tab1">
        <tr>
          <th>contact 1</th>
          <td className="phnNum"><input type="text" required value={num1} onChange={(e) => setNum1(e.target.value)} /></td>
          <td><button type="button" className="editBtn" onClick={updatenum}>Edit</button></td>
        </tr>
        <tr>
          <th>contact 2</th>
          <td className="phnNum"><input type="text" required value={num2} onChange={(e) => setNum2(e.target.value)} /></td>
          <td><button type="button" className="editBtn" onClick={updatenum}>Edit</button></td>
        </tr>
        <tr>
          <th>contact 3</th>
          <td className="phnNum"><input type="text" required value={num3} onChange={(e) => setNum3(e.target.value)} /></td>
          <td><button type="button" className="editBtn" onClick={updatenum}>Edit</button></td>
        </tr>
      </table>
      {updatePopup && (
        <div className="updatePopup">
          <div onClick={Modify} className="overlay" />
          <div className="modal-content10">
            <center>
              <p className="updateMessage">{' ph.number updated successfully '}</p>
              <br />
              <button type="button" className="close-modal1" onClick={toggleModal}>
                OK ✔
              </button>
            </center>
          </div>
        </div>
      )}
      <div className="atmsg">{data}</div>
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
