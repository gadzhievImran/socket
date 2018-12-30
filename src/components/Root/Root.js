import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ErrorBoundary from '../Templates/ErrorBoundary';
import AppRoute from './AppRoute';

import { MainPage, NotFoundPage } from "./PagesLazy";

import { PAGE_MAIN } from '../../config/links';
import { MAIN_PAGE, NOT_FOUND_PAGE } from '../../config/pageNames';

const Root = () => (
    <div>
        <ErrorBoundary>
            <BrowserRouter>
                <Switch>
                    <AppRoute
                        exact
                        component={MainPage}
                        name={MAIN_PAGE}
                        path={PAGE_MAIN}
                    />
                    <AppRoute
                        component={NotFoundPage}
                        name={NOT_FOUND_PAGE}
                    />
                </Switch>
            </BrowserRouter>
        </ErrorBoundary>
    </div>

);

export default Root;
