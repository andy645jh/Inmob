import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SELECTED_OPERATION } from '../utils/Enums';

class SelectOperation extends Component {
    
    constructor(props)
    {
        super(props);      

        this.onChange = this.onChange.bind(this);               
    }  

    onChange(e)
    {
        console.log("SelectOperation.onChange: ",e.target.value);
        //this.props.onChange(e,this.props.type);    
        this.props.operacionSeleccionada(e.target.value);    
    }
    
    render()
    {
        const selected = this.props.searchSelections.operacion;
        return (
            <>                
                <div className="d-sm-inline d-xs-block">
                    <select value={selected} id="inputState" className="form-control" onChange={this.onChange}>                        
                        <option value="0">OPERACION</option>
                        <option value="1">VENTA</option>
                        <option value="2">ARRIENDO</option>
                    </select>
                </div>                
            </>
        )
    }    
}

const mapStateToProps = state => ({
    searchSelections: state.reducerIndexPage.searchSelections
});

const mapDispatchToProps = dispatch => ({
    operacionSeleccionada(operacion)
    {
        dispatch({
            type: SELECTED_OPERATION,
            operacion
        });
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(SelectOperation);