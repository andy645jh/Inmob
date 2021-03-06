import React, { Component } from "react";
import { connect } from "react-redux";
import Debug from "../utils/Debug";
import { SELECTED_CITY } from "../utils/Enums";

class SelectCiudad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };

    this.cities = [];
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.updateCombo();
  }

  updateCombo() 
  {
    //si no ha seleccionado departamento
    if(this.props.departament==0) 
    {
      this.cities = this.createOpts([]);
      return;
    }
    
    const list = this.props.list[this.props.departament - 1].ciudades;
    this.cities = this.createOpts(list);
    Debug.Log("SelectCiudad.Default: ", this.props);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const attrs = this.props.attrs ? this.props.attrs : "";
    const selected = this.props.city;
    this.updateCombo();

    return (
      <>
        {this.cities == null && "Loading ..."}

        <select
          id="inputState"
          className={"form-control " + attrs}
          onChange={this.onChange}
          value={selected}
        >
          {this.cities != null && this.cities}
        </select>
      </>
    );
  }

  createOpts(data) {
    var arrTen = [];
    arrTen.push( <option key={0} value={0}>CIUDAD</option> );
    for (var k = 0; k < data.length; k++) {
      var opt = data[k];
      arrTen.push( <option key={k + 1} value={k + 1}>{opt}</option> );
    }
    return arrTen;
  }
}

const mapStateToProps = (state) => ({
  searchSelections: state.reducerIndexPage.searchSelections,
});

const mapDispatchToProps = (dispatch) => ({
  ciudadSeleccionada(ciudad) {
    dispatch({
      type: SELECTED_CITY,
      ciudad,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCiudad);
