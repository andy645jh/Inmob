import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import SearchPage from '../search_page/SearchPage';
import DetailPage from '../detail_page/DetailPage';
import LogInPage from '../orphans/LogInPage';
import RegisterPage from '../orphans/RegisterPage';
import HomePage from './HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class Index extends Component {
    constructor(props)
    {
        super(props); 

        this.state = {
            isLoggedIn: false,
            user: {}
        };
    }

    render() {
        return (
            <Router>
                <div className="container">     
                    <NavBar />
                    <Switch>
                        <Route path='/' exact component={HomePage} />                
                        <Route path='/search' component={SearchPage} />                
                        <Route path='/detail/:id' exact component={DetailPage} />                          
                        <Route path='/login' exact component={LogInPage} />                          
                        <Route path='/register' exact component={RegisterPage} />                          
                    </Switch>                    
                </div>
            </Router>
        );
    }    
}

if (document.getElementById('page')) {
    ReactDOM.render(<Index />, document.getElementById('page'));
}
