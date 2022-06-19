import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.components"
import ExerciseList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateUser from "./components/create-user.component";
import CreateExercise from "./components/create-exersice.component";




function App() {
  console.log(Route);
  return (
    
    <Router>
    <div className="container">
    <Navbar />
    <br/>
    <Routes>
      <Route path="/" element={<ExerciseList/>}/>
      <Route path="/create" element={<CreateExercise/>}/>
      <Route path="/user" element={<CreateUser/>}/>
      <Route path="/edit/:id" element={<EditExercise/>}/>
    </Routes>
    </div>
    </Router>
     
  );
}

export default App;

