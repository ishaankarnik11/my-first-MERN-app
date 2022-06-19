import React, { useState, useEffect } from "react";
// import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function CreateExercise() {
    let [exercise, updateExercise] = useState({
        userName: "",
        description: "",
        duration: 0,
        date: new Date()
    });

    function handleChange(e){
        let {name, value} = e.target;
        updateExercise({
            ...exercise,
            [name]:value
        });
        
    }

    let [users, addUsers] = useState([]);

    useEffect(()=>{axios.get("http://localhost:5000/users/")
    .then(response=>{
        if(response.data.length > 0 ){
            let userList = [];
            response.data.map(d=>userList.push(d.userName));
            addUsers(userList);
        }
    })},[]);
    
    return <div>
        <div>
            <h3>Create New Exercise Log</h3>
            <form>
                
                <div className="form-group">
                    <label>User Name: </label>
                    <select 
                    name="userName"
                        required
                        className="form-control"
                        value={exercise.userName}
                        onChange={handleChange}>
                        {users.map(data => <option key={data} value={data}>{data}</option>)}
                    </select>
                </div>

                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" 
                    name="description"
                        required
                        className="form-control"
                        value={exercise.description}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input type="text" 
                    name="duration"
                        required
                        className="form-control"
                        value={exercise.duration}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Date: </label>
                    <DatePicker name="date" selected={exercise.date} onChange={newDate=>{updateExercise({
                        ...exercise,
                        date: newDate
                    })}}/>
                </div>

            </form>
        </div>
        

        <br/>
        <hr/>
        <br/>
        <p>
            Execersice Details:
        </p>
        <p>
            User Name: {exercise.userName}
        </p>
        <p>
            Description: {exercise.description}
        </p>
        <p>
            Duration: {exercise.duration}
        </p>
        <p>
            Date: {exercise.date.toLocaleDateString()}
        </p>
        <button className="btn btn-dark" onClick={() => {
            axios.post("http://localhost:5000/exercises/add",exercise)
            .then(res=>{
                console.log(res);
            })
        }}>Update</button>
    </div>
}

export default CreateExercise;