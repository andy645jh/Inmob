import React, { Component } from "react";
import { connect } from "react-redux";
import { SELECTED_DEPARTAMENT } from "../utils/Enums";

class FilterContentTextBox extends Component 
{ 

  render() {
    return (     
        <>
          <input
            className="form-control my-1"
            type="text"
            placeholder={this.props.placeholder}
            min={this.props.min}
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterContentTextBox);
