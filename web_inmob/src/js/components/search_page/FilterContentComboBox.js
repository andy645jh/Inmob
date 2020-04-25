import React, { Component } from "react";

class FilterContentComboBox extends Component 
{ 
  createOpts()
  {
    var arrTen = [];    
    for (var k = 0; k < this.props.data.length; k++) {
      var opt = this.props.data[k];
      arrTen.push( <option key={k} value={opt.value}>{opt.label}</option> );
    }
    return arrTen;
  }

  render() 
  {
    const opts = this.createOpts();
    return (
      <>       
        { opts != null && (
          <select
            id={this.props.name}
            className={"form-control " + this.props.attrs}
            onChange={this.props.onChange}            
          >
            {opts}
          </select>
        )}
      </>
    );
  }
}

export default FilterContentComboBox;
