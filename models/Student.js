const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    jobTitle:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    recuterName:{
        type:String,
        required:true
    },
    nic:{
        type:Number,
        required:false
    },
    address:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    studentStatus:{
        type:String,
        required:true
    },








})
 







const Student = mongoose.model("Student",studentSchema);
module.exports=Student;
