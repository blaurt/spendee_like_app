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
            return Object.assign({}, state, {
                isLoading: false,
                errors: action.payload
            });

        case DELETE_RECORD:
            delete newState.splice(action.payload.index, 1);
            break;
        default:
            return state;
    }
    localStorage.setItem(STATE_NAME, JSON.stringify(newState));
    return newState;
};

export default records;
