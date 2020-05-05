import Forum from "./Forum";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import messages_load_self_thunk from "./messages_load_self_thunk";
import message_send_thunk from "./message_send_thunk";

function mapStateToProps(state)
{
    return {
        auth: state.new_account.auth,
        messages: state.forum.messages,
        new_message: state.forum.new_message,
        have_new_messages: state.forum.have_new_messages
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        messages_load_self_send: ()=>dispatch(messages_load_self_thunk),
        new_message_on_change: (text)=>dispatch({type: "NEW_MESSAGE_ON_CHANGE", text}),
        message_send: (msg)=>dispatch(message_send_thunk(msg))
    };
}

let ForumWithRouter = withRouter(Forum);

let ForumContainer = connect(mapStateToProps, mapDispatchToProps)(ForumWithRouter);

export default ForumContainer;