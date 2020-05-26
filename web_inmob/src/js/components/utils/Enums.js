import { Filter } from "./clases/Filter";

export const SET_LOG_STATUS = 'SET_LOG_STATUS';
export const SET_USER = 'SET_USER';
export const SET_ESTATE = 'SET_ESTATE';
export const SET_DEFAULT = 'SET_DEFAULT';
export const SELECTED_CITY = 'SELECTED_CITY';
export const SELECTED_OPERATION = 'SELECTED_OPERATION';
export const SELECTED_DEPARTAMENT = 'SELECTED_DEPARTAMENT';
export const SELECTED_WORD = 'SELECTED_WORD';
export const SET_DEPARTAMENT_ESTATE_FORM = 'SET_DEPARTAMENT_ESTATE_FORM';
export const SET_CITY_ESTATE_FORM = 'SET_CITY_ESTATE_FORM';
export const SET_ESTATE_TYPE = 'SET_ESTATE_TYPE';
export const SET_CITIES_ID = 'SET_CITIES_ID';
export const SET_DEPARTAMENTS_ID = 'SET_DEPARTAMENTS_ID';
export const SET_ORDER = 'SET_ORDER';
export const SET_PRICE = 'SET_PRICE';
export const SET_ROOMS = 'SET_ROOMS';

export const InputTypes = {
    CHECKBOX: 'CHECKBOX',
    TEXTBOX: 'TEXTBOX',
    MIN_MAX: 'MIN_MAX',
    COMBOBOX: 'COMBOBOX'    
}

export const Orientation = {
    VERTICAL: 0,
    HORIZONTAL: 1    
}

export const FilterOpt = {
    WORD: 0,
    ESTATE_TYPE: 1,
    DEPARTAMENT: 2,
    PRICE: 3,
    ROOMS: 4,
}

export const EstateType = {
    INMUEBLE:'INMUEBLE',
    Apartamento:'Apartamento',
    Apartaestudio:'Apartaestudio',
    Casa:'Casa',
    Habitacion:'Habitacion',
    Local:'Local',
    Lote:'Lote'
}

export const EstateTypeCombo = [
    new Filter(0,0,EstateType.INMUEBLE),
    new Filter(1,1,EstateType.Apartamento),
    new Filter(2,2,EstateType.Apartaestudio),
    new Filter(3,3,EstateType.Casa),
    new Filter(4,4,EstateType.Habitacion),
    new Filter(5,5,EstateType.Local),
    new Filter(6,6,EstateType.Lote),  
];

export const RoomsCombo = createRoomsCombo();

function createRoomsCombo(){
    var roomsData = [];
    var suffix = "";
    for (var i = 1; i < 6; i++) {        
        roomsData.push(new Filter(i, i + suffix, i + suffix));
    }
    return roomsData; 
};

