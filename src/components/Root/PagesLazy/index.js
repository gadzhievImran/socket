import React, { lazy } from 'react';

const pageHandler = lazyComponent => {
    const component = lazyComponent;
    component.then(res => res).catch(e => {
        console.log(e);
        return import('../../Pages/NotFoundPage');
    });
    return component;
};

export const MainPage = lazy(() => {
    return pageHandler(import (`../../Pages/MainPage`));
});

export const NotFoundPage = lazy(() => {
    pageHandler(import('../../Pages/NotFoundPage'))
});
