import React, { Component } from 'react';
import EstateList from '../index_page/EstateList';
import Accordion from './Accordion';
import ResultSection from './ResultSection';

class SearchPage extends Component {
    constructor(props)
    {
        super(props); 
    }

    render() {
        return (
            <div className="container">  
                <ResultSection />
                <div className="row">
                    <div className="col-md-9">
                        <EstateList isFiltered={true} />
                    </div>

                    <div className="col-md-3">                    
                        <Accordion />
                    </div>
                </div>
                
            </div>
        );
    }

    
}

export default SearchPage;