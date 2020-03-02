import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
const AuthBtn = () =>
{     
    const test = (e)=>
    {
        console.log("CLick Logout");
    }
   
    if(localStorage.getItem("isLoggedIn"))
    {
        return <Link className="nav-link" to="/login">Log in</Link>;
    }else{
        return <a className="nav-link" href="#" onClick={test}>Log Out</a>;
    }
}

export default AuthBtn;