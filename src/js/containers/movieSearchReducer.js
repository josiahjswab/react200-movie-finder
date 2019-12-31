const defaultState = {
    value: '',
    movie: []
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
        case 'GET_SEARCH_REQUEST_FULFILLED': {
            return {
                ...state,
                movie: payload.data.Search
            };
        }
        default: {
            return state;
        }
    }
}