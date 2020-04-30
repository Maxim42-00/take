import MyArend from "./MyArend";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

function mapStateToProps(state)
{
    return {
        waiting: state.my_arend.waiting,
        my_arend_page_auth: state.my_arend.my_arend_page_auth,
        my_arend_items: state.my_arend.my_arend_items
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        my_arend_load_items_send: ()=>dispatch({type: "MY_AREND_LOAD_ITEMS_SEND"}),
        my_arend_load_items_received: (data)=>dispatch({type: "MY_AREND_LOAD_ITEMS_RECEIVED", data})
    };
}

let MyArendWithRouter = withRouter(MyArend);

let MyArendContainer = connect(mapStateToProps, mapDispatchToProps)(MyArendWithRouter);

export default MyArendContainer;