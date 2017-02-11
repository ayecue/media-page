import { CHANGE_ROUTE } from '../actions/routeActions';

const initialState = {};

const routeReducer = (state = { route: initialState }, action) => {
    switch (action.type) {
        case CHANGE_ROUTE:
            return state;
        default:
            return state;
    }
};

export default routeReducer;
