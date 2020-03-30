import { createStore } from 'redux';

const initialState = {
    searchSelections: {
        departamento: 'DEPARTAMENTO',
        ciudad: 'CIUDAD',
        operacion: 'OPERACION',
        tipoInmueble: 'TIPO INMUEBLE',
        palabra: ''    
    }
}

const reducerApp = (state = initialState, action) => {
    switch (action.type) {
        case 'DEPARTAMENTO_SELECCIONADO':
            return {
                ...state,   
                searchSelections: {                    
                    ...state.searchSelections,
                    departamento: action.dep,
                }
            }

        case 'CIUDAD_SELECCIONADA':
            return {
                ...state,
                searchSelections: {
                    ...state.searchSelections,
                    ciudad: action.ciudad,
                }
            }
        
        case 'OPERACION_SELECCIONADA':
            return {
                ...state,
                searchSelections: {
                    ...state.searchSelections,
                    operacion: action.operacion,
                }
            }

        case 'TIPO_INMUEBLE_SELECCIONADO':
            return {
                ...state,
                searchSelections: {
                    ...state.searchSelections,
                    tipoInmueble: action.tipoInmueble,
                }
            }

        case 'PALABRA_SELECCIONADA':
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

export default createStore(reducerApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());