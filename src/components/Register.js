import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

export default function SignUp() {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dot, setDot] = useState('');
    const [confirm, setConfirm] = useState('');
    const [organization, setOrganization] = useState('');
    const [isError, setIsError] = useState(false);


            const handleRegister = (ev) => {
                ev.preventDefault();
                fetch('http://10.20.8.158:5002/api/v2/accounts/register', {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: {
                        dot: dot,
                        name: name,
                        organization: organization,
                        email: email,
                        password: password
                    }
                })
                    .then(res => {
                        console.log(res)
                    }).error((err) => {
                        setIsError(true);
                        console.log(err);
                    })
                
                if (password !== confirm) {
                    console.log("don't match")
                }
            };

    return (
        <div className="signUp">
            {(isError) && <div className="error" value="unknown_error" />}
            <div className="form">
                <label>DOT</label><br />
                <input type="text" name="dot" onChange={(ev, val) => { setDot(ev.target.val) }} required />
            </div>
            <div className="form">
                    <label>Name</label><br />
                    <input type="text" name="first_name" onChange={(ev, val) => { setName(ev.target.val) }}  required />
                </div>
            <div className="form">
                <label>Organization</label><br />
                <input type="text" name="dot" onChange={(ev, val) => { setOrganization(ev.target.val) }} required />
            </div>
            <div className="form">
                    <label>Email address</label><br />
                    <input type="email" name="email" onChange={(ev, val) => { setEmail(ev.target.val) }} />
                </div>
            <div className="form">
                    <label>Password</label><br />
                    <input type="password" name="password" onChange={(ev, val) => { setPassword(ev.target.val) }} required />
                </div>
            <div className="form">
                <label>Confirm</label><br />
                <input type="password" name="password" onChange={(ev, val) => { setConfirm(ev.target.val) }} required />
            </div>
                <p>
                <button id="submit_btn" type="submit" onClick={handleRegister}>Register</button>
                    {/* <p><NavLink to="/home">Register</NavLink></p> */}
                    
                    
                {/* <p><a href="/login" onClick={handleClick}>log in</a></p> */}
                </p>
            <footer>
                <p><NavLink to="/">Back to Homepage</NavLink></p>
            </footer>
        </div>
    )
}
