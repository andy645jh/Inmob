import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import placeholder from '../../img/placeholder.jpg'; 
import SearchSection from './SearchSection';
import EstateList from './EstateList';
import NavBar from './NavBar';
import Accordion from './Accordion';

export default class SearchPage extends Component {
    constructor(props)
    {
        super(props); 
    }

    render() {
        return (
            <div className="container">     
                <NavBar />             

                <div className="row">
                    <div className="col-md-9">
                        <EstateList />
                    </div>

                    <div className="col-md-3">                    
                        <Accordion />
                    </div>
                </div>
                
            </div>
        );
    }

    
}

if (document.getElementById('page')) {
    ReactDOM.render(<SearchPage />, document.getElementById('page'));
}