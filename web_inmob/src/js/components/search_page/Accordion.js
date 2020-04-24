import React, { Component } from "react";
import FilterOption from "./FilterOption";
import { connect } from "react-redux";
import Debug from "../utils/Debug";
import { SELECTED_DEPARTAMENT, InputTypes, Orientation } from "../utils/Enums";
import FilterCategory from "./FilterCategory";
import { Filter } from "../utils/clases/Filter";
import Badge from "./Badge";

class Accordion extends Component {
  constructor() {
    super();
    this.createRoomsData();
    this.roomsSelected = [];
  }

  createRoomsData() {
    this.roomsData = [];
    var suffix = "";
    for (var i = 1; i < 6; i++) {
      if (i == 5) suffix = "+";
      this.roomsData.push(new Filter(i, i + suffix, i + suffix));
    }
  }

  onClick() {
    this.props.departamentoSeleccionado(0);
  }

  onChangeCheckBox(e) {
    Debug.Log("Event: ", e.target.checked);
    Debug.Log("Name: ", e.target.name);
    Debug.Log("Valur: ", e.target.value);
    if (e.target.name === "rooms") {
      if (e.target.checked) {
        this.roomsSelected.push(e.target.value);
      } else {
        this.roomsSelected = this.roomsSelected.filter(
          (el) => el !== e.target.value
        );
      }
    } else {
      if (e.target.checked) {
        this.props.departamentoSeleccionado(e.target.value);
      }
    }
    Debug.Log("Rooms Selected: ", this.roomsSelected);
  }

  convertDepartamentsToData() {
    var data = [];
    this.props.departaments.forEach((element) => {
      data.push(new Filter(element.depId, element.depId, element.depName));
    });
    return data;
  }

  render() {
    const departaments = this.convertDepartamentsToData();
    const depSelected = this.props.searchSelections.departamento;
    Debug.Log("Dep Selected: ", departaments);

    return (
      <section className="detail-p-tb">
        <div id="accordion">

          <div className="card">
            <div className="card-header text-white bg-primary">Filters</div>
            <div className="card-body">
              {depSelected != 0 && departaments.length == 1 && (
                <Badge tittle={departaments[0].label + " "} onClick={() => this.onClick()} />                
              )}
            </div>
          </div>

          {departaments.length > 1 && (
            <FilterCategory
              type={InputTypes.CHECKBOX}
              orientation={Orientation.VERTICAL}
              onChange={(e) => this.onChangeCheckBox(e)}
              name="departaments"
              tittle="Departaments"
              data={departaments}
            />
          )}

          <FilterCategory
            data={this.roomsData}
            orientation={Orientation.HORIZONTAL}
            onChange={(e) => this.onChangeCheckBox(e)}
            type={InputTypes.CHECKBOX}
            name="rooms"
            tittle="Rooms"
          />

          <FilterCategory type={InputTypes.MIN_MAX} tittle="Meters" min="5" />

          <FilterCategory
            type={InputTypes.MIN_MAX}
            tittle="Price"
            min="10000"
          />

          <FilterCategory
            type={InputTypes.TEXTBOX}
            tittle="Search"
            placeholder="Ej: Cocina"
          />

          <div className="card">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={this.props.onClick}
            >
              Apply
            </button>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  departaments: state.reducerSearchPage.departamentsId,
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

export default connect(mapStateToProps, mapDispatchToProps)(Accordion);
/*

<div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">FILTROS SELECCIONADOS</h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                { depSelected != 0 && <div className="badge badge-info mx-1">Santander  <span className="badge badge-light"><a href='#' onClick={(e) => this.onClick()} ><span>X</span></a></span></div> }                                
                            </div>
                        </div>
                    </div>
                    { ( departaments.length>1 && 
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                DEPARTAMENTO
                            </button>
                        </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                {
                                    (departaments != null && 
                                    departaments.map((dep) => <FilterOption key={dep.id} id={dep.depId} depName={dep.depName} />))
                                }                              
                            </div>
                        </div>
                    </div>
                    )}  

                    <FilterCategory type="CheckBox" name="departaments" tittle="Departaments" data={departaments} />  
                    <FilterCategory type="MinMax" tittle="Meters" min="5" />  
                    <FilterCategory type="MinMax" tittle="Price" min="10000"/> 
                    <FilterCategory onChange={(e)=> this.onChange(e)} type="CheckBox" name="rooms" tittle="Rooms" /> 
                    <FilterCategory type="TextBox" tittle="Search" placeholder="Ej: Cocina" /> 
                */
