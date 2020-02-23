import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../index_page/NavBar';
import placeholder from '../../../img/placeholder.jpg';
import StorageData from '../utils/StorageData';
import DetailTitle from './DetailTitle';
import SectionQuestion from './SectionQuestion';

export default class DetailPage extends Component {
    constructor(props)
    {
        super(props); 
        this.state = {
            estate: null,
            isLoading: null
        };

        this.id = StorageData.get("id");
    }

    componentDidMount()
    {
        this.processData();
    }

    async processData() {
        if (! this.state.players) {
            try {
                this.setState({ isLoading: true });
                const response = await fetch('https://demo9207076.mockable.io/estates',
                {
                    headers:{
                        elkin_key: 'elkin_value'
                    }
                });
                
                const estatesJson = await response.json();                
                //console.log("Estates 0: ", estatesJson);
                this.setState({ estate: this.getEstate(estatesJson.estates,this.id), isLoading: false});
                
            } catch (err) {
                this.setState({ isLoading: false });
                console.error(err);
            }
        }
    }

    getEstate(estates, id)
    {        
        for (var i = 0; i < estates.length; i++)
        {            
            if (estates[i].id == id)
            {
                return estates[i];
            }    
        }
        return null;
    }

    render() {
        const { isLoading, estate } = this.state; 
        console.log("Estate: ",estate);
        return (
            <div className="container">     
                <NavBar />             
                                
                {isLoading && "Loading ... "}
                <>
                    {
                        (!isLoading && estate!=null) && 
                        (<>
                            <DetailTitle title="RESULT" />
                
                            <div className="row detail-p-tb">
                                <div className="col"><img src={placeholder} className="w-100" /></div>
                                <div className="col">                                    
                                    <div className="row detail-title blue">DESCRIPCION</div>
                                    <div className="row">Description Content</div>
                                    <div className="row">Iconos</div>
                                </div>
                            </div>

                            <SectionQuestion />

                            <div className="row detail-p-tb">
                                <div className="col">
                                    <div className="row detail-title">ULTIMAS PREGUNTAS</div>
                                    <div className="row">
                                        <div className="col">                                            
                                            <div className="row"><p>Carasteristicas Content</p></div>
                                            <div className="row"><p>Carasteristicas Content</p></div>
                                            <div className="row"><p>Carasteristicas Content</p></div>                                            
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </>)
                    }
                </>
            </div>
        );
    }

    
}

if (document.getElementById('page')) {
    ReactDOM.render(<DetailPage />, document.getElementById('page'));
}