import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Li extends Component {
    render() {
        const { link, text } = this.props;
        console.log(link, text)
        return (
            <div>
                <Link to={this.props.link}>
                    {this.props.text}
                </Link>

            </div>
        )
    }
}
