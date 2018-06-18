import { combineReducers } from 'redux';

import records from './records'

const recordsReducers = combineReducers({
    records
});

export default recordsReducers;