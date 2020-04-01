import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                        <option value="0">VENTA</option>
                        <option value="1">ARRIENDO</option>
                    </select>
                </div>                
            </>
        )
    }

    createOpts()
    {
        var arrTen = [];
        for (var k = 0; k < this.state.operation.length; k++) {
            var opt = this.state.operation[k];
            arrTen.push(<option key={opt.id} value={opt.id}>{opt.name}</option>);
        }
        return arrTen;
    }
}

const mapStateToProps = state => ({
    searchSelections: state.reducerIndexPage.searchSelections
});

const mapDispatchToProps = dispatch => ({
    operacionSeleccionada(operacion)
    {
        dispatch({
            type: 'OPERACION_SELECCIONADA',
            operacion
        });
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(SelectOperation);