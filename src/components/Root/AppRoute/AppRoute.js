import React, { Component, Suspense } from 'react';

import AppTemplate from '../../Templates/AppTemplate';
import { PAGE_SIGNIN } from '../../../config/links';

export default class AppRoute extends Component {
    componentDidMount() {
        this.redirect();
    }

    // componentDidUpdate() {
    //     this.redirect();
    // }

    getTemplate = ({ component: ComposedComponent, appTemplate }) => {
        let MainTemplate = (
            <Suspense fallback={<div>Loading...</div>}>
                <ComposedComponent {...this.props} key={`component${Date.now()}`}/>
            </Suspense>
        );

        if(appTemplate) {
            MainTemplate = (
                <AppTemplate {...this.props}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <ComposedComponent {...this.props} key={`component${Date.now()}`}/>
                    </Suspense>
                </AppTemplate>
            );
        }

        return MainTemplate
    };

    redirect = () => {
        const { cookies } = this.props;
        if(Boolean(cookies.get('token'))) {
            // return void this.props.history.push(PAGE_MAIN);
        }else {
            this.props.history.push(PAGE_SIGNIN);
        }
    };

    render() {
        return this.getTemplate(this.props);
    }
}
