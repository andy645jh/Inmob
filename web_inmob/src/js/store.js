import { createStore, combineReducers  } from 'redux';
import reducerIndexPage from './reducers/ReducerIndexPage';
import reducerDetailPage from './reducers/ReducerDetailPage';

const rootReducer = combineReducers({
    reducerDetailPage,
    reducerIndexPage    
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());