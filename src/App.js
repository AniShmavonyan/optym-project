import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import AddDriver from './components/AddDriver'
import Drivers from './components/Drivers'
import Update from './components/Update'
import './App.css'

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/update" element={<Update />}></Route>
            <Route path="/addDriver" element={<AddDriver />}></Route>
            <Route path="/drivers" element={<Drivers />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}
