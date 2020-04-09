import React, { Component, createRef } from "react";
import EstateList from "../index_page/EstateList";
import Debug from "../utils/Debug";
import { connect } from "react-redux";
import Service from "../../services/Service";
import { SET_ESTATE } from "../../actions/ActionsDetailPage";

class EstateForm extends Component {
  constructor(props) {
    super(props);
    this.serviceEstates = new Service("estate");

    this.description = createRef("");
    this.departament = createRef("");
    this.city = createRef("");
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
          departament: this.departament.current.value,
          city: this.city.current.value,
          neighborhood: this.neighborhood.current.value,
          description:  this.description.current.value,
          adminPrice: this.adminPrice.current.value,
          price: this.price.current.value,
          rooms: this.rooms.current.value,
          hasGarage: this.hasGarage.current.checked,
          hasParkinLot: this.hasParkinLot.current.checked,                  
          operation: this.operation.current.value,
          meters: this.meters.current.value,
          estate_type_id: this.estate_type_id.current.value,
          userId: this.userId.current.value
      }

      this.serviceEstates.create(estate).then(result => {
        Debug.Log("Estate Result: ",result);  
        if(result)
          {
            
          }
          
      });

      Debug.Log("hasGarage: ",this.hasGarage); 
      Debug.Log("Estate: ",estate);      
  }

  render() {
   
    return (
      <div className="col">
        <form className="form-row">
            <textarea className="form-control mt-2" placeholder="Description" ref={this.description} />
            <input className="form-control mt-2" type="text" placeholder="Departamento" ref={this.departament}/>
            <input className="form-control mt-2" type="text" placeholder="Ciudad" ref={this.city}/>
            <input className="form-control mt-2" type="text" placeholder="Barrio" ref={this.neighborhood} />
            <input className="form-control mt-2" type="text" placeholder="Precio" ref={this.price} />
            <input className="form-control mt-2" type="number" placeholder="Precio Admin" ref={this.adminPrice} />
            <input className="form-control mt-2" type="number" placeholder="Habitaciones" ref={this.rooms} />
            <input className="form-control mt-2" type="number" placeholder="Metros" ref={this.meters} />
            <input className="form-control mt-2" type="number" placeholder="Operacion" ref={this.operation} />
            <input className="form-control mt-2" type="number" placeholder="Tipo de Inmueble" ref={this.estate_type_id} />
          
            <div className="form-group mt-2 mx-2">
              <input type="checkbox" ref={this.hasGarage} /><label className="px-2">Tiene Garage</label>
            </div>
            <div className="form-group mt-2 mx-2">
                <input type="checkbox" ref={this.hasParkinLot} /><label className="px-2">Tiene Parqueadero</label>
            </div>

            <input className="form-control mt-2" type="number" placeholder="Id de Usuario" ref={this.userId} />
            <button className="btn btn-primary mt-2 form-control" onClick={(e) => this.saveEstate(e)}>Guardar</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  estate: state.reducerDetailPage.estate,
});

const mapDispatchToProps = (dispatch) => ({
  setEstate(estate) {
    dispatch({
      type: SET_ESTATE,
      estate,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EstateForm);
