import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class About extends Component {

    setVar() {
        Session.set('Meteor.loginButtons.dropdownVisible', true);
    }

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
                <h1>About</h1>
                <p>Polaroid ullamco distillery poutine, banh mi 3 wolf moon nihil tempor mustache. Chia et tote bag,
                    keytar asymmetrical brunch esse meh. Deep v quis lomo accusamus, shabby chic marfa ex irure
                    actually. Twee cronut knausgaard tofu, +1 wayfarers tote bag pour-over gentrify etsy asymmetrical
                    post-ironic cold-pressed officia. Four loko do pug kitsch, art party ugh flannel. Pour-over
                    skateboard gluten-free, cardigan consequat forage butcher. Fashion axe deep v salvia narwhal,
                    gochujang chillwave jean shorts kickstarter meggings skateboard.</p>
                <button onClick={this.setVar}>sign up</button>
            </ReactCSSTransitionGroup>
        )
    }
}