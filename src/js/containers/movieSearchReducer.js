const defaultState = {
    value: 'Hi',
    movie: [{
        title: 'Title',
    }]
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
                movie: [...movie, {
                   title: payload.data.Search[0].Title,
                   image: payload.data.Search[0].Poster,
                   year: payload.data.Search[0].Year,
                //    plot: payload.data.Search.
                   id: payload.data.Search[0].imdbID

                }]
            };
        }
        default: {
            return state;
        }
    }
}