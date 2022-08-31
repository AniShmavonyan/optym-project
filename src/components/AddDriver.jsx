import React, { useState } from 'react'
import '../App.css'
// import Drivers from './components/Drivers'

export default function AddDriver() {
    
    const [nameAdd, setNameAdd] = useState(" ");
    const [emailAdd, setEmailAdd] = useState(" ");
    const [phoneAdd, setPhoneAdd] = useState(" ");
    const [statusAdd, setStatusAdd] = useState(" ");
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    

    const create = (ev) => {
        ev.preventDefault();
        fetch('http://10.20.8.158:5002/api/v2/accounts/add/driver', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameAdd: nameAdd,
                emailAdd: emailAdd,
                phoneAdd: phoneAdd,
                statusAdd: statusAdd
            })
        })
        .then(res => {
            console.log(res)
            setData(res.data);
        })
        .catch(err => console.log("Error"));
    };
    return (
        <div className="addDriver">
            {(isError) && <div className ="error" value="unknown_error"/>}
       <div className="form">
                <div className="form">
                    <label>Driver Name</label><br />
                    <input type="text" name="driver-name" onChange={(event) => setNameAdd(event.target.value)} required />
                </div>
                    <label>Email address</label><br />
                <input type="email" name="email" onChange={(event) => setEmailAdd(event.target.value)} required />
                </div>
              <div className="form">
                <label>Phone</label><br />
                <input type="tel" name="phone" onChange={(event) => setPhoneAdd(event.target.value)} required />
                </div>
               <div className="form">
                <br />
                <button id="submit_btn" type="submit" onClick={create}>Create</button>
                </div>
                {/* <Drivers data={data}/>      */}
        </div>
    )
}
