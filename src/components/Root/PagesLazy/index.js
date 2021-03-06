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

export const SignInPage = lazy(() => {
    return pageHandler(import('../../Pages/SignInPage'))
});

export const NotFoundPage = lazy(() => {
    return pageHandler(import('../../Pages/NotFoundPage'))
});

export const MessagesPage = lazy(() => {
    return pageHandler(import('../../Pages/MessagesPage'))
});

