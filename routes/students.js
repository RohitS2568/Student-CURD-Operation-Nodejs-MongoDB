const express = require("express");
const mongoose = require('mongoose')

const  student_Act = require('../controllers/student_controller.js'); 

const router = express.Router();

router.get('/', student_Act.getStudents);
router.get('/:roll_no', student_Act.getspecStudent);
router.post('/', student_Act.createstudent);
router.patch('/:roll_no', student_Act.updatestudent);
router.delete('/:roll_no', student_Act.deletestudent);

module.exports=router;