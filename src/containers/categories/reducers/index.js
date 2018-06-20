import {
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY
} from '../actions/actionTypes';

const STATE_NAME = 'categoriesStore';

let initialState = [];

// restore state from localStorage
const savedState = JSON.parse(localStorage.getItem(STATE_NAME));
if (savedState !== null) {
    initialState = savedState;
}

const categories = (state = initialState, action) => {
    console.log(action);
    let newState = state.slice(0);

    switch (action.type) {
        case CREATE_CATEGORY:
            newState.push({
                ...action.payload,
            });
            break;

        case UPDATE_CATEGORY:
            return Object.assign({}, state, {
                isLoading: false,
                errors: action.payload
            });

        case DELETE_CATEGORY:
            delete newState.splice(action.payload.index, 1);
            break;

        default:
            return state;
    }
    localStorage.setItem(STATE_NAME, JSON.stringify(newState));
    return newState;
};

export default categories;
