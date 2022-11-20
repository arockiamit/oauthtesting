/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './Menu.css';
import { BiCommentAdd } from 'react-icons/bi';
import { GrView, GrMap } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import { HiHome } from 'react-icons/hi';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { FaBars, FaEdit } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();
  function Register() {
    return navigate('/addNumber');
  }
  function ViewRegister() {
    return navigate('/viewNumber');
  }
  function DeleteRegNum() {
    return navigate('/deleteRegNumber');
  }
  function EditNumber() {
    return navigate('/editNumber');
  }
  function MapNearby() {
    window.location.href = 'https://www.google.com/maps/search/nearby+police+station/';
    return navigate('/Menu');
  }
  function CallNumber() {
    return navigate('/callNumber');
  }
  function HomePage() {
    return navigate('/');
  }
  function Back() {
    return navigate('/Home');
  }
  return (
    <body>
      <center>
        <div className="mobileMenu">
          <div className="first">
            <div className="child">
              <button className="reg-add" onClick={Register} type="submit">
                <BiCommentAdd />
              </button>
              <p className="childtext">Add</p>
            </div>
            <div className="child">
              <button className="reg-view" onClick={ViewRegister} type="submit">
                <GrView />
              </button>
              <p>View</p>
            </div>
          </div>
          <div className="first">
            <div className="child">
              <button className="reg-edit" onClick={EditNumber} type="submit">
                <FaEdit />
              </button>
              <p className="childtext">Edit</p>
            </div>
            <div className="child">
              <button className="reg-map" onClick={MapNearby} type="submit">
                <GrMap />
              </button>
              <p>Location</p>
            </div>
          </div>
          <div className="first">
            <div className="child">
              <button className="reg-del" onClick={DeleteRegNum} type="submit">
                <MdDeleteOutline />
              </button>
              <p className="childtext">Delete</p>
            </div>
            <div className="child">
              <button className="reg-call" onClick={CallNumber} type="submit">
                <IoCallOutline />
              </button>
              <p>Call</p>
            </div>
          </div>
          <div className="footer">
            <div className="home">
              <button className="clear" type="submit"><FaBars /></button>
            </div>
            <div className="home">
              <button className="bhome" onClick={HomePage} type="submit"><HiHome /></button>
            </div>
            <div className="home">
              <button className="back" onClick={Back} type="submit"><RiArrowGoBackFill /></button>
            </div>
          </div>
        </div>
      </center>
    </body>
  );
}

export default Menu;
