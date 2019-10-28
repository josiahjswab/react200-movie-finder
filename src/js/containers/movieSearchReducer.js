const defaultState = {
    value: 'Hi',
    title: ''
};

export default function movieSearchReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch(type) {
        case 'UPDATE_SEARCH_VALUE': {
            return {
                ...state,
                value: payload.value
            };
        }
        case 'GET_SEARCH_REQUEST_FULLFILLED': {
            return {
                ...state,
                title: payload.data.Search.Title
            };
        }
        default: {
            return state;
        }
    }
}