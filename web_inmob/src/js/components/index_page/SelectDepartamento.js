import React, { Component } from "react";
import Debug from "../utils/Debug";

class SelectDepartamento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.opts =
      this.props.list != null ? this.createOpts(this.props.list) : null;
    this.setState({ isLoading: false });
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const attrs = this.props.attrs ? this.props.attrs : "";
    const selected = this.props.departament;
    const { isLoading } = this.state;
    Debug.Log("SelectDepartamento: " + selected);

    return (
      <>
        {isLoading && "Loading ..."}
        {!isLoading && this.opts != null && (
          <select
            id="inputState"
            className={"form-control " + attrs}
            onChange={(e) => this.onChange(e)}
            value={selected}
          >
            {this.opts}
          </select>
        )}
      </>
    );
  }

  createOpts() {
    var arrTen = [];
    arrTen.push(
      <option key={0} value={0}>
        DEPARTAMENTO
      </option>
    );
    for (var k = 0; k < this.props.list.length; k++) {
      var opt = this.props.list[k];
      arrTen.push(
        <option key={opt.id + 1} value={opt.id + 1}>
          {opt.departamento}
        </option>
      );
    }
    return arrTen;
  }
}

export default SelectDepartamento;
