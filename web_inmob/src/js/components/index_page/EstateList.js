import React, { Component } from "react";
import CardInfo from "./CardInfo";
import Service from "../../services/Service";
import { connect } from "react-redux";
import { SET_DEPARTAMENTS_ID, SET_CITIES_ID } from "../utils/Enums";
import depJson from "./../../../json/data.json";
import Debug from "../utils/Debug";
import store from '../../store';

class EstateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estates: null,
      isLoading: null,
    };

    Debug.Log("Json: ", depJson[0]);
    this.services = new Service("estate");
  }

  componentDidMount() {    
    this.getEstates();       
  }

  componentDidUpdate(currentProps) 
  {    
    const dep = this.props.searchSelections.departamento;
    const currentDep = currentProps.searchSelections.departamento;

    const order = this.props.searchSelections.order;
    const currentOrder = currentProps.searchSelections.order;

    const tipoInmueble = this.props.searchSelections.tipoInmueble;
    const currentTipoInmueble = currentProps.searchSelections.tipoInmueble;

    const roomNumber = this.props.searchSelections.rooms;
    const currentRoomNumber = currentProps.searchSelections.rooms;

    const word = this.props.searchSelections.palabra;
    const currentWord = currentProps.searchSelections.palabra;
    
    if(dep !== currentDep || 
        currentOrder !== order || 
        currentTipoInmueble !== tipoInmueble || 
        currentRoomNumber !== roomNumber ||
        currentWord !== word)
    {        
      this.getEstates();
    }       
  }  

  checkPriceOrder()
  {

  }

  async getEstates() {
    try {
      this.setState({ isLoading: true });

      const filterOpts = {
        word: this.props.searchSelections.palabra,
        city: this.props.searchSelections.ciudad,
        departament: this.props.searchSelections.departamento,
        operation: this.props.searchSelections.operacion,
        estateType: this.props.searchSelections.tipoInmueble,
        order: this.props.searchSelections.order,
        rooms: this.props.searchSelections.rooms,
      };

      const estatesJson = await (this.props.isFiltered
        ? this.services.search(filterOpts)
        : this.services.getAll());

      console.log("Estates 0: ", estatesJson);
      this.setState({ estates: estatesJson, isLoading: false });
      this.getDepartaments();
      this.getCities();
    } catch (err) {
      this.setState({ isLoading: false });
      console.error(err);
    }
  }

  getDepartaments() {
    var list = [];
    var index = 0;
    this.props.setClear();
   
    this.state.estates.forEach((element) => {

      if(list.find(x => x.depId==element.departament)!=null) return;

      list.push({
        id: index,
        depId: element.departament,
        depName: depJson[element.departament - 1].departamento,
      });
      index++;
    });

    console.log("Departaments List: ", list);
    this.props.setDepartamentListId(list);
    console.log("Departaments: ", this.props.departamentsId);
  }

  getCities() {
    var list = [];
    //this.props.setClear();
    this.state.estates.forEach((element) => {
      list.push({
        cityId: element.city,
        cityName: depJson[element.departament - 1].ciudades[element.city - 1],
      });
    });
    this.props.setCitiesListId(list);
    console.log("City: ", list);
  }

  render() {
    const { isLoading, estates } = this.state;    
    console.log("EstateList : ", this.props);
    //console.log("Estates 2: ", estates);
    return (
      <>
        {isLoading && "Loading ... "}

        <section className="lista row">
          
          {!isLoading && estates != null && estates.length==0 && 
            <p className="mt-2">No se encontraron resultados</p>
          }
          
          {!isLoading &&
            estates != null && estates.map((estate) => (
              <CardInfo key={estate.id} id={estate.id} estateInfo={estate} />
            ))
          }
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  searchSelections: state.reducerIndexPage.searchSelections,
  departamentsId: state.reducerSearchPage.departamentsId,
  components: state.reducerSearchPage.components,
});

const mapDispatchToProps = (dispatch) => ({
  setDepartamentListId(departamentsId) {
    dispatch({
      type: SET_DEPARTAMENTS_ID,
      departamentsId,
    });
  },
  setCitiesListId(citiesId) {
    dispatch({
      type: SET_CITIES_ID,
      citiesId,
    });
  },
  setClear() {
    dispatch({
      type: "CLEAR",
    });
  },  
});

export default connect(mapStateToProps, mapDispatchToProps)(EstateList);
