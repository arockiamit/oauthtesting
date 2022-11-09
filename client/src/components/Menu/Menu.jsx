/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './Menu.css';
import { BiCommentAdd } from 'react-icons/bi';
import { GrView, GrMap } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { HiPhoneMissedCall } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();
  function Register() {
    return navigate('/registerNumber');
  }
  function ViewRegister() {
    return navigate('/viewNumber');
  }
  function DeleteRegNum() {
    return navigate('/deleteRegNumber');
  }
  function CallNumber() {
    return navigate('/callNumber');
  }
  function DeleteCallNum() {
    return navigate('/DeleteCallNumber');
  }
  function MapNearby() {
    window.location.href = 'https://www.google.com/maps/search/nearby+police+station/';
  }
  return (
    <center>
      <div className="mobileMenu">
        <div className="first">
          <button className="reg-add" onClick={Register} type="submit">
            <BiCommentAdd />
          </button>
          {/* <h5 className="textReg">Register Number</h5> */}
          <button className="reg-view" onClick={ViewRegister} type="submit">
            <GrView />
            {/* View Register Number */}
          </button>
        </div>
        <div className="second">
          <button className="reg-del" onClick={DeleteRegNum} type="submit">
            <MdDelete />
            {/* Delete Number */}
          </button>
          <button className="reg-call" onClick={CallNumber} type="submit">
            <IoCall />
            {/* Call Number */}
          </button>
        </div>
        <div className="third">
          <button className="reg-cdel" onClick={DeleteCallNum} type="submit">
            <HiPhoneMissedCall />
            {/* Delete Call Number */}
          </button>
          <button className="reg-map" onClick={MapNearby} type="submit">
            <GrMap />
            {/* NearBy Police Station 🗺️ */}
          </button>
        </div>
      </div>
    </center>
  );
}

export default Menu;
