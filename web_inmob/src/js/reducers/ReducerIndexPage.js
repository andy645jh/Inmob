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

        case 'SET_DEPARTAMENTOS':
            return {
                ...state,                
                departaments: action.departaments
            }

        default:
            return state;
                
    }   
}

export default reducerIndexPage;