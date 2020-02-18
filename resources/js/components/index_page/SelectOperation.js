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

    componentDidMount() {
        this.getEstatesTypes();              
    }

    async getEstatesTypes() {
        if (! this.state.players) {
            try {
                this.setState({ isLoading: true });
                const response = await fetch('https://demo9207076.mockable.io/operation',
                {
                    
                });
                
                const estatesJson = await response.json();                
                console.log("SelectOperation.Estates 0: ", estatesJson);
                this.setState({ operation: estatesJson.operation, isLoading: false});
                
            } catch (err) {
                this.setState({ isLoading: false });
                console.error(err);
            }
        }
    }

    onChange(e)
    {
        console.log("SelectOperation.onChange: ",this.state.operation[e.target.value]);
        this.props.onChange(e,this.props.type);        
    }
    
    render()
    {
        const {isLoading, operation} = this.state;
        const opts = operation != null ? this.createOpts(operation) : null;
        
        console.log("Default: ",this.state);
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
        for (var k = 0; k < this.state.operation.length; k++) {
            var opt = this.state.operation[k];
            arrTen.push(<option key={opt.id} value={opt.id}>{opt.name}</option>);
        }
        return arrTen;
    }
}


export default SelectOperation