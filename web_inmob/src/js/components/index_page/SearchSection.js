import React, { Component, createRef } from "react";
import SelectEstateType from "./SelectEstateType";
import SelectOperation from "./SelectOperation";
import SelectDepartamento from "./SelectDepartamento";
import SelectCiudad from "./SelectCiudad";
import { connect } from "react-redux";
import departments from "../../../json/data";
import Debug from "../utils/Debug";
import store from "../../store";
import {
  SELECTED_DEPARTAMENT,
  SELECTED_WORD,
  SELECTED_CITY,
} from "../utils/Enums";

class SearchSection extends Component {
  onChange(e) {
    this.props.wordSelected(e.target.value);
  }

  onChangeDep(val) {
    Debug.Log("SearchSection Onchange: ", this.props);
    this.props.departamentoSeleccionado(val);
    this.props.ciudadSeleccionada(0);
  }

  onChangeCity(val) {
    this.props.ciudadSeleccionada(val);
  }

  onClick(e) {
    this.props.history.push("/search");
  }

  render() {
    const departamento = this.props.searchSelections.departamento;
    const city = this.props.searchSelections.ciudad;    
    const word = this.props.searchSelections.palabra;
    Debug.Log("SearchSection Dep: ", this.props);
    return (
      <>
        <div className="form-row mt-3 mb-3">
          <form className="w-100 d-sm-flex align-items-center justify-content-around">
            <SelectDepartamento              
              onChange={(val) => this.onChangeDep(val)}
              list={departments}
              departament={departamento}
            />
            <SelectCiudad              
              onChange={(val) => this.onChangeCity(val)}
              list={departments}
              departament={departamento}
              city={city}
            />
            <SelectOperation />
            <SelectEstateType />

            <div className="d-sm-inline d-xs-block">
              <input
                id="inputState"
                className="form-control"
                onChange={(e) => this.onChange(e)}
                value={word}
                placeholder="Ejem. Garage"
              />
            </div>

            <div className="d-sm-inline d-xs-block">
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => this.onClick(e)}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  searchSelections: state.reducerIndexPage.searchSelections,
});

const mapDispatchToProps = (dispatch) => ({
  departamentoSeleccionado(dep) {
    dispatch({
      type: SELECTED_DEPARTAMENT,
      dep,
    });
  },

  ciudadSeleccionada(ciudad) {
    dispatch({
      type: SELECTED_CITY,
      ciudad,
    });
  },

  wordSelected(palabra) {
    dispatch({
      type: SELECTED_WORD,
      palabra,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);
