import React, { Component } from 'react';
import EstateList from '../index_page/EstateList';
import Accordion from './Accordion';
import ResultSection from './ResultSection';

class SearchPage extends Component 
{    

    onClick(e)
    {
        //e.preventDefault(); 
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