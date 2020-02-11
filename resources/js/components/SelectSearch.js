import React, { Component } from 'react';

class SelectSearch extends Component {
    constructor(props)
    {
        super(props); 
        this.state = {            
            defaultVal: this.props.defaultVal,
            opts: this.props.opts
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e)
    {
        console.log("SelectSearch.onChange: "+e.target.value);
        this.props.onChange(e);
    }

    render()
    {
        console.log("Default: ",this.state);
        return(
            <div className="d-sm-inline d-xs-block">                            
                <select id="inputState" className="form-control" onChange={this.onChange}>
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