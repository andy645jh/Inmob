import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import Debug from '../utils/Debug';
import { SELECTED_CITY } from '../utils/Enums';

class SelectCiudad extends Component {
    
    constructor(props)
    {
        super(props);  
        this.state = {
            isLoading:true
        }

        this.cities = [];
        this.onChange = this.onChange.bind(this);               
    }   

    componentDidMount()
    {              
        this.updateCombo();         
    }

    updateCombo()
    {
        const list = this.props.list[this.props.departament-1].ciudades;                        
        this.cities = this.createOpts(list); 
        Debug.Log("SelectCiudad.Default: ",this.props);
    }

    onChange(e)
    {   
        this.props.onChange(e.target.value);
    }
    
    render()
    {           
        const selected = this.props.city;
        this.updateCombo();

        return (
            <>
                {this.cities == null && "Loading ..." }                
                <div className="d-sm-inline d-xs-block">
                    <select id="inputState" className="form-control" onChange={this.onChange} value={selected}>                        
                        {(this.cities != null) && this.cities}
                    </select>
                </div>                
            </>
        )
    }

    createOpts(data)
    {
        var arrTen = [];
        arrTen.push(<option key={0} value={0}>CIUDAD</option>);
        for (var k = 0; k < data.length; k++) {
            var opt = data[k];
            arrTen.push(<option key={k + 1} value={k + 1}>{opt}</option>);
        }
        return arrTen;
    }
}

const mapStateToProps = state => ({
    searchSelections: state.reducerIndexPage.searchSelections
});

const mapDispatchToProps = dispatch => ({
    ciudadSeleccionada(ciudad)
    {
        dispatch({
            type: SELECTED_CITY,
            ciudad
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCiudad);