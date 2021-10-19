const mongoose =require('mongoose');

const studentSchema = new mongoose.Schema({
    first_name: {
        type: String,
       

    },
   
    last_name: {
        type: String,
        
        
    },
    
    roll_no: {
        type: String,
        
        
    },

    age: {
        type: String,
       
        
    },

    
    registered_on: {
        type: Date,
        default: new Date(),
    },

})


module.exports= mongoose.model('Students',studentSchema);