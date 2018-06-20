import {
    CREATE_RECORD,
    UPDATE_RECORD,
    DELETE_RECORD
} from './actionTypes'

export const createRecord = (payload) => {
    return {
        type: CREATE_RECORD,
        payload
    };
};

export const updateRecord = (payload) => {
    return {
        type: UPDATE_RECORD,
        payload
    };
};

export const deleteRecord = (index) => {
    return {
        type: DELETE_RECORD,
        payload: {index}
    };
};