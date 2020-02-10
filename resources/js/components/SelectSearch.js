import React, { Component } from 'react';

class SelectSearch extends Component {
    constructor(props)
    {
        super(props); 
        this.state = {            
            defaultVal: this.props.defaultVal,
            opts: this.props.opts
        };
    }

    render()
    {
        console.log("Default: ",this.state);
        return(
            <div className="d-sm-inline d-xs-block">                            
                <select id="inputState" className="form-control">
                    <option defaultValue>{this.state.defaultVal}</option>
                    { this.createOpts() }
                </select>
            </div>
        )
    }

    createOpts()
    {
        var arrTen = [];
        for (var k = 0; k < this.state.opts.length; k++) {
            var opt = this.state.opts[k];
            arrTen.push(<option key={opt.id} value={opt.id}>{opt.name}</option>);
        }
        return arrTen;
    }
}


export default SelectSearch