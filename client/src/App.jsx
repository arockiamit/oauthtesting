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
          <Route path="/Home" element={accessedUser ? <Home /> : <Navigate to="/" />} />
          <Route path="/Menu" element={accessedUser ? <Menu /> : <Navigate to="/" />} />
          <Route path="/editNumber" element={accessedUser ? <EditNumber /> : <Navigate to="/" />} />
          <Route path="/deleteRegNumber" element={accessedUser ? <DeleteRegNumber /> : <Navigate to="/" />} />
          <Route path="/addNumber" element={accessedUser ? <AddNumber /> : <Navigate to="/" />} />
          <Route path="/viewNumber" element={accessedUser ? <ViewNumber /> : <Navigate to="/" />} />
          <Route path="/location" element={accessedUser ? <Location /> : <Navigate to="/" />} />
          <Route path="/callNumber" element={accessedUser ? <CallNumber /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
