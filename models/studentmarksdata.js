const mongoose =require('mongoose');

const student_marksSchema = mongoose.Schema({
    name: {
        type: String,
        
       

    },
   
    roll_no: {
        type: String,
        
       
    },
    
    English: {
        type: String,
        
        
        
    },

    Physics: {
        type: String,
        
       
    },

    Chymistry: {
        type: String,
        
       
    },

    
    registered_on: {
        type: Date,
        default: new Date(),
    },

})




module.exports= mongoose.model('student_marks',student_marksSchema);
