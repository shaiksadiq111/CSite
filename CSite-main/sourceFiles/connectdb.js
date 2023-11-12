import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const URI = process.env.MONGO_URI;




async function connectDB(){
   try{
       await mongoose.connect(URI);
       console.log("succesfully coneected to db");
   }
   catch(err){
        console.log("there was an error with mongodb connection ");
        console.log(err);
   }

}

export default connectDB;