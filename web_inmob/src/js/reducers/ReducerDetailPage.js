import { SET_ESTATE } from "../components/utils/Enums";

const initialState = {
    estate: {}
}

const reducerDetailPage = (state = initialState, action) =>
{
    switch (action.type) 
    {
        case SET_ESTATE:
            return {
                ...state,
                estate: action.estate
            }
        default:
            return state;
    }   
}

export default reducerDetailPage;