import React from "react";
import axios from "axios";
import {Link} from "react-router-dom"

import { useSelector, useDispatch } from 'react-redux'
import {LogInAction, LogOutAction, setEmail} from "../actions.js";


function Navbar(){

    React.useEffect(()=>{
        checkLogin();
    }, [])

    const dispatch = useDispatch()

    const isLoggedIn = useSelector((state) => state.LoggedIn);

    const checkLogin = async () => {
        var response = await axios.get("/rememberlogin");
        console.log(response);
        if(response.data.status === true){
            dispatch(setEmail(response.data.email));
            dispatch(LogInAction());
        }

    }

    return (
        <div className = "navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to = "/" className = "navbar-brand">C Site </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className = "collapse navbar-collapse" id = "navbarContent">
                <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className = "nav-item">
                        <Link to ="login" className = "nav-link">{isLoggedIn ? 'Logout' : "Login"}</Link>
                    </li>
                    <li className = "nav-item">
                        <Link to = "/signup" className = "nav-link"> Signup</Link>
                    </li>
                    <li className = "nav-item">
                        <Link to="#" className = "nav-link"> Contact</Link>
                    </li>
                    <li className = "nav-item">
                        <Link to ="#" className = "nav-link"> Help</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;