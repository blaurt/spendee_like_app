import {
  CREATE_RECORD,
  UPDATE_RECORD,
  DELETE_RECORD
} from '../actions/actionTypes';

let initialState = [];

function records(state = initialState, action) {

  switch (action.type) {
    case CREATE_RECORD:
      return Object.assign({}, state, {
        isLoading: true
      });

    case UPDATE_RECORD:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.payload
      });

    case DELETE_RECORD:
      return Object.assign({}, state, {
        isLoading: false,
        repos: action.payload
      });

    default:
      return state;
  }
}

export default records;
