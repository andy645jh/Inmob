import React, { Component } from 'react';

class SelectSearch extends Component {
    
    constructor(props)
    {
        super(props); 
        this.state = {            
            defaultVal: this.props.defaultVal,            
            cities: null
        };

        this.onChange = this.onChange.bind(this);        
    }

    componentDidMount() {
        this.getCities();              
    }

    async getCities() {
        if (! this.state.players) {
            try {
                this.setState({ isLoading: true });
                const response = await fetch('https://demo9207076.mockable.io/cities',
                {
                    
                });
                
                const estatesJson = await response.json();                
                console.log("SearchSection.Estates 0: ", estatesJson);
                this.setState({ cities: estatesJson, isLoading: false});
                
            } catch (err) {
                this.setState({ isLoading: false });
                console.error(err);
            }
        }
    }

    onChange(e)
    {
        console.log("SelectSearch.onChange: "+e.target.value);
        this.props.onChange(e,this.props.type);
    }
    
    render()
    {
        const {isLoading, cities} = this.state;
        const opts = cities != null ? this.createOpts(cities) : null;
        
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
        for (var k = 0; k < this.state.cities.length; k++) {
            var opt = this.state.cities[k];
            arrTen.push(<option key={opt.id} value={opt.id}>{opt.departamento}</option>);
        }
        return arrTen;
    }
}


export default SelectSearch