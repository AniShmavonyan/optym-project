import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'


export default function Landing() {
    return (
        <header style={Header}>
            <h1 className="title">Login and Register</h1>
            <div className="buttons">
                <NavLink to="/login">
                    <button className="login_btn">log in</button>
                </NavLink>
                <NavLink to="/register">
                    <button className="login_btn" id="register_btn"><span>register</span></button>
                </NavLink>
            </div>
        </header>
    )
}

const Header = {
    width: "100%",
}