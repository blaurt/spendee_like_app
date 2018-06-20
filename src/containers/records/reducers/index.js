import {
    CREATE_RECORD,
    UPDATE_RECORD,
    DELETE_RECORD
} from '../actions/actionTypes';

const STATE_NAME = 'recordsStore';

let initialState = [];

// restore state from localStorage
const savedState = JSON.parse(localStorage.getItem(STATE_NAME));
if (savedState !== null) {
    initialState = savedState;
}

const records = (state = initialState, action) => {
    let newState = state.slice(0);
    switch (action.type) {
        case CREATE_RECORD:
            newState.push({
                ...action.payload,
            });
            break;

        case UPDATE_RECORD:
            const updatedRecord = {
                category: action.payload.category,
                date: action.payload.date,
                description: action.payload.description,
                sum: action.payload.date,
                timestamp: action.payload.timestamp,
                title: action.payload.title,
                type: action.payload.description
            };
            newState.splice(action.payload.index, 1, updatedRecord);
            break;

        case DELETE_RECORD:
            newState.splice(action.payload.index, 1);
            break;
        default:
            return state;
    }
    localStorage.setItem(STATE_NAME, JSON.stringify(newState));
    return newState;
};

export default records;
