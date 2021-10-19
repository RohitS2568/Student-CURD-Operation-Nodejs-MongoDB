const express= require('express');
const mongoose= require('mongoose');

const student_marks= require('../models/studentmarksdata.js');

const router= express.Router();

const getstudent_marks = async (req, res) => {
    const name = req.params.name;
    
    try {
        const student_marks= await student_marks.find();
        
        res.status(200).json(student_marks);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getspecstudent_marks = async (req,res) => {
    const name = req.params.name;

    try {
        const stud= await student_marks.findOne({name: name});

        res.status(200).json(stud);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

const createstudent_marks =  async (req, res) => {
    console.log(req.body);
    const newstudent_marks = new Student_marks({
        
        name:req.body.name,
        roll_no:req.body.roll_no,
        English:req.body.English,
        Physics:req.body.Physics,
        Chymistry:req.body.Chymistry,
        created_on:req.body.created_on

    })
    try {
        await newstudent_marks.save();

        res.status(201).json(newstudent_marks);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const updatestudent_marks = async (req, res) => {
   
    const name= req.params.name;
    try{
        await student_marks.findOneAndUpdate({
            name: name,
        },
        {   
           
            name:req.body.name,
            roll_no:req.body.roll_no,
            English:req.body.English,
            Physics:req.body.Physics,
            Chymistry:req.body.Chymistry,
            created_on:req.body.created_on
        }
        )
        res.status(202).json({name: name});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
    
}

const deletestudent_marks = async (req, res) => {
    const name= req.params.name;

    try {
        await student_marks.findOneAndRemove({name: name});
        res.status(203).json({name:name});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getstudent_marks= getstudent_marks;
module.exports.createstudent_marks= createstudent_marks;
module.exports.getspecstudent_marks= getspecstudent_marks;
module.exports.updatestudent_marks= updatestudent_marks;
module.exports.deletestudent_marks= deletestudent_marks;