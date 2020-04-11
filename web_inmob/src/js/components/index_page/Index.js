import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import SearchPage from '../search_page/SearchPage';
import DetailPage from '../detail_page/DetailPage';
import LogInPage from '../orphans/LogInPage';
import RegisterPage from '../orphans/RegisterPage';
import HomePage from './HomePage';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Debug from '../utils/Debug';
import EstatePage from '../estate_page/EstatePage';

export default class Index extends Component {
     
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <NavBar/>
                        <Switch>
                            <Route path='/' exact component={HomePage} />
                            <Route path='/search' exact component={SearchPage} />
                            <Route path='/detail/:id' exact component={DetailPage} />
                            <Route path='/login' exact component={LogInPage} />
                            <Route path='/register' exact component={RegisterPage} />
                            <Route path='/estate' exact component={EstatePage} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

if (document.getElementById('page')) {
    ReactDOM.render(<Index />, document.getElementById('page'));
}
