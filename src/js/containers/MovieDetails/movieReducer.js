const defaultState = {
    details: []
};

export default function movieReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch(type) {
        case  'GET_DETAILS_REQUEST_FULFILLED': {
            return {
                ...state,
                details: payload.data
            }
        }
        default: {
            return state;
        }
    }
}