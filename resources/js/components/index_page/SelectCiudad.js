import React, { Component } from 'react';
import EventsObserver from '../utils/EventsObserver';

class SelectCiudad extends Component {
    
    constructor(props)
    {
        super(props); 
        this.state = {            
            defaultVal: this.props.defaultVal,            
            cities: null
        };

        EventsObserver.subscribe("Test", (data) =>
        {            
            var info = this.createOpts(data);
            this.setState({cities : info});           
        });
        this.onChange = this.onChange.bind(this);               
    }   

    onChange(e)
    {
        console.log("SelectSearch.onChange: ",this.state.cities[e.target.value].ciudades);
        this.props.onChange(e,this.props.type);       
    }
    
    render()
    {
        const {isLoading, cities} = this.state;        
        
        console.log("Default: ",this.state);
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


export default SelectCiudad