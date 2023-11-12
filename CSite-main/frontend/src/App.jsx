import React from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./files/navbar.jsx"
import Home from "./files/home.jsx";
import Login from "./files/login.jsx";
import SignUp from "./files/signup.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path = "/" element = { <Home />}></Route>
        <Route exact path = "/login" element = { <Login />}></Route>
        <Route exact path = "/signup" element = { <SignUp />}></Route>
      </Routes>
    </Router>
    
  )
}

export default App;
