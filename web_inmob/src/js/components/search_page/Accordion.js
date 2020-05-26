import React, { Component } from "react";
import { connect } from "react-redux";
import Debug from "../utils/Debug";
import {
	SELECTED_DEPARTAMENT,
	InputTypes,
	Orientation,
	EstateTypeCombo,
	RoomsCombo,
	SET_ESTATE_TYPE,
	FilterOpt,
	SELECTED_WORD,
	SET_PRICE,
	SET_ROOMS,
} from "../utils/Enums";
import FilterCategory from "./FilterCategory";
import { Filter } from "../utils/clases/Filter";
import Badge from "./Badge";
import { GetEstateTypeById } from "../utils/Converter";

class Accordion extends Component {
	constructor(props) {
		super(props);
		this.roomsSelected = [];
        this.price = { min: 5, max: 0 };
        this.word = props.searchSelections.palabra;
	}   

	onClickBadge(type) {
		switch (type) {
			case FilterOpt.ESTATE_TYPE:
				this.props.estateTypeSeleccionada(0);
				break;

			case FilterOpt.DEPARTAMENT:
				this.props.departamentoSeleccionado(0);
				break;

			case FilterOpt.WORD:
				this.props.wordSelected("");
				break;

			case FilterOpt.ROOMS:
				this.props.setRoomsAmount(0);
				break;
		}
	}

	onClickApply() {
        Debug.Log("OnClickApply");
        this.props.wordSelected(this.word);
        this.props.setPriceInterval(this.price);        
	}

	onChange(param) {
		Debug.Log("Param: ", param);
		this.price = { min: param.min, max: param.max };
	}

	onChangeCheckBox(e) {
		Debug.Log("Event: ", e.target.checked);
		Debug.Log("Name: ", e.target.name);
        Debug.Log("Valur: ", e.target.value);
        switch(e.target.name)
        {
            case "rooms":
                this.props.setRoomsAmount(e.target.value);
                break;

            case "departaments":
                if (e.target.checked) {
                    this.props.departamentoSeleccionado(e.target.value);
                }
                break;            

        }
		
		Debug.Log("Rooms Selected: ", this.roomsSelected);
	}

    onChangeTextBox(e)
    {        
        switch(e.target.name)
        {
            case "search":                
                this.word = e.target.value;               
                break;
        }
        Debug.Log("Target: ", e.target.name);
        Debug.Log("Word: ", this.word);
    }

	onChangeComboBox(e) {
		if (e.target.value == 0) return;
		this.props.estateTypeSeleccionada(e.target.value);
	}

	convertDepartamentsToData() {
		var data = [];
		this.props.departaments.forEach((element) => {
			data.push(
				new Filter(element.depId, element.depId, element.depName)
			);
		});
		return data;
	}

	render() {
		const departaments = this.convertDepartamentsToData();
		const searchOpts = this.props.searchSelections;
		Debug.Log("Dep Selected: ", departaments);

		return (
			<section className="detail-p-tb">
				<div id="accordion">
					<div className="card">
						<div className="card-header text-white bg-primary">
							Filters
						</div>
						<div className="card-body">
							{searchOpts.departamento != 0 &&
								departaments.length == 1 && (
									<Badge
										tittle={departaments[0].label + " "}
										onClick={() =>
											this.onClickBadge(FilterOpt.DEPARTAMENT)
										}
									/>
								)}

							{searchOpts.tipoInmueble != 0 && (
								<Badge
									tittle={ GetEstateTypeById(searchOpts.tipoInmueble) + " " }
									onClick={ () => this.onClickBadge(FilterOpt.ESTATE_TYPE) }
								/>
							)}

							{searchOpts.palabra && (
								<Badge
									tittle={ searchOpts.palabra + " " }
									onClick={ () => this.onClickBadge(FilterOpt.WORD) }
								/>
							)}

							{searchOpts.rooms > 0 && (
								<Badge
									tittle={ searchOpts.rooms + " hab " }
									onClick={ () => this.onClickBadge(FilterOpt.ROOMS) }
								/>
							)}
						</div>
					</div>

					{departaments.length > 1 && (
						<FilterCategory
							type={InputTypes.CHECKBOX}
							orientation={Orientation.VERTICAL}
							onChange={(e) => this.onChangeCheckBox(e)}
                            onClick={() => this.onClickApply()}
                            showApplyBtn={false}
							name="departaments"
							tittle="Departaments"
							data={departaments}
						/>
					)}

					{searchOpts.tipoInmueble == 0 && (
						<FilterCategory
							type={InputTypes.COMBOBOX}
							onChange={(e) => this.onChangeComboBox(e)}
                            onClick={() => this.onClickApply()}
                            showApplyBtn={false}
							name="estatesType"
							tittle="Estates Type"
							data={EstateTypeCombo}
						/>
					)}

					{searchOpts.rooms == 0 && (
						<FilterCategory
							data={RoomsCombo}
							orientation={Orientation.HORIZONTAL}
							onChange={(e) => this.onChangeCheckBox(e)}
                            onClick={() => this.onClickApply()}
                            showApplyBtn={false}
							type={InputTypes.CHECKBOX}
							name="rooms"
							tittle="Rooms"
						/>
					)}

					
					<FilterCategory
						onClick={() => this.onClickApply()}
                        type={InputTypes.TEXTBOX}
                        onChange={(e) => this.onChangeTextBox(e)}
                        name="search"
						tittle="Search"
						placeholder="Ej: Cocina"
					/>

					<div className="card">
						<button
							type="button"
							className="btn btn-primary w-100"
							onClick={ () => this.onClickApply() }
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

	estateTypeSeleccionada(tipoInmueble) {
		dispatch({
			type: SET_ESTATE_TYPE,
			tipoInmueble,
		});
	},

	wordSelected(palabra) {
		dispatch({
			type: SELECTED_WORD,
			palabra,
		});
	},

	setPriceInterval(price) {
		dispatch({
			type: SET_PRICE,
			price,
		});
	},

	setRoomsAmount(rooms) {
		dispatch({
			type: SET_ROOMS,
			rooms,
		});
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Accordion);
/*
<FilterCategory
						onChange={(param) => this.onChange(param)}
						onClick={() => this.onClickApply()}
						type={InputTypes.MIN_MAX}
						name="meters"
						tittle="Meters"
						min="5"
					/>

					<FilterCategory
						onChange={(param) => this.onChange(param)}
						onClick={() => this.onClickApply()}
						type={InputTypes.MIN_MAX}
						name="price"
						tittle="Price"
						min="10000"
					/>


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
