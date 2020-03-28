import React, { Component } from 'react';
import { connect } from 'react-redux';
import Debug from '../utils/Debug';

class SelectDepartamento extends Component {
    
    constructor(props)
    {
        super(props); 
        this.state = {            
            defaultVal: this.props.defaultVal,            
            departments: props.list
        };

        this.onChange = this.onChange.bind(this);               
    }

    componentDidMount() {                   
        //this.setState({ cities: departments, isLoading: false});
    } 

    onChange(e)
    {        
        this.props.departamentoSeleccionado(e.target.value);       
    }
    
    render()
    {
        const {isLoading, departments} = this.state;
        const opts = departments != null ? this.createOpts(departments) : null;
        
        Debug.Log("Default: ",this.state);
        return (
            <>
                {isLoading && "Loading ..."}
                {(!isLoading && opts != null) &&
                    <div className="d-sm-inline d-xs-block">
                        <select id="inputState" className="form-control" onChange={this.onChange}>
                            <option defaultValue>{this.state.defaultVal}</option>
                            {opts}
                        </select>
                    </div>
                }
            </>
        )
    }

    createOpts()
    {
        var arrTen = [];
        for (var k = 0; k < this.state.departments.length; k++) {
            var opt = this.state.departments[k];
            arrTen.push(<option key={opt.id} value={opt.id}>{opt.departamento}</option>);
        }
        return arrTen;
    }
}

const mapStateToProps = state => ({
    searchSelections: state.searchSelections
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectDepartamento);