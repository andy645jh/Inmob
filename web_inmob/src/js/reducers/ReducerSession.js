import { SET_LOG_STATUS, SET_USER, SET_DEFAULT } from "../components/utils/Enums";

const initialState = {
    isLoggedIn: false,
    user: {}
}

const reducerSession = (state = initialState, action) =>
{
    switch (action.type) 
    {
        case SET_LOG_STATUS:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn              
            }

        case SET_USER:
            return {
                ...state,                 
                user: action.user
            }

        case SET_DEFAULT:
            return initialState
            
        default:
            return state;
    }   
}

export default reducerSession;