import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './top-nav-bar.css';

export default class TopNavBar extends Component {

    constructor() {
        super();
    }

    render() {
        let {
            baseUrl
        } = this.props;

        return (
            <div className="Top">
                <Link to={`${baseUrl}/members`}>Members</Link>
                <Link to={`${baseUrl}/chat`}>Chat</Link>
                <Link to={`${baseUrl}/recent`}>Recent</Link>
            </div>
        );
    }
}

TopNavBar.propTypes = {
    onlineUsers: PropTypes.object,
    setChattingTo: PropTypes.func,
    user: PropTypes.object
};