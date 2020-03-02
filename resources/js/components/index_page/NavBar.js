import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import AuthBtn from '../orphans/AuthBtn';

const NavBar = () => (    
    <div className="row">
        <div className="col menu">                    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Inmo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">                        
                        <Link className="nav-link" to="/search">Search</Link>
                    </li>                    
                    <li className="nav-item">
                        <a className="nav-link" href="#">Proyectos</a>
                    </li>
                    </ul>
                </div>   
                <div className="col justify-content-end text-right">
                    <AuthBtn />                    
                </div>                         
            </nav>
        </div>        
    </div>
    
)

export default NavBar