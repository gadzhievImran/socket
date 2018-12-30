import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ErrorBoundary from '../Templates/ErrorBoundary';
import AppRoute from './AppRoute';

// import { MainPage } from "./PagesLazy";
import MainPage from "../Pages/MainPage";
import { PAGE_MAIN } from '../../config/links';
import { MAIN_PAGE } from '../../config/pageNames';

const Root = () => (
    <ErrorBoundary>
        <BrowserRouter>
            <Switch>
                <AppRoute
                    exact
                    component={MainPage}
                    name={MAIN_PAGE}
                    path={PAGE_MAIN}
                />
            </Switch>
        </BrowserRouter>
    </ErrorBoundary>
);

export default Root;
