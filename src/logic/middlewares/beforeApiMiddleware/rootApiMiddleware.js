export default store => next => action => {
    console.log('rootApiMiddleware');
    return next();
}
