import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import placeholder from '../../img/placeholder.jpg'; 
import SearchSection from './SearchSection';
import EstateList from './EstateList';
import NavBar from './NavBar';

export default class IndexPage extends Component {
    constructor(props)
    {
        super(props); 
    }

    render() {
        return (
            <div className="container">     
                <NavBar />

                <div className="banner row" style={{ height: 300 +'px' }}>
                    <img className="card-img-top" height="100%" src={placeholder} alt="placeholder"/>
                </div>

                <SearchSection />
                
                <EstateList />
                
            </div>
        );
    }

    
}

if (document.getElementById('page')) {
    ReactDOM.render(<IndexPage />, document.getElementById('page'));
}
