import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../data/store';
import Debug from '../utils/Debug';

class SelectCiudad extends Component {
    
    constructor(props)
    {
        super(props); 
        this.state = {            
            defaultVal: this.props.defaultVal,            
            cities: null
        };

        const unsubscribe = store.subscribe(() => {   
           
            const searchSelections = store.getState().searchSelections;
            Debug.Log("dep: ",searchSelections.departamento); 
            if(searchSelections.departamento!=='DEPARTAMENTO'){
                const list = this.props.list[searchSelections.departamento].ciudades;
                var info = this.createOpts(list);
                this.setState({cities : info});  
            }          
        });
                
        this.onChange = this.onChange.bind(this);               
    }   

    onChange(e)
    {       
        this.props.ciudadSeleccionada(e.target.value);
    }
    
    render()
    {
        const {isLoading, cities} = this.state;        
        
        Debug.Log("Default: ",this.state);
        return (
            <>
                {isLoading && "Loading ..." }                
                <div className="d-sm-inline d-xs-block">
                    <select id="inputState" className="form-control" onChange={this.onChange}>
                        <option defaultValue>{this.state.defaultVal}</option>
                        {(!isLoading && cities != null) && cities}
                    </select>
                </div>                
            </>
        )
    }

    createOpts(data)
    {
        var arrTen = [];
        for (var k = 0; k < data.length; k++) {
            var opt = data[k];
            arrTen.push(<option key={k} value={k}>{opt}</option>);
        }
        return arrTen;
    }
}

const mapStateToProps = state => ({
    searchSelections: state.searchSelections
});

const mapDispatchToProps = dispatch => ({
    ciudadSeleccionada(ciudad)
    {
        dispatch({
            type: 'CIUDAD_SELECCIONADA',
            ciudad
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCiudad);