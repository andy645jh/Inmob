import React, { Component } from "react";
import Debug from "../utils/Debug";
import { Orientation } from "../utils/Enums";

class FilterOption extends Component 
{
  render() 
  {    
    const isInline = this.props.type == Orientation.VERTICAL ? "" : "form-check-inline";     
    const item = this.props.item;
    return (
      <div className={"form-check "+isInline}>
        
        <input          
          onChange={this.props.onChange}
          className="form-check-input"
          type="checkbox"
          name={this.props.name}
          value={item.value}
          id={this.props.name+"-item-"+item.id}
        />
        <label 
          className="form-check-label" 
          htmlFor={this.props.name+"-item-"+item.id}>
            {item.label}
        </label>
      </div>
    );
  }
}

export default FilterOption;
