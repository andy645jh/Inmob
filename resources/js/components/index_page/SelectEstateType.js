import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectEstateType extends Component {
    
    constructor(props)
    {
        super(props); 
        this.state = {            
            defaultVal: this.props.defaultVal,            
            estateTypes: null
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
                const response = await fetch('api/estate_types');                
                const estatesJson = await response.json();                
                console.log("SelectEstateType.Estates 0: ", estatesJson);
                this.setState({ estateTypes: estatesJson, isLoading: false});
                
            } catch (err) {
                this.setState({ isLoading: false });
                console.error(err);
            }
        }
    }

    onChange(e)
    {
        console.log("SelectEstateType.onChange: ",this.state.estateTypes[e.target.value]);
        //this.props.onChange(e,this.props.type);     
        this.props.estateTypeSeleccionada(e.target.value);
    }
    
    render()
    {
        const {isLoading, estateTypes} = this.state;
        const opts = estateTypes != null ? this.createOpts(estateTypes) : null;
        
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
        for (var k = 0; k < this.state.estateTypes.length; k++) {
            var opt = this.state.estateTypes[k];
            arrTen.push(<option key={opt.id} value={opt.id}>{opt.name}</option>);
        }
        return arrTen;
    }
}

const mapStateToProps = state => ({
    searchSelections: state.searchSelections
});

const mapDispatchToProps = dispatch => ({
    estateTypeSeleccionada(tipoInmueble)
    {
        dispatch({
            type: 'TIPO_INMUEBLE_SELECCIONADO',
            tipoInmueble
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectEstateType);