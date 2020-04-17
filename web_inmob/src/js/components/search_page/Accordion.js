import React, { Component } from 'react';
import FilterOption from './FilterOption';
import { connect } from 'react-redux';
import Debug from '../utils/Debug';

class Accordion extends Component 
{
    render()
    {
        const departaments = this.props.departaments;
        Debug.Log("Accordion Dep: ",this.props);
        return (
                <>
                <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    FILTROS SELECCIONADOS
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
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

export default connect(mapStateToProps,{}) (Accordion);