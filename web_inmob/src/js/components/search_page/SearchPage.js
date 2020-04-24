import React, { Component } from 'react';
import EstateList from '../index_page/EstateList';
import Accordion from './Accordion';
import ResultSection from './ResultSection';
import Service from '../../services/Service';

class SearchPage extends Component 
{    

    constructor()
    {
        super();
        this.service = new Service("estate");        
    }

    onClick(e)
    {
        e.preventDefault();
        this.service.search();
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
                        <Accordion onClick={(e)=>this.onClick(e)} />
                    </div>
                </div>
                
            </div>
        );
    }

    
}

export default SearchPage;