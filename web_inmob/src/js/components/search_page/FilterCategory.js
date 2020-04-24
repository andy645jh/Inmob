import React, { Component } from "react";
import Debug from "../utils/Debug";
import { connect } from "react-redux";
import { SELECTED_DEPARTAMENT, InputTypes } from "../utils/Enums";
import FilterContentMinMax from "./FilterContentMinMax";
import FilterContentCheckBox from "./FilterContentCheckBox";
import FilterContentTextBox from "./FilterContentTextBox";

class FilterCategory extends Component {
  getElementType(type) {
    switch (type) {
      case InputTypes.MIN_MAX:
        return <FilterContentMinMax min={this.props.min} />;

      case InputTypes.CHECKBOX:
        return (
          <FilterContentCheckBox  
            orientation={this.props.orientation} 
            data={this.props.data}         
            onChange={this.props.onChange}
            name={this.props.name}
            min={this.props.min}
            data={this.props.data}
          />
        );

      case InputTypes.TEXTBOX:
        return <FilterContentTextBox placeholder={this.props.placeholder} />;

      default:
        return <p>Esto es una prueba</p>;
    }
  }

  render() {
    const tag = this.getElementType(this.props.type);
    Debug.Log("FilterCategory type: ",this.props.name);

    return (
      <div className="card">
        <div className="card-header text-white bg-primary">
          {this.props.tittle}
        </div>
        <div className="card-body">{tag}</div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterCategory);
