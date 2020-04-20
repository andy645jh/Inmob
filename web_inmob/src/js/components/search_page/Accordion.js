import React, { Component } from 'react';
import FilterOption from './FilterOption';
import { connect } from 'react-redux';
import Debug from '../utils/Debug';
import { SELECTED_DEPARTAMENT } from '../utils/Enums';

class Accordion extends Component 
{
    onClick()
    {
        this.props.departamentoSeleccionado(0);
    }

    render()
    {
        const departaments = this.props.departaments;
        const depSelected = this.props.searchSelections.departamento;
        Debug.Log("Dep Selected: ",depSelected);

        return (
                <>
                <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">FILTROS SELECCIONADOS</h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                { depSelected != 0 && <div className="badge badge-info mx-1">Santander  <span className="badge badge-light"><a href='#' onClick={(e) => this.onClick()} ><span>X</span></a></span></div> }                                
                            </div>
                        </div>
                    </div>
                    { ( departaments.length>1 && 
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                DEPARTAMENTO
                            </button>
                        </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                {
                                    (departaments != null && 
                                    departaments.map((dep) => <FilterOption key={dep.id} id={dep.depId} depName={dep.depName} />))
                                }                              
                            </div>
                        </div>
                    </div>
                    )}
                    <div className="card">
                        <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                CIUDAD
                            </button>
                        </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Medellin
                                    </label>
                                </div>   
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Cali
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row filter-field">
                    <div className="col">
                        <input id="inputState" className="form-control mb-1" placeholder="Ejem. Garage"/>  
                        <button type="button" className="btn btn-primary w-100" onClick={this.props.onClick}>Apply</button>
                    </div>    
                </div>
                </>
        );
    }    
}

const mapStateToProps = state => ({
    departaments: state.reducerSearchPage.departamentsId,
    searchSelections: state.reducerIndexPage.searchSelections
});

const mapDispatchToProps = (dispatch) => ({
    departamentoSeleccionado(dep) {
        dispatch({
          type: SELECTED_DEPARTAMENT,
          dep,
        });
      },
});

export default connect(mapStateToProps, mapDispatchToProps) (Accordion);