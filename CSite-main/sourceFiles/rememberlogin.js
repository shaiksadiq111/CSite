import express from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";

var app = express();

const jwtSecret = process.env.JWT_SECRET;

const verifyJWT = (req, res, next) => {
    // console.log(req.cookies.token);
    const token = req.cookies.token;

    if(!token){
        console.log("no jwt token found");
        res.send("NO TOKEN FOUND");
    }
    else{
        jwt.verify(token, jwtSecret, (err, decoded) => {
            if(err){
                console.log("error with authenticating token");
                console.log(err);
                res.send("JWT ERROR");
            }
            else{
                req.email = decoded.email;
                next();
            }
        })
    }

}


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/", verifyJWT, (req,res)=>{
    
    res.json({status: true,
    email: req.email});


})

export default app;