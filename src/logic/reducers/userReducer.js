import { USER_INFO } from '../actions/userActions';

let initialState = {
    userInfo: null
};

export default (state = initialState, action) => {
    let nextState;

    if (action.type === USER_INFO) {
        nextState = {...state, userInfo: action.userInfo};
        return nextState;
    }

    return nextState || state;
}

