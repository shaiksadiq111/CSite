import React from "react";
import axios from "axios";


function SignUp(){
    var [name, setName] = React.useState("");
    var[email, setEmail] = React.useState("");
    var[password, setPassword] = React.useState("");
    var[rePassword, setRePassword] = React.useState("");
    var[number, setNumber] = React.useState("");
    var[semester, setSemester] = React.useState("");
    var[dob, setDob] = React.useState("");


    var data = {name: name,
         email: email,
          number: number,
          semester: semester,
            dob: dob,
        password: password
    };

    async function sendData(){
        if(password !== rePassword){
            alert("Passwords do not match")
        }
        else{
            var response = await axios.post("/signup", data);
        console.log(response)
        }
        
    }

    function submitFunction(event){
        event.preventDefault();
        console.log(data);
        sendData()

    }
    return(
        <div className = "cantainer-flex signup-form">
            <form action="">
                <label htmlFor="name">Enter Full Name</label>
                <input type="text" id = "name" placeholder = "James Bond" autoFocus autoComplete="on"
                onChange = {(e) => setName(e.target.value)}/>
                <br />
                <label htmlFor="email">Enter College Email</label>
                <input type="email"  id="email" placeholder="bt20bond007@iiitn.ac.in" autoComplete="on"
                onChange = {(e) => setEmail(e.target.value)}/>
                <br />
                <label htmlFor="Password">Create A Password</label>
                <input type="text" id = "Password" placeholder = "vesper007" 
                onChange = {(e)=> setPassword(e.target.value)}/>
                <br />
                <label htmlFor="RePassword">Confirm Your Password</label>
                <input type="text" id = "RePassword"
                onChange = {(e) => setRePassword(e.target.value)}/>
                <br />
                <label htmlFor="number"> Enter Contact number (will be confidential)</label>
                <input type="text"  id="number" placeholder = "91007007007007"
                onChange = {(e) => setNumber(e.target.value)}/>
                <br />
                <label htmlFor="semester">Semester Number</label>
                <input type="text" id = "semester" placehlder = "007"
                onChange = {(e) => setSemester(e.target.value)}/>
                <br />
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" name="" id="dob"
                onChange = {(e) => setDob(e.target.value)}/>
                <br />
                <button onClick = {submitFunction} type="submit">Signup</button>
            </form>
        </div>
    )
};

export default SignUp;