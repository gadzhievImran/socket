export default store => next => action => {
    console.log('getState', store.getState());
    console.log('action', action)
    return next();
}
