import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import ErrorBoundary from '../Templates/ErrorBoundary';
import Bootstrap from './Bootstrap';
import AppRoute from './AppRoute';


import { MainPage, NotFoundPage, SignInPage } from "./PagesLazy";

import { PAGE_MAIN, PAGE_SIGNIN } from '../../config/links';
import { MAIN_PAGE, NOT_FOUND_PAGE, SIGNIN_PAGE } from '../../config/pageNames';

const Root = () => (
    <div>
        <ErrorBoundary>
            <CookiesProvider>
                <Bootstrap>
                    <BrowserRouter>
                        <Switch>
                            <AppRoute
                                exact
                                component={MainPage}
                                name={MAIN_PAGE}
                                path={PAGE_MAIN}
                            />
                            <AppRoute
                                exact
                                component={SignInPage}
                                name={SIGNIN_PAGE}
                                path={PAGE_SIGNIN}
                            />
                            <AppRoute
                                component={NotFoundPage}
                                name={NOT_FOUND_PAGE}
                            />
                        </Switch>
                    </BrowserRouter>
                </Bootstrap>
            </CookiesProvider>
        </ErrorBoundary>
    </div>
);

export default Root;
