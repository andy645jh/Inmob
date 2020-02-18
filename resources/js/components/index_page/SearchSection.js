import React, { Component } from 'react';
import SelectEstateType from './SelectEstateType';
import SelectOperation from './SelectOperation';
import SelectDepartamento from './SelectDepartamento';
import SelectCiudad from './SelectCiudad';
import SearchTypes from '../utils/Enums';
import StorageData from '../utils/StorageData';

class SearchSection extends Component {
    constructor(props)
    {
        super(props); 
        this.state = {
            estates: null,
            isLoading: null
        };
    }

    componentDidMount() {
        this.getEstates();              
    }

    async getEstates() {
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
                console.log("SearchSection.Estates 0: ", estatesJson.estates);
                this.setState({ estates: estatesJson.estates, isLoading: false});
                
            } catch (err) {
                this.setState({ isLoading: false });
                console.error(err);
            }
        }
    }

    createOpts(estates)
    {
        var arrTen = [];
        for (var k = 0; k < estates.length; k++) {
            arrTen.push(<option key={estates[k].id} value={estates[k].id}> {estates[k].name} </option>);
        }
        return arrTen;
    }

    onClick(e)
    {
        location.href = "/hola";
    }

    onChange(e, data)
    {                
        StorageData.set(data, e.target.value);
        //window.localStorage.setItem(data, e.target.value);
    }

    render() {
        const {isLoading, estates} = this.state;
        const opts = estates != null ? this.createOpts(estates):null;
        console.log("Opts: ",opts);
        console.log("statesTypes: ",estates);

        return (       
            <>
            { isLoading && "Loading ..."}
            { (!isLoading && estates!=null) && 
            <div className="form-row mt-3 mb-3">
                <form className="w-100 d-sm-flex align-items-center justify-content-around"> 
                
                    <SelectDepartamento defaultVal="DEPARTAMENTO" type={SearchTypes.DEP} onChange={this.onChange} />
                    <SelectCiudad defaultVal="CIUDAD" type={SearchTypes.CIT} onChange={this.onChange}/>
                    <SelectOperation defaultVal="OPERACION" type={SearchTypes.OPE} onChange={this.onChange}/>
                    <SelectEstateType defaultVal="TIPO DE INMUEBLE" type={SearchTypes.INM} onChange={this.onChange}/>
                         
                    <div className="d-sm-inline d-xs-block">                            
                        <input id="inputState" className="form-control" placeholder="Ejem. Garage"/>                                                           
                    </div> 
        
                    <div className="d-sm-inline d-xs-block">                            
                        <button type="button" className="btn btn-primary" onClick={this.onClick}>Search</button>
                    </div>                                                                  
                </form>
            </div>
            }
            </>
        )           
    }    
}

export default SearchSection