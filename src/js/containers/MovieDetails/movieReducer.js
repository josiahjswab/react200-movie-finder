const defaultState = {
    details: [],
    toggle: 'true'
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
        case 'UPDATE_TOGGLE': {
            return {
                ...state,
                toggle: payload.event

            }
        }
        default: {
            return state;
        }
    }
}