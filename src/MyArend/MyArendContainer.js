import MyArend from "./MyArend";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import my_arend_load_items_thunk from "./my_arend_load_items_thunk";

function mapStateToProps(state)
{
    return {
        waiting: state.my_arend.waiting,
        auth: state.new_account.auth,
        my_arend_items: state.my_arend.my_arend_items
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        my_arend_load_items_send: ()=>dispatch(my_arend_load_items_thunk)
    };
}

let MyArendWithRouter = withRouter(MyArend);

let MyArendContainer = connect(mapStateToProps, mapDispatchToProps)(MyArendWithRouter);

export default MyArendContainer;