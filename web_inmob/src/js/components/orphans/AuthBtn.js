import React from 'react';
import { Link } from 'react-router-dom';
import Debug from '../utils/Debug';

const AuthBtn = ({isLoggedIn,logoutUser}) =>
{     
    const test = (e)=>
    {
        Debug.Log("CLick Logout");
        logoutUser();
    }
    Debug.Log("AuthBtn.isLoggedIn: "+isLoggedIn);
    if(!isLoggedIn)
    {
        return <Link className="nav-link" to="/login">Log in</Link>;
    }else{
        return <a className="nav-link" href="#" onClick={test}>Log Out</a>;
    }
}

export default AuthBtn;