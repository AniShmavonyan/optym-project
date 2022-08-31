import  { useState } from 'react';


export default function Update(){
    const [idUp, setIdUp] = useState("")
    const [dotUp, setDotUp] = useState("")
    const [isError, setIsError] = useState(false);
      
    const create = (ev) => {
        ev.preventDefault();
    fetch('http://10.20.8.158:5002/api/v2/accounts/user/update', {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: {
                        id: idUp,
                        dotUp: dotUp
                    }
                })
            }
                // .then(res=>{
                //     if(res.status>=200 && res.status<=300){
                //         return res.json;
                //     } else {
                //         return setIsError(true);
                //     }
                
return (
        <div className="update">
            {(isError) && <div className ="error" value="unknown_error"/>}
            <div className="form">
                <label>DOT</label><br />
                <input type="text" name="id" onChange={(ev, val) => { setIdUp(ev.target.val) }} required />
            </div>
            <div className="form">
                    <label>Name</label><br />
                    <input type="text" name="dot" onChange={(ev, val) => { setDotUp(ev.target.val) }}  required />
                </div>
               <div className="form">
                <br />
                <button id="submit_btn" type="submit" onClick={create}>Create</button>
                </div>
        </div>
    )
}
