import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import Counter from './Counter';
import CardInfo from './CardInfo';
import placeholder from '../../img/placeholder.jpg'; 
import SearchSection from './SearchSection';
import EstateList from './EstateList';

export default class Main extends Component {
    constructor(props)
    {
        super(props); 
    }

    render() {
        return (
            <div className="container">     
                <div className="menu">                    
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Inmo</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Arriendo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ventas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Proyectos</a>
                            </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="banner row" style={{ height: 300 +'px' }}>
                    <img className="card-img-top" height="100%" src={placeholder} alt="placeholder"/>
                </div>

                <SearchSection />
                
                <EstateList />
                
            </div>
        );
    }

    
}

if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}
