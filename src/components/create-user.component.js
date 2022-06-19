import React, { useState } from "react";
// import {Link} from "react-router-dom";
import axios from "axios";


function CreateUser(){

    let [userName,updateUserName] = useState("");
    return <div>
    <h3>Create New User</h3>
    <form>
        <div className="form-group">
            <label>UserName: </label>
            <input type="text" 
            name="userName" 
            value={userName} 
            className="form-control" 
                onChange={e=>{updateUserName(e.target.value)}}
            />

        </div>
    </form>

        <br/>
        <hr/>
        <br/>
        <p>
            You are creating new user with name : <strong>{userName}</strong>
        </p>
        <button className="btn btn-dark" onClick={()=>{
            axios.post("http://localhost:5000/users/add",{userName:userName})
            .then(res=>{
                console.log(res)
            });
        }}>Submit</button>
    </div>
}

export default CreateUser;