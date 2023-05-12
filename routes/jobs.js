const router = require("express").Router();
let Job = require("../models/Job");

router.route("/").post((req,res)=>{
    const jobTitle = req.body.jobTitle;
    const company = req.body.company;
    const description = req.body.description;
    const email = req.body.email;
    const location = req.body.location;
    const category = req.body.category;
    const type = req.body.type;
    const salary = req.body.salary;

    
    const newJob = new Job ({
        jobTitle,
        company,
        description,
        email,
        location,
        category,
        type,
        salary
    
    })

    newJob.save().then(()=>{
        res.json("New job added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/private12131/").get((req,res)=>{
    Lecture.find().then((ecturers)=>{
        res.json(ecturers)
    }).catch((err)=>{
        console.log(err);
    })
})




module.exports = router;