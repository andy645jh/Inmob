import React, { Component, createRef } from "react";
import EstateList from "../index_page/EstateList";
import Debug from "../utils/Debug";
import { connect } from "react-redux";
import Service from "../../services/Service";
import { SET_CITY_ESTATE_FORM, SET_DEPARTAMENT_ESTATE_FORM } from "../../components/utils/Enums";
import SelectDepartamento from "../index_page/SelectDepartamento";
import departments from "../../../json/data";
import SelectCiudad from "../index_page/SelectCiudad";

class EstateForm extends Component {
  constructor(props) {
    super(props);
    this.serviceEstates = new Service("estate");

    this.description = createRef("");
    this.departament = 0;
    this.city = 0;
    this.neighborhood = createRef("");
    this.adminPrice = createRef(0);
    this.price = createRef(0);
    this.rooms = createRef(0);
    this.hasGarage = createRef(false);
    this.hasParkinLot = createRef(false);
    this.operation = createRef(0);
    this.meters = createRef(0);
    this.estate_type_id = createRef(0);
    this.userId = createRef();
    //Debug.Log("Match: ", this.id);
  }

  saveEstate(e) {
    e.preventDefault();

    var estate = {
      departament: this.props.departament,
      city: this.props.city,
      neighborhood: this.neighborhood.current.value,
      description: this.description.current.value,
      adminPrice: this.adminPrice.current.value,
      price: this.price.current.value,
      rooms: this.rooms.current.value,
      hasGarage: this.hasGarage.current.checked,
      hasParkinLot: this.hasParkinLot.current.checked,
      operation: this.operation.current.value,
      meters: this.meters.current.value,
      estate_type_id: this.estate_type_id.current.value,
      userId: this.userId.current.value,
    };

    if(!this.isValidForm(estate))
    {
      return;
    }

    this.serviceEstates.create(estate).then((result) => {
      Debug.Log("Estate Result: ", result);
      if (result) {
      }
    });

    Debug.Log("hasGarage: ", this.hasGarage);
    Debug.Log("Estate: ", estate);
  }

  isValidForm(estate)
  {
    var isValid = true;

    if(estate.departament==0)
    {
      Debug.Log("EstateForm.isValidForm departament not valid");
      isValid = false;
    }

    if(estate.city==0)
    {
      Debug.Log("EstateForm.isValidForm city not valid");
      isValid = false;
    }

    return isValid;
  }

  onChangeDep(val) {    
    this.props.setDepartament(val);
  }

  onChangeCity(val) {    
    this.props.setCity(val);
  }

  render() {

    const city = this.props.city;
    const departament = this.props.departament;

    return (
      <div className="col">
        <form className="form-row">
          <textarea
            className="form-control mt-2"
            placeholder="Description"
            ref={this.description}
          />
          <SelectDepartamento
            useStore={false}
            onChange={(val) => this.onChangeDep(val)}
            list={departments}    
            attrs="mt-2"        
          />
          <SelectCiudad
            useStore={false}
            onChange={(val) => this.onChangeCity(val)}
            list={departments}
            departament={departament}
            attrs="mt-2"
          />         
          <input
            className="form-control mt-2"
            type="text"
            placeholder="Barrio"
            ref={this.neighborhood}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="Precio"
            ref={this.price}
          />
          <input
            className="form-control mt-2"
            type="number"
            placeholder="Precio Admin"
            ref={this.adminPrice}
          />
          <input
            className="form-control mt-2"
            type="number"
            placeholder="Habitaciones"
            ref={this.rooms}
          />
          <input
            className="form-control mt-2"
            type="number"
            placeholder="Metros"
            ref={this.meters}
          />
          <input
            className="form-control mt-2"
            type="number"
            placeholder="Operacion"
            ref={this.operation}
          />
          <input
            className="form-control mt-2"
            type="number"
            placeholder="Tipo de Inmueble"
            ref={this.estate_type_id}
          />

          <div className="form-group mt-2 mx-2">
            <input type="checkbox" ref={this.hasGarage} />
            <label className="px-2">Tiene Garage</label>
          </div>
          <div className="form-group mt-2 mx-2">
            <input type="checkbox" ref={this.hasParkinLot} />
            <label className="px-2">Tiene Parqueadero</label>
          </div>

          <input
            className="form-control mt-2"
            type="number"
            placeholder="Id de Usuario"
            ref={this.userId}
          />
          <button
            className="btn btn-primary mt-2 form-control"
            onClick={(e) => this.saveEstate(e)}
          >
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.reducerEstatePage.city,
  departament: state.reducerEstatePage.departament,
});

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch({
      type: SET_CITY_ESTATE_FORM,
      city,
    });
  },

  setDepartament(departament) {
    dispatch({
      type: SET_DEPARTAMENT_ESTATE_FORM,
      departament,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EstateForm);
