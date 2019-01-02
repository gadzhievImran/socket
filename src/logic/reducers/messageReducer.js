import { MESSAGE_ACTION } from '../../logic/actions/messageActions';

let initialState = {
    messages: []
};

export default (state = initialState, action) => {
    let nextState;

    if(action.type === MESSAGE_ACTION) {
        nextState = {...state, messages: [...state.messages, action.message]};
        return nextState;
    }

    return nextState || state;
}

