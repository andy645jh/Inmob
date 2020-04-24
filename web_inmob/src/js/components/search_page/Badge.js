import React, { Component } from "react";

class Badge extends Component {
  render() {
    
    return (
      <div className="badge badge-info mx-1">
        {this.props.tittle + " "}
        <span className="badge badge-light">            
          <a href="#" onClick={this.props.onClick}>
            <span>X</span>
          </a>
        </span>
      </div>
    );
  }
}

export default Badge;
