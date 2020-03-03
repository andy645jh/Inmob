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
                    departamento: state.searchSelections.departamento,
                    ciudad: state.searchSelections.ciudad
                }
            }
        
        default:
            return state;
                
    }    
}

export default createStore(reducerApp);