import {
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY
} from './actionTypes'

export function createCategory(payload) {
    return {
        type: CREATE_CATEGORY,
        payload
    };
}

export function updateCategory(payload) {
    return {
        type: UPDATE_CATEGORY,
        payload
    };
}

export function deleteCategory(index) {
    return {
        type: DELETE_CATEGORY,
        payload: {index}
    };
}