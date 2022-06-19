require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/exercises", exercisesRouter);
app.use("/users",usersRouter);


let url = process.env.DB_CONNECTION;
mongoose.connect(url);
const db_connection = mongoose.connection;
db_connection.once("open", ()=>{
    console.log("DB connection established.");
});

app.listen(port, ()=>{console.log("Server started on port" + port)});

