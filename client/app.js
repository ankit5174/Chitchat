import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Routes from "./routes/routes";
import './App.css';


class App extends Component {

    render() {
        return (
            <Routes/>
        )
    }
}

function mapStateToProps(state, props) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        push: (url) => dispatch(push(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

