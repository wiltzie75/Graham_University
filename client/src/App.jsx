import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import './App.css'
import Admin from '../components/Admin';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Department from '../components/Department';
import Faculty from '../components/Faculty';
import Login from '../components/Login';
import Register from '../components/Register';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
