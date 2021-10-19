const express= require('express');

const mongoose= require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const port=3500;
const url= "mongodb://localhost:27017";

mongoose.connect('mongodb+srv://Admin123:Admin123@cluster0.wqrjm.mongodb.net/Student_DB?retryWrites=true&w=majority',{useNewUrlParser: true});
const con= mongoose.connection;

app.use(express.json());

try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

var studentsrouter= require("./routes/students.js");
var student_marksrouter= require("./routes/studentsmarks.js");
app.use('/student_marks',student_marksrouter)
app.use('/students',studentsrouter)



app.listen(port, () =>{
    console.log('Server started');
})