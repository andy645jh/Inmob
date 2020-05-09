import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { SELECTED_DEPARTAMENT } from "../utils/Enums";
import Debug from "../utils/Debug";

class FilterContentMinMax extends Component 
{ 

  constructor(props)
  {
    super(props);

    this.state = {
      [this.props.name]:{
        min: this.props.min,
        max: this.props.max
      }
    }

    this.min = createRef();
    this.max = createRef();
  }

  onChangeMin(e)
  {           
    if(undefined == e.target.value || (parseInt(e.target.value) < parseInt(this.props.min))) this.min.current.value = this.props.min;

    if(undefined==this.max.current.value || parseInt(e.target.value) > parseInt(this.max.current.value)) this.max.current.value = e.target.value;
    Debug.Log("Value Despues: ",this.max.current.value);

    this.setState({[this.props.name]:{
      min: e.target.value,
      max: this.max.current.value
    }});  
    
    this.props.onChange({[this.props.name]:{
      min: e.target.value,
      max: this.max.current.value
    }});
  }

  onChangeMax(e)
  {    
    if(undefined == e.target.value || (parseInt(e.target.value) < parseInt(this.props.min))) this.max.current.value = this.props.min;
    if(parseInt(e.target.value) < parseInt(this.min.current.value)) this.min.current.value = e.target.value;
    
    this.setState({[this.props.name]:{
      min: this.min.current.value,
      max: e.target.value
    }});
    
    this.props.onChange({[this.props.name]:{
      min: this.min.current.value,
      max: e.target.value
    }});
  }

  render() {
    
    return (     
        <>
          <input
            className="form-control my-1"
            type="number"
            placeholder="Min"
            min={this.props.min}
            onChange={(e)=> this.onChangeMin(e)}
            ref={this.min}
          />
          <input
            className="form-control my-1"
            type="number"
            placeholder="Max"            
            onChange={(e)=> this.onChangeMax(e)}
            ref={this.max}
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
