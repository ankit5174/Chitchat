import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import ChatWindow from './chat-window';
import {emitEvent, registerEvent, sendNewMessage} from "../../redux/chat/chat-actions";

function mapStateToProps(state) {
    return {
        user: state.userReducer.basicDetails,
        chattingTo: state.chatReducer.chattingTo,
        recentChats: state.chatReducer.recentChats
    }
}

function mapDispatchToProps(dispatch) {
    return {
        emitEvent: (eventName, data) => {dispatch(emitEvent(eventName, data))},
        registerEvent: (eventName) => {dispatch(registerEvent(eventName))},
        sendNewMessage: (messagePacket) => {dispatch(sendNewMessage(messagePacket))}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatWindow));