import React, { Component } from 'react';
import SelectEstateType from './SelectEstateType';
import SelectOperation from './SelectOperation';
import SelectDepartamento from './SelectDepartamento';
import SelectCiudad from './SelectCiudad';
import SearchTypes from '../utils/Enums';
import StorageData from '../utils/StorageData';
import { connect } from 'react-redux';
import departments from '../../../json/data';

class SearchSection extends Component {
    constructor(props)
    {
        super(props);  
        console.log("SearchSection.Props: ",props);      
    }  

    onClick(e)
    {
        location.href = "/hola";
    }

    onChange(e, data)
    {                
        StorageData.set(data, e.target.value);
    }

    render() {        

        return (       
            <>            
            <div className="form-row mt-3 mb-3">
                <form className="w-100 d-sm-flex align-items-center justify-content-around"> 
                
                    <SelectDepartamento list={departments} defaultVal={this.props.searchSelections.departamento} type={SearchTypes.DEP} onChange={this.onChange} />
                    <SelectCiudad list={departments} defaultVal={this.props.searchSelections.ciudad} type={SearchTypes.CIT} onChange={this.onChange}/>
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
            </>
        )           
    }    
}

const mapStateToProps = state => ({
    searchSelections: state.searchSelections
});

const mapDispatchToProps = state => ({
    departamentoSeleccionado(dep)
    {
        dispatch({
            type: 'DEPARTAMENTO_SELECCIONADO',
            dep
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);