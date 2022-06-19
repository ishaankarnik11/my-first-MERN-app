import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios"

function ExerciseList(){
    let [exerciseList, addExercise] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/exercises")
        .then(response=>{
            console.log(response.data);
            let tempList = [];
            response.data.map(d=>{
                tempList.push({
                    id:d._id,
                    userName:d.userName,
                    description:d.description,
                    duration:d.duration,
                    date:d.date
                })
            });
            addExercise(tempList);
        })
    },[]);

    return <div>
        <p>
            Exercise List:
        </p>
        <br/>
        {exerciseList.map(exercise=><div>
        ID: {exercise.id}<br/>
        User Name: {exercise.userName}<br/>
        Description: {exercise.description}<br/>
        Duration: {exercise.duration}<br/>
        Date: {exercise.date}<br/>
        <button name={exercise.id} className="btn btn-dark" onClick={e=>{
            // console.log(exerciseList.findIndex(exercise=>{return exercise.id == e.target.name}));
            axios.delete("http://localhost:5000/exercises/"+e.target.name)
            .then(res=>{
                
                exerciseList.splice(exerciseList.findIndex(exercise=>{return exercise.id == e.target.name}),1);
                addExercise([...exerciseList]);
                console.log(res)
                });
            console.log(e.target.name);
        }}>Delete</button>
        <Link to={"/edit/"+exercise.id} className="btn btn-dark ms-5">Edit</Link>
        <hr/>
        </div>)}
    </div>
}

export default ExerciseList;