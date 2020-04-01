import React, { Component } from 'react';
import { connect } from 'react-redux';
import Debug from '../utils/Debug';

class SelectDepartamento extends Component {
    
    constructor(props)
    {
        super(props); 
        this.state = {                        
            departments: props.list
        };

        this.onChange = this.onChange.bind(this);         
    }

    componentDidMount() { 
        this.opts = this.state.departments != null ? this.createOpts(this.state.departments) : null;            
        this.setState({isLoading:false});
    } 

    onChange(e)
    {        
        this.props.departamentoSeleccionado(e.target.value);       
    }
    
    render()
    {
        const selected = this.props.searchSelections.departamento;
        const {isLoading} = this.state;  
       
        return (
            <>
                {isLoading && "Loading ..."}
                {(!isLoading && this.opts != null) &&
                    <div className="d-sm-inline d-xs-block">
                        <select id="inputState" className="form-control" onChange={this.onChange} value={selected}>                            
                            {this.opts}
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectDepartamento);