import Auth from "./Auth";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import auth_confirm_thunk from "./auth_confirm_thunk";

function mapStateToProps(state)
{
    return {
        e_mail_input_form: state.new_account.e_mail_input_form,
        password_input_form: state.new_account.password_input_form,
        waiting: state.new_account.waiting,
        auth: state.new_account.auth
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        auth_confirm_send: (e_mail, password)=>dispatch(auth_confirm_thunk(e_mail, password)),
        on_change: (field, value)=>dispatch({type: "ON_CHANGE", field: field, value: value})
    };
}

let AuthWithRouter = withRouter(Auth);

let AuthContainer = connect(mapStateToProps, mapDispatchToProps)(AuthWithRouter);

export default AuthContainer;