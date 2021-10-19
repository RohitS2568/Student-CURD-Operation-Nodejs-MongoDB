const express = require("express");
const mongoose = require('mongoose')

const  student_marks_Act = require("../controllers/students_markscontroller.js"); 


const router = express.Router();

router.get('/', student_marks_Act.getstudent_marks);
router.get('/:name', student_marks_Act.getspecstudent_marks);
router.post('/', student_marks_Act.createstudent_marks);
router.patch('/:name', student_marks_Act.updatestudent_marks);
router.delete('/:name', student_marks_Act.deletestudent_marks);

module.exports=router;