import express from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const jwtSecret = process.env.JWT_SECRET;

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-acess-token"];

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

app.post("/", verifyJWT, function(req,res){
    res.send("you are here");
})

export default app;