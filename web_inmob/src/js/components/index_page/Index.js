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
import store from '../../data/store';
import Debug from '../utils/Debug';

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            user: {}
        };
    }

    componentDidMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            Debug.Log("Json: " , AppState);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
        }
    }

    logoutUser() {
        let appState = {
            isLoggedIn: false,
            user: {}
        };
        // save app state with user date in local storage
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
    };

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <NavBar isLoggedIn={this.state.isLoggedIn} logoutUser={() => this.logoutUser()} />
                        <Switch>
                            <Route path='/' exact component={HomePage} />
                            <Route path='/search' component={SearchPage} />
                            <Route path='/detail/:id' exact component={DetailPage} />
                            <Route path='/login' exact component={LogInPage} />
                            <Route path='/register' exact component={RegisterPage} />
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