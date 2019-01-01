import { MESSAGE_ACTION } from '../../logic/actions/messageActions';

let initialState = {
    message: null
};

export default (state = initialState, action) => {
    console.log('actino', action)
    console.log('action', action)
    let nextState;

    if(action.type === MESSAGE_ACTION) {
        nextState = {...state, message: action.message};
        return nextState;
    }

    return nextState || state;
}

