const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv")
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;
mongoose.set("strictQuery", false);

mongoose.connect(URL,{
   
    
   
    
     
});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Mongo DB Connected Successfuly done !");
})


const studentRouter=require("./routes/students.js")
app.use("/student",studentRouter); 


app.listen(PORT,()=>{
    console.log(`server is up & PORT is "${PORT}`);

})