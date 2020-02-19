import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../index_page/NavBar';
import ResultSection from '../search_page/ResultSection';
import placeholder from '../../../img/placeholder.jpg';

export default class DetailPage extends Component {
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
                    <div className="col"><img src={placeholder} className="w-100" /></div>
                    <div className="col">
                        <div>Prueba</div>
                        <div className="row">Description</div>
                        <div className="row">Description Content</div>
                        <div className="row">Iconos</div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="row">Carasteristicas</div>
                        <div className="row">Carasteristicas Content</div>
                    </div>
                    <div className="col">
                        <div className="row">Preguntas</div>
                        <div className="row">Preguntas Content</div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">Ultimas preguntas</div>                    
                </div>
            </div>
        );
    }

    
}

if (document.getElementById('page')) {
    ReactDOM.render(<DetailPage />, document.getElementById('page'));
}