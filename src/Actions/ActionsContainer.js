import Actions from "./Actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

function mapStateToProps(state)
{
    return {
        items: state.actions.items,
        actions_page_auth: state.actions.actions_page_auth,
        add_window: state.actions.add_window,
        add_window_img: state.actions.add_window_img,
        waiting: state.actions.waiting
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        load_items: ()=>dispatch({type: "LOAD_ITEMS"}),
        items_received: (data)=>dispatch({type: "ACTIONS_ITEMS_RECEIVED", data: data}),
        display_add_window: (img)=>dispatch({type: "DISPLAY_ADD_WINDOW", img}),
        add_window_cancel: ()=>dispatch({type: "ADD_WINDOW_CANCEL"}),
        add_window_ok_send: (arend_date_time)=>dispatch({type: "ADD_WINDOW_OK_SEND", arend_date_time}),
        add_window_ok_received: (data)=>dispatch({type: "ADD_WINDOW_OK_RECEIVED", data})
    };
}

let ActionsWithRouter = withRouter(Actions);

let ActionsContainer = connect(mapStateToProps, mapDispatchToProps)(ActionsWithRouter);

export default ActionsContainer;