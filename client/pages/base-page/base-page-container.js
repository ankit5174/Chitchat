import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import BasePage from './base-page';
import {emitEvent, goOnline, registerEvent, setChattingTo} from "../../redux/chat/chat-actions";

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        goOnline: () => {dispatch(goOnline())},
        emitEvent: (eventName, data) => {dispatch(emitEvent(eventName, data))},
        registerEvent: (eventName) => {dispatch(registerEvent(eventName))}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BasePage));