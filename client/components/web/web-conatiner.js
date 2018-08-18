import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import WebView from './web';
import {setChattingTo} from "../../redux/chat/chat-actions";

function mapStateToProps(state) {
    return {
        user: state.userReducer.basicDetails,
        onlineUsers: state.chatReducer.onlineUsers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setChattingTo: (chattingTo) => {dispatch(setChattingTo(chattingTo))}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WebView));