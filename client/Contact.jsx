import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Contact extends Component {

    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="route"
                transitionEnterTimeout={600}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={400}
                transitionAppear={true}
            >
                <h1>Contact</h1>
                <p>Michael Romanoff: {Meteor.settings.public.email}</p>
            </ReactCSSTransitionGroup>
        )
    }
}