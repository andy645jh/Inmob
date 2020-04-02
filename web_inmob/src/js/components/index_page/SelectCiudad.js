import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import Debug from '../utils/Debug';

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
        
        const searchSelections = store.getState().reducerIndexPage.searchSelections;
        this.departamento = searchSelections.departamento;   
        const list = this.props.list[searchSelections.departamento].ciudades;                        
        this.cities = this.createOpts(list); 
        this.setState({isLoading:false});

        const unsubscribe = store.subscribe(() => {   
           
            const searchSelections = store.getState().reducerIndexPage.searchSelections;
                        
            if(searchSelections.departamento!==this.departamento){
                const list = this.props.list[searchSelections.departamento].ciudades;
                this.departamento = searchSelections.departamento;
                this.props.ciudadSeleccionada(0);
                this.cities = this.createOpts(list);                
            }          
        });

          
    }

    onChange(e)
    {       
        this.props.ciudadSeleccionada(e.target.value);
    }
    
    render()
    {           
        const selected = this.props.searchSelections.ciudad;
        Debug.Log("SelectCiudad.Default: ",this.state);
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
        for (var k = 0; k < data.length; k++) {
            var opt = data[k];
            arrTen.push(<option key={k} value={k}>{opt}</option>);
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
            type: 'CIUDAD_SELECCIONADA',
            ciudad
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCiudad);