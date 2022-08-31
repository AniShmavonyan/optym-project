import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

export default function SignIn() {
    const [dotlog, setDotlog] = useState(" ");
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
    const [isError, setIsError] = useState(false);
    
    const handleLogin = (ev) => {
            ev.preventDefault();
        fetch('http://10.20.8.158:5002/api/v2/accounts/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dotlog: dotlog,
                emaillog: emaillog,
                passwordlog: passwordlog,
            })
        }).then(res => {
            console.log(res)
        }).error((err) =>{
            setIsError(true);
            console.log(err);
        })
    };
    return (
        <div className="signIn">
            {(isError) && <div className ="error" value="unknown_error"/>}
       <div className="form">
                <div className="form">
                    <label>DOT</label><br />
                    <input type="text" name="dot" onChange={(event) => setDotlog(event.target.value)} required />
                </div>
                    <label>Email address</label><br />
                <input type="email" name="email" onChange={(event) => setEmaillog(event.target.value)} required />
                </div>
              <div className="form">
                <label>Password</label><br />
                <input type="password" name="password" onChange={(event) => setPasswordlog(event.target.value)} required />
                </div>
               <div className="form">
                <br />
                <button id="submit_btn" type="submit" onClick={handleLogin}>Login</button>
                </div>
            <footer>
                <p><NavLink to="/register">Create an account</NavLink></p>
                <p><NavLink to="/">Back to Homepage</NavLink></p>
            </footer>
        </div>
    )
}
