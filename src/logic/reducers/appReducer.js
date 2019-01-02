import { HEADER_TITLE_CHAGE } from "../actions/appActions";

const initialState = {
    title: 'Main_Page'
};

export default (state = initialState, action) => {
    console.log('App-action', action);
    let nextState = {...state};
    if(action.type === HEADER_TITLE_CHAGE) {
        nextState = {...nextState, title: action.title}
    }

    return nextState || state;
}
