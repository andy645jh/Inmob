import { SELECTED_DEPARTAMENT, SELECTED_CITY, SELECTED_OPERATION, SELECTED_WORD, SET_ESTATE_TYPE } from "../components/utils/Enums"

const initialState = {
    searchSelections: {
        departamento: 0,
        ciudad: 0,
        operacion: 0,
        tipoInmueble: 0,
        palabra: ''    
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

        default:
            return state;
                
    }   
}

export default reducerIndexPage;