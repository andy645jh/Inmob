import React, { Component } from "react";
import Debug from "../utils/Debug";
import { connect } from "react-redux";
import { SELECTED_DEPARTAMENT } from "../utils/Enums";

class FilterOption extends Component {
  onChange(e) {
    const val = e.target.checked;
    if (val) {
        this.props.departamentoSeleccionado(this.props.id);
    }
    Debug.Log("Checked: ", val);
  }

  render() {
    Debug.Log("FilterOption Prop: ", this.props);
    return (
      <div className="form-check">
        <input
          onChange={(e) => this.onChange(e)}
          className="form-check-input"
          type="checkbox"
          value=""
          id={"dep" + this.props.id}
        />
        <label className="form-check-label" htmlFor="defaultCheck1">
          {this.props.depName}
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    searchSelections: state.reducerIndexPage.searchSelections
});

const mapDispatchToProps = (dispatch) => ({
    departamentoSeleccionado(dep) {
        dispatch({
          type: SELECTED_DEPARTAMENT,
          dep,
        });
      },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterOption);
