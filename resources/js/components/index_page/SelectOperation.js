import React, { Component } from 'react';

class SelectOperation extends Component {
    
    constructor(props)
    {
        super(props); 
        this.state = {            
            defaultVal: this.props.defaultVal,            
            operation: null
        };

        this.onChange = this.onChange.bind(this);               
    }  

    onChange(e)
    {
        console.log("SelectOperation.onChange: ",this.state.operation[e.target.value]);
        this.props.onChange(e,this.props.type);        
    }
    
    render()
    {        
        return (
            <>                
                <div className="d-sm-inline d-xs-block">
                    <select id="inputState" className="form-control" onChange={this.onChange}>
                        <option defaultValue>{this.state.defaultVal}</option>
                        <option value="0">VENTA</option>
                        <option value="0">ARRIENDO</option>
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


export default SelectOperation