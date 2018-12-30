import React, { Component, Suspense } from 'react';

export default class AppRoute extends Component {
    componentDidMount() {
        console.log('AppRoute', this.props)
    }

    getTemplate = ({ component: ComposedComponent }) => {
        const MainTemplate = (
            <Suspense fallback={<div>Loading...</div>}>
                <ComposedComponent {...this.props} key={`component${Date.now()}`}/>
            </Suspense>
        );
        return MainTemplate
    };



    render() {
        return this.getTemplate(this.props);
    }
}
