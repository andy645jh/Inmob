import React, { Component } from 'react';
import SelectEstateType from './SelectEstateType';
import SelectOperation from './SelectOperation';
import SelectDepartamento from './SelectDepartamento';
import SelectCiudad from './SelectCiudad';
import { connect } from 'react-redux';
import departments from '../../../json/data';
import Debug from '../utils/Debug';

class SearchSection extends Component {
   

    onClick(e)
    {        
        this.props.history.push('/search');
    }

    render() {        

        return (       
            <>            
            <div className="form-row mt-3 mb-3">
                <form className="w-100 d-sm-flex align-items-center justify-content-around"> 
                
                    <SelectDepartamento list={departments} />
                    <SelectCiudad list={departments} />
                    <SelectOperation />
                    <SelectEstateType />
                         
                    <div className="d-sm-inline d-xs-block">                            
                        <input id="inputState" className="form-control" placeholder="Ejem. Garage"/>                                                           
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);