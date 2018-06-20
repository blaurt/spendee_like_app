// import React from 'react';
import {combineReducers} from "redux";
import records from '../containers/records/reducers/';
import categories from '../containers/categories/reducers';
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    records,
    categories,
    routing: routerReducer
});

export default rootReducer;