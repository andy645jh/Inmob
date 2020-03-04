import { createStore } from 'redux';

const initialState = {
    searchSelections: {
        departamento: 'DEPARTAMENTO',
        ciudad: 'CIUDAD'
    }
}

const reducerApp = (state = initialState, action) => {
    switch (action.type) {
        case 'DEPARTAMENTO_SELECCIONADO':
            return {
                ...state,
                searchSelections: {
                    departamento: action.dep,
                    ciudad: state.searchSelections.ciudad
                }
            }

        case 'CIUDAD_SELECCIONADA':
            return {
                ...state,
                searchSelections: {
                    departamento: state.searchSelections.departamento,
                    ciudad: action.ciudad
                }
            }
        
        default:
            return state;
                
    }   
}

export default createStore(reducerApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());