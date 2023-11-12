import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from 'react-redux'
import {LogInAction, LogOutAction, setEmail} from "../actions.js";

axios.defaults.withCredentials = true;
function Login(){
    const dispatch = useDispatch()
    var [password, setPassword] = React.useState("");
    var [email, setEmailState] = React.useState("");
    
    var isLoggedIn = useSelector((state) => {
        return state.LoggedIn;
    });

    async function sendData(data){
        try{
            var res = await axios.get("/login", {params: {data}});
            console.log(res);
            if(res.data === 'cookie bieng sent'){
                dispatch(setEmail(data.email));
                dispatch(LogInAction());
            }
        }catch(err){
            console.log(err);
        }
    }
    function Submit(event){
        event.preventDefault();
        var data = {
            password: password,
            email: email,
        }
        sendData(data);
    }

    return(
        <div>
            <label htmlFor="loginemail"> Enter Email</label>
            <input type="text" name="" id="loginemail"  placeholder="bt20007@iiitn.ac.in"
            onChange = {(e)=> setEmailState(e.target.value)}/>
            <br />
            <label htmlFor="loginpassword">Enter Password</label>
            <input type="text" id = "loginpassword"
            onChange = {(e)=> setPassword(e.target.value)} />
            <button type="submit" onClick = {Submit}>Login</button>
        </div>
    )
}

export default Login;