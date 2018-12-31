import React, { Component } from 'react';

import { PAGE_MAIN, PAGE_MESSAGES, PAGE_SIGNIN } from '../../../../config/links';

import Li from './Li';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <Li
                    name="MainPage"
                    link={PAGE_MAIN}
                    text="Main"
                />
                <Li
                    name="MessagesPage"
                    link={PAGE_MESSAGES}
                    text="Messages"
                />
            </div>
        )
    }
}
