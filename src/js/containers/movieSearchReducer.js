const defaultState = {
    search: 'Hi'
};

export default function movieSearchReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch(type) {
        case 'UPDATE_SEARCH': {
            return {
                ...state,
                search: payload.search
            };
        }
        default: {
            return state;
        }
    }
}