import { HEADER_TITLE_CHAGE } from "../actions/appActions";

const initialState = {
    title: null
};

export default (state = initialState, action) => {
    let nextState = {...state};
    if(action.type === HEADER_TITLE_CHAGE) {
        nextState = {...nextState, title: action.title}
    }

    return nextState || state;
}
