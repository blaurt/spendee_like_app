import React from 'react';
import {combineReducers} from "redux";
import recordReducer from '../containers/records/reducers';
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    recordReducer,
    routing: routerReducer
});

export default rootReducer;