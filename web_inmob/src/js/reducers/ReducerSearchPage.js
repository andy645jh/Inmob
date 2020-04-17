import { SET_DEPARTAMENTS_ID, SET_CITIES_ID } from "../components/utils/Enums";

const initialState = {  
  departamentSelected: 0,
  citySelected: 0,
  departamentsId: [],
  citiesId: [],
};

const reducerSearchPage = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEPARTAMENTS_ID:
      return {
        ...state,
        departamentsId: state.departamentsId.concat(action.departamentsId),
      };

    case SET_CITIES_ID:
      return {
        ...state,
        citiesId: action.citiesId,
      };

    case "CLEAR":
      return {
        ...state,
        citiesId: [],
        departamentsId: [],
      };    

    default:
      return state;
  }
};

export default reducerSearchPage;
