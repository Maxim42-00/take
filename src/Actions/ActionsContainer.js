import Actions from "./Actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import load_items_thunk from "./load_items_thunk";
import add_window_ok_thunk from "./add_window_ok_thunk";

function mapStateToProps(state)
{
    return {
        items: state.actions.items,
        auth: state.new_account.auth,
        add_window: state.actions.add_window,
        add_window_img: state.actions.add_window_img,
        waiting: state.actions.waiting
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        load_items: ()=>dispatch(load_items_thunk),
        display_add_window: (img)=>dispatch({type: "DISPLAY_ADD_WINDOW", img}),
        add_window_cancel: ()=>dispatch({type: "ADD_WINDOW_CANCEL"}),
        add_window_ok_send: (img, arend_date_time)=>dispatch(add_window_ok_thunk(img, arend_date_time))
    };
}

let ActionsWithRouter = withRouter(Actions);

let ActionsContainer = connect(mapStateToProps, mapDispatchToProps)(ActionsWithRouter);

export default ActionsContainer;