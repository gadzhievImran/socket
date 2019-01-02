export default store => next => action => {
    console.log('userMiddleware');
    // console.log('getState', store.getState());
    // console.log('action', action);
    return next();
}
