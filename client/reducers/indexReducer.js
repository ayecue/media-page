import { TEST } from '../actions/indexActions';

const defaultState = {
	message: 'moo'
};

export default (state = defaultState, action) => {
    switch (action.type) {
    	case TEST:
            return Object.assign({}, state, { message: action.message });
        default:
            return state;
    }
};
