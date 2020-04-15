import { SET_DEPARTAMENT_ESTATE_FORM, SET_CITY_ESTATE_FORM } from "../components/utils/Enums";

const initialState = {
    departament: 0,
    city: 0
}

const reducerEstatePage = (state = initialState, action) =>
{
    switch (action.type) 
    {
        case SET_DEPARTAMENT_ESTATE_FORM:
            return {
                ...state,
                departament: action.departament
            }

        case SET_CITY_ESTATE_FORM:
            return {
                ...state,
                city: action.city
            }
        default:
            return state;
    }   
}

export default reducerEstatePage;