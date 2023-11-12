import express from "express";
import bodyParser from "body-parser";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import Users from "../models/users.js";

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

var app = express();
var status = false;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: "http://localhost:3000"}))
app.use(cookieParser());





app.get("/", (req,res)=>{
    var data = req.query.data;
    console.log("data recieved");
    data = JSON.parse(data);
    console.log(data);
    Users.findOne({email: data.email}, function(err, result){
        if(err){
            console.log(err);
        }
        if(result === null){
            res.send("Wrong Email");
        }
        else{
            bcrypt.compare(data.password, result.password, function(err, result){
                if(err){
                    console.log(err);
                    console.log("there was an error with checking hashing password");
                }
                else{
                    if(result === true){
                        //expiresIn is in seconds so 300 = 5mins
                        const token = jwt.sign({email: data.email}, jwtSecret, {
                            expiresIn: 300,
                        })
                        res.cookie("token", token, {
                            sameSite: "Strict", 
                            path: "/", 
                            expires: new Date(new Date().getTime + 5*1000),
                            httpOnly: true}
                            );
                        res.send("cookie bieng sent");
                    }
                    else{
                        res.send("Password Error")
                    }
                }
            })
            
        }
    })
})

export default app;