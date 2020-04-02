import React, { Component, createRef } from 'react';
import SelectEstateType from './SelectEstateType';
import SelectOperation from './SelectOperation';
import SelectDepartamento from './SelectDepartamento';
import SelectCiudad from './SelectCiudad';
import { connect } from 'react-redux';
import departments from '../../../json/data';
import Debug from '../utils/Debug';
import store from '../../store';

class SearchSection extends Component {
   
    constructor(props)
    {
        super(props);
    }   

    onChange(e)
    {        
        this.props.wordSelected(e.target.value);
    }

    onClick(e)
    {         
        this.props.history.push('/search');
    }

    render() {        
        const word = this.props.searchSelections.palabra;
        return (       
            <>            
            <div className="form-row mt-3 mb-3">
                <form className="w-100 d-sm-flex align-items-center justify-content-around"> 
                
                    <SelectDepartamento list={departments} />
                    <SelectCiudad list={departments} />
                    <SelectOperation />
                    <SelectEstateType />
                         
                    <div className="d-sm-inline d-xs-block">                            
                        <input id="inputState" className="form-control" onChange={(e)=> this.onChange(e)} value={word} placeholder="Ejem. Garage" />                                                           
                    </div> 
        
                    <div className="d-sm-inline d-xs-block">                            
                        <button type="button" className="btn btn-primary" onClick={(e) => this.onClick(e)}>Search</button>
                    </div>                                                                  
                </form>
            </div>            
            </>
        )           
    }    
}

const mapStateToProps = state => ({
    searchSelections: state.reducerIndexPage.searchSelections
});

const mapDispatchToProps = dispatch => ({
    departamentoSeleccionado(dep)
    {
        dispatch({
            type: 'DEPARTAMENTO_SELECCIONADO',
            dep
        });
    },

    wordSelected(palabra)
    {
        dispatch({
            type: 'PALABRA_SELECCIONADA',
            palabra
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);