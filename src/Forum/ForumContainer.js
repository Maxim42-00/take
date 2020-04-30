import Forum from "./Forum";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

function mapStateToProps(state)
{
    return {
        forum_page_auth: state.forum.forum_page_auth,
        messages: state.forum.messages,
        new_message: state.forum.new_message,
        have_new_messages: state.forum.have_new_messages
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        messages_load_self_send: ()=>dispatch({type: "MESSAGES_LOAD_SELF_SEND"}),
        messages_load_received: (data)=>dispatch({type: "MESSAGES_LOAD_RECEIVED", data}),
        new_message_on_change: (text)=>dispatch({type: "NEW_MESSAGE_ON_CHANGE", text}),
        message_send: ()=>dispatch({type: "MESSAGE_SEND"})
    };
}

let ForumWithRouter = withRouter(Forum);

let ForumContainer = connect(mapStateToProps, mapDispatchToProps)(ForumWithRouter);

export default ForumContainer;