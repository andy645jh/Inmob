import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EstateList from '../index_page/EstateList';
import NavBar from '../index_page/NavBar';
import Accordion from './Accordion';
import ResultSection from './ResultSection';

export default class SearchPage extends Component {
    constructor(props)
    {
        super(props); 
    }

    render() {
        return (
            <div className="container">     
                <NavBar />             
                <ResultSection />
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