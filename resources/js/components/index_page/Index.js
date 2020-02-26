import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import SearchPage from '../search_page/SearchPage';
import DetailPage from '../detail_page/DetailPage';
import HomePage from './HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class Index extends Component {
    constructor(props)
    {
        super(props); 
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
                    </Switch>                    
                </div>
            </Router>
        );
    }    
}

if (document.getElementById('page')) {
    ReactDOM.render(<Index />, document.getElementById('page'));
}
