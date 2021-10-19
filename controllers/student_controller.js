const express= require('express');
const mongoose= require('mongoose');


const student= require('../models/studentdata.js');

const router= express.Router();

const getStudents = async (req, res) => {
    const last_name = req.params.last_name;
   
    try {
        const student= await Student.find();
        
        res.status(200).json(student);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getspecStudent = async (req,res) => {
    const last_name = req.params.last_name;

    try {
        const stud = await Student.findOne({last_name: last_name});

        res.status(200).json(stud);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

const createstudent =  async (req, res) => {
    console.log(req.body);
    const newstudent = new Student({

        first_name:req.body.first_name,
        last_name:req.body.last_name,
        roll_no:req.body.roll_no,
        age:req.body.age,
        created_on:req.body.created_on

    })
    try {
        await newstudent.save();

        res.status(201).json(newstudent);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const updatestudent = async (req, res) => {
   
    const last_name= req.params.last_name;
    try{
        await Student.findOneAndUpdate({
            last_name: last_name,
        },
        {   
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            roll_no:req.body.roll_no,
            age:req.body.age,
            created_on:req.body.created_on
        }
        )
        res.status(202).json({last_name: last_name});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
    
}

const deletestudent = async (req, res) => {
    const last_name= req.params.last_name;

    try {
        await Student.findOneAndRemove({last_name: last_name});
        res.status(203).json({last_name:last_name});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getStudents= getStudents;
module.exports.createstudent= createstudent;
module.exports.getspecStudent= getspecStudent;
module.exports.updatestudent= updatestudent;
module.exports.deletestudent= deletestudent;