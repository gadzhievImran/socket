import { MESSAGE_ACTION } from '../../logic/actions/messageActions';

let initialState = {
    message: 'IMRAN_REDUCER'
};

export default (state = initialState, action) => {
    console.log('action', action)
    console.log('initialState', state)
    let nextState;

    if(action.type === MESSAGE_ACTION) {
        nextState = {...state, message: action.message};
        return nextState;
    }

    return nextState || state;
}

