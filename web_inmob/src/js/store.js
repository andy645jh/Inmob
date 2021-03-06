import { createStore, combineReducers  } from 'redux';
import reducerIndexPage from './reducers/ReducerIndexPage';
import reducerDetailPage from './reducers/ReducerDetailPage';
import reducerSession from './reducers/ReducerSession';
import reducerEstatePage from './reducers/ReducerEstatePage';
import reducerSearchPage from './reducers/ReducerSearchPage';

function saveToLocalStorage(state)
{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state",serializedState);
    }catch(e)
    {
        console.error(e);
    }
}

function loadFromLocalStorage()
{
    try{
        const serializedState = localStorage.getItem("state");        
        if(serializedState===null) return undefined;        
        return JSON.parse(serializedState);
    }catch(e)
    {
        console.error(e);
        return undefined;
    }
}

const rootReducer = combineReducers({
    reducerDetailPage,
    reducerIndexPage,
    reducerSession,   
    reducerEstatePage,
    reducerSearchPage
})

const persistedState = loadFromLocalStorage();
const store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(()=> saveToLocalStorage(store.getState()));

export default store;