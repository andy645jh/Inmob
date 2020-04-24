import React, { Component } from "react";
import Debug from "../utils/Debug";
import FilterOption from "./FilterOption";

class FilterContentCheckBox extends Component 
{ 

  render() {
    const data = this.props.data;
    Debug.Log("FilterContentCheckbox name: "+this.props.name);
    return (     
        <div>
          {
            (data != null && 
              data.map((opt) => 
                <FilterOption type={this.props.orientation} 
                  onChange={this.props.onChange} 
                  name={this.props.name} 
                  key={opt.id}
                  item={opt}                   
                />)
            )
          }   
        </div>
    );
  }
}



export default FilterContentCheckBox;
/*
<div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label className="form-check-label" forhtml="inlineRadio1">1</label>
          </div>
          <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label className="form-check-label" forhtml="inlineRadio2">2</label>
          </div>
          <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label className="form-check-label" forhtml="inlineRadio3">3</label>
          </div>   
          <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label className="form-check-label" forhtml="inlineRadio3">4</label>
          </div> 
          <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label className="form-check-label" forhtml="inlineRadio3">5+</label>
          </div> 
          */