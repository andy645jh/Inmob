import React, { Component } from "react";
import Debug from "../utils/Debug";
import { connect } from "react-redux";
import { SET_ORDER } from "../utils/Enums";

class ResultSection extends Component {
  onChange(e) 
  {
    const val = e.target.value;
    Debug.Log("Val: ", val);    
    this.props.setOrder(val);         
  }

  render() {
      const selected = this.props.searchSelections.order;
    return (
      <div className="row blue align-items-center">
        <div className="col">RESULT</div>
        <div className="col"></div>
        <div className="col">
          <div className="row dropdown justify-content-end">
            <select
              onChange={(e) => this.onChange(e)}
              className="form-control ms"
              value={selected}
            >
              <option value="price-asc">De menor a mayor precio</option>
              <option value="price-desc">De mayor a menor precio</option>
              <option value="date-asc">Mas reciente</option>
              <option value="date-desc">Menos reciente</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchSelections: state.reducerIndexPage.searchSelections,
  departamentsId: state.reducerSearchPage.departamentsId,
  components: state.reducerSearchPage.components,
});

const mapDispatchToProps = (dispatch) => ({  

  setOrder(order) {
    dispatch({
      type: SET_ORDER,
      order
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultSection);
