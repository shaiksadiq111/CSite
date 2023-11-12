import mongoose from "mongoose";

const UserScheema = mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    doc:{
        required:false,
        type: Date,
        default: new Date
    }
})

const Users = mongoose.model("User", UserScheema);

export default Users;