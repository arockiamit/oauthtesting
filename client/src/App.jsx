/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import './App.css';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import Menu from './Components/Menu';
import Header from './Components/Header/Header';
import Register from './register/register';
import Home from './pages/home/home';
import Location from './pages/Loaction/location';
import EditNumber from './pages/EditNumber/EditNumber';
import DeleteRegNumber from './pages/DeleteRegNum/DeleteRegNum';
import AddNumber from './pages/AddNumber/AddNumber';
import ViewNumber from './pages/ViewNumber/ViewNumber';
import CallNumber from './pages/CallNumber/CallNumber';

function App() {
  const accessedUser = localStorage.getItem('accesstoken');
  // console.log(accessedUser);
  // const registerdUser = localStorage.getItem('token');
  // if (!registerdUser) {
  //   return <Navigate to="/" />;
  // }
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!accessedUser ? <Register /> : <Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/editNumber" element={<EditNumber />} />
          <Route path="/deleteRegNumber" element={<DeleteRegNumber />} />
          <Route path="/addNumber" element={<AddNumber />} />
          <Route path="/viewNumber" element={<ViewNumber />} />
          <Route path="/location" element={<Location />} />
          <Route path="/callNumber" element={<CallNumber />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
