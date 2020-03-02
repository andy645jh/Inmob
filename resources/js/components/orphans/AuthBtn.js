import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
const AuthBtn = ({isLoggedIn,logoutUser}) =>
{     
    const test = (e)=>
    {
        console.log("CLick Logout");
        logoutUser();
    }
    console.log("AuthBtn.isLoggedIn: "+isLoggedIn);
    if(!isLoggedIn)
    {
        return <Link className="nav-link" to="/login">Log in</Link>;
    }else{
        return <a className="nav-link" href="#" onClick={test}>Log Out</a>;
    }
}

export default AuthBtn;