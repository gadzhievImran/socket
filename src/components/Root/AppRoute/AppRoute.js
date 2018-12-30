import React, { Component } from 'react';

export default class AppRoute extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    getTemplate = ({ component: ComposedComponent }) => {
        let MainTemplate = (
                <ComposedComponent {...this.props} key={`component${Date.now()}`}/>
        );
        return MainTemplate
    };

    render() {
        return this.getTemplate(this.props);
    }
}
