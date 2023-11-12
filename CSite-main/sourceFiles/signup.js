import express from "express";
import bodyParser from "body-parser";
import  bcrypt from "bcrypt";

import Users from "../models/users.js";

var app = express();

const saltRounds = 10;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.post("/", function(req,res){
    var data = req.body;
    var {name, email, number, semester, dob, password} = data;
    bcrypt.hash(password, saltRounds, function(err, hash){
        if(err){
            console.log("there was an error with bcrypt ");
            console.log(err);
        }
        else{
            var user = new Users({
                Name: name,
                email: email,
                number: number,
                semester: semester,
                dob: dob,
                password: hash,
            });

            try{
                user.save();
            }catch(err){
                console.log("there was an error saving the user");
                console.log(err);
            }
            res.send("req recieved");

        }
    })
    
})

export default app;