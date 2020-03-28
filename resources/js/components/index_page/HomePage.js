import React, { Component } from 'react';
import placeholder from '../../../img/placeholder.jpg'; 
import SearchSection from './SearchSection';
import EstateList from './EstateList';
import Debug from '../utils/Debug';

class HomePage extends Component {
    constructor(props)
    {
        super(props); 
        Debug.Log("HomePage.Props: ",props);   
    }

    render() {
        return (
            <div className="container"> 
                <div className="banner row" style={{ height: 300 +'px' }}>
                    <img className="card-img-top" height="100%" src={placeholder} alt="placeholder"/>
                </div>

                <SearchSection {...this.props} />                
                <EstateList />
                
            </div>
        );
    }

    
}

export default HomePage;