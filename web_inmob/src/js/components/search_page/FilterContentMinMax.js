import React, { Component } from "react";
import { connect } from "react-redux";
import { SELECTED_DEPARTAMENT } from "../utils/Enums";

class FilterContentMinMax extends Component 
{ 

  render() {
    return (     
        <>
          <input
            className="form-control my-1"
            type="number"
            placeholder="Min"
            min={this.props.min}
          />
          <input
            className="form-control my-1"
            type="number"
            placeholder="Max"
          />       
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
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContentMinMax);
