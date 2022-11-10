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
          <div className="child">
            <button className="reg-add" onClick={Register} type="submit">
              <BiCommentAdd />
            </button>
            <p className="childtext">Register</p>
          </div>
          <div className="child">
            <button className="reg-view" onClick={ViewRegister} type="submit">
              <GrView />
            </button>
            <p>View Register</p>
          </div>
        </div>
        <div className="first">
          <div className="child">
            <button className="reg-del" onClick={DeleteRegNum} type="submit">
              <MdDelete />
            </button>
            <p className="childtext">Delete</p>
          </div>
          <div className="child">
            <button className="reg-call" onClick={CallNumber} type="submit">
              <IoCall />
            </button>
            <p>Call</p>
          </div>
        </div>
        <div className="first">
          <div className="child">
            <button className="reg-cdel" onClick={DeleteCallNum} type="submit">
              <HiPhoneMissedCall />
            </button>
            <p className="childtext">Delete Call</p>
          </div>
          <div className="child">
            <button className="reg-map" onClick={MapNearby} type="submit">
              <GrMap />
            </button>
            <p>Location</p>
          </div>
        </div>
      </div>
    </center>
  );
}

export default Menu;
