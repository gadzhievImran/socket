import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import ErrorBoundary from '../Templates/ErrorBoundary';
import Bootstrap from './Bootstrap';
import AppRoute from './AppRoute';


import { MainPage, NotFoundPage, SignInPage, MessagesPage } from "./PagesLazy";

import { PAGE_MAIN, PAGE_SIGNIN, PAGE_MESSAGES } from '../../config/links';
import { MAIN_PAGE, NOT_FOUND_PAGE, SIGNIN_PAGE, MESSAGES_PAGE } from '../../config/pageNames';

const Root = () => (
    <React.Fragment>
        <ErrorBoundary>
            <CookiesProvider>
                <BrowserRouter>
                    <Bootstrap>
                        <Switch>
                            <AppRoute
                                exact
                                component={MainPage}
                                name={MAIN_PAGE}
                                path={PAGE_MAIN}
                                appTemplate
                            />
                            <AppRoute
                                exact
                                component={MessagesPage}
                                name={MESSAGES_PAGE}
                                path={PAGE_MESSAGES}
                                appTemplate
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
                    </Bootstrap>
                </BrowserRouter>
            </CookiesProvider>
        </ErrorBoundary>
    </React.Fragment>
);

export default Root;
