import React, { Component } from 'react';
import { connect } from 'react-redux';
import Debug from '../utils/Debug';
import Service from '../../services/Service';
import { SET_ESTATE_TYPE } from '../utils/Enums';

class SelectEstateType extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };

        this.estateTypes = [];
        this.opts = [];
        this.service = new Service("estate_type");
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.getEstatesTypes();
    }

    async getEstatesTypes() {

        try {
            this.setState({ isLoading: true });
            const estatesJson = await this.service.getAll();
            Debug.Log("SelectEstateType.Estates 0: ", estatesJson);
            this.estateTypes = estatesJson;
            this.opts = estatesJson != null ? this.createOpts(estatesJson) : null;

        } catch (err) {
            console.error(err);
        }

        this.setState({ isLoading: false });

    }

    onChange(e) {
        Debug.Log("SelectEstateType.onChange: ", this.estateTypes[e.target.value]);
        //this.props.onChange(e,this.props.type);     
        this.props.estateTypeSeleccionada(e.target.value);
    }

    render() {
        const { isLoading } = this.state;
        const selected = this.props.searchSelections.tipoInmueble;

        Debug.Log("SelectEstateType.Default: ", this.state);
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

    createOpts(estateTypes) {
        var arrTen = [];
        arrTen.push(<option key={0} value={0}>INMUEBLE</option>);
        for (var k = 0; k < estateTypes.length; k++) {
            var opt = estateTypes[k];
            arrTen.push(<option key={opt.id + 1} value={opt.id + 1}>{opt.name}</option>);
        }
        return arrTen;
    }
}

const mapStateToProps = state => ({
    searchSelections: state.reducerIndexPage.searchSelections
});

const mapDispatchToProps = dispatch => ({
    estateTypeSeleccionada(tipoInmueble) {
        dispatch({
            type: SET_ESTATE_TYPE,
            tipoInmueble
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectEstateType);