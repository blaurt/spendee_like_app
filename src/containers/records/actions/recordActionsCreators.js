import {
    CREATE_RECORD,
    UPDATE_RECORD,
    DELETE_RECORD
} from './actionTypes'

export function createRecord(payload) {
    return {
        type: CREATE_RECORD,
        payload
    };
}

export function updateRecord(payload) {
    return {
        type: UPDATE_RECORD,
        payload
    };
}

export function deleteRecord(payload) {
    return {
        type: DELETE_RECORD,
        payload
    };
}