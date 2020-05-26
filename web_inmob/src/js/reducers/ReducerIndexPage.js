import { SELECTED_DEPARTAMENT, SELECTED_CITY, SELECTED_OPERATION, SELECTED_WORD, SET_ESTATE_TYPE, SET_ORDER, SET_PRICE, SET_ROOMS } from "../components/utils/Enums"

const initialState = {
    searchSelections: {
        departamento: 0,
        ciudad: 0,
        operacion: 0,
        tipoInmueble: 0,
        palabra: '',
        order: 'price-asc',   
        rooms: 0     
    }
}

const reducerIndexPage = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_DEPARTAMENT:
            return {
                ...state,   
                searchSelections: {                    
                    ...state.searchSelections,
                    departamento: action.dep,
                }
            }

        case SELECTED_CITY:
            return {
                ...state,
                searchSelections: {
                    ...state.searchSelections,
                    ciudad: action.ciudad,
                }
            }
        
        case SELECTED_OPERATION:
            return {
                ...state,
                searchSelections: {
                    ...state.searchSelections,
                    operacion: action.operacion,
                }
            }

        case SET_ESTATE_TYPE:
            return {
                ...state,
                searchSelections: {
                    ...state.searchSelections,
                    tipoInmueble: action.tipoInmueble,
                }
            }

        case SELECTED_WORD:
            return {
                ...state,
                searchSelections: {
                    ...state.searchSelections,
                    palabra: action.palabra,                    
                }
            }        

        case SET_ORDER:
            return {
                ...state,
                searchSelections: {
                    ...state.searchSelections,
                    order: action.order,                    
                }
            } 

        case SET_PRICE:
            return {
                ...state,
                searchSelections: {
                    ...state.searchSelections,
                    price: action.price,                    
                }
            } 

        case SET_ROOMS:
            return {
                ...state,
                searchSelections: {
                    ...state.searchSelections,
                    rooms: action.rooms,                    
                }
            } 

        default:
            return state;
                
    }   
}

export default reducerIndexPage;