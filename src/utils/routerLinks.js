/**
 * Stores fixed url for each page
 * Used to avoid hardcoded links across whole codebase
 *
 * @type {{home: string, newCategory: string, record: string, recordList: string, category: string, categories: string, details: string, about: string}}
 */
export const Links = {
    home: '/',

    records: '/records',
    newRecord: '/records/create',
    editRecord: '/records/edit/:id',

    categories: '/categories',
    newCategory: '/categories/create',
    editCategory: '/categories/edit/:id',

    about: '/about'
};

export const buildUrl = (route, params) => {
    for (let param in params) {
        if (params.hasOwnProperty(param) && route.includes(`:${param}`)) {
            route = route.replace(`:${param}`, params[param]);
        }
    }
    return route;
};