import {createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {createBrowserHistory} from 'history';
//
// // import the root reducer
import rootReducer from './rootReducer';

// create an object for the default data
const defaultState = {};


const store = createStore(
    rootReducer,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;
