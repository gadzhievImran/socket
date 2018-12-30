import React, { lazy } from 'react';

const pageHandler = component => {
    return component.then(res => res)
        .catch(e => {
            console.error(e);
            return <h1>{e}</h1>
            // return import ('../../PagesLazy/NotFoundPage');
        })
};

export const MainPage = lazy(() => {
    return pageHandler(import (`../../Pages/MainPage`));
});
