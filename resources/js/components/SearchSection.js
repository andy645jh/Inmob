import React, { Component } from 'react';
import SelectSearch from './SelectSearch';


class SearchSection extends Component {
    constructor(props)
    {
        super(props); 
        this.state = {
            estates_type: null,
            isLoading: null
        };
    }

    componentDidMount() {
        this.getEstatesTypes();              
    }

    async getEstatesTypes() {
        if (! this.state.players) {
            try {
                this.setState({ isLoading: true });
                const response = await fetch('https://demo9207076.mockable.io/test',
                {
                    headers:{
                        elkin_key: 'elkin_value'
                    }
                });
                
                const estatesJson = await response.json();                
                console.log("SearchSection.Estates 0: ", estatesJson.estates_type);
                this.setState({ estates_type: estatesJson.estates_type, isLoading: false});
                
            } catch (err) {
                this.setState({ isLoading: false });
                console.error(err);
            }
        }
    }

    createOpts(statesTypes)
    {
        var arrTen = [];
        for (var k = 0; k < statesTypes.length; k++) {
            arrTen.push(<option key={statesTypes[k].id} value={statesTypes[k].id}> {statesTypes[k].name} </option>);
        }
        return arrTen;
    }

    onClick(e)
    {
        console.log("Onclick");
    }

    onChange(e)
    {
        console.log("onChange: "+e.target.value);
    }

    render() {
        const {isLoading, estates_type} = this.state;
        const opts = estates_type != null ? this.createOpts(estates_type):null;
        console.log("Opts: ",opts);
        console.log("statesTypes: ",estates_type);

        return (       
            <>
            { isLoading && "Loading ..."}
            { (!isLoading && estates_type!=null) && 
            <div className="form-row mt-3 mb-3">
                <form className="w-100 d-sm-flex align-items-center justify-content-around"> 
                    <SelectSearch defaultVal="DEPARTAMENTO" opts={estates_type} onChange={this.onChange} />
                    <SelectSearch defaultVal="CIUDAD" opts={estates_type} onChange={this.onChange}/>
                    <SelectSearch defaultVal="OPERACION" opts={estates_type} onChange={this.onChange}/>
                    <SelectSearch defaultVal="TIPO DE INMUEBLE" opts={estates_type} onChange={this.onChange}/>
                         
                    <div className="d-sm-inline d-xs-block">                            
                        <input id="inputState" className="form-control" placeholder="Ejem. Garage"/>                                                           
                    </div> 
        
                    <div className="d-sm-inline d-xs-block">                            
                        <button type="button" className="btn btn-primary" onClick={this.onClick}>Search</button>
                    </div>   
                    <a href="/hola">Prueba</a>                                              
                </form>
            </div>
            }
            </>
        )           
    }    
}
export default SearchSection