import {connect} from "react-redux";
import NewAccount from "./NewAccount";
import {withRouter} from "react-router-dom";
import create_new_account_thunk from "./create_new_account_thunk.js";

function mapStateToProps(state)
{
    return {
        name: state.new_account.name_input_form,
        surname: state.new_account.surname_input_form,
        e_mail: state.new_account.e_mail_input_form,
        password: state.new_account.password_input_form,
        waiting: state.new_account.waiting,
        auth: state.new_account.auth
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        on_change: (field, value)=>dispatch({type: "ON_CHANGE", field: field, value: value}),
        create_new_account: (name, surname, e_mail, password)=>dispatch(create_new_account_thunk(name, surname, e_mail, password))
    };
}

let NewAccountWithRouter = withRouter(NewAccount);

let NewAccountContainer = connect(mapStateToProps, mapDispatchToProps)(NewAccountWithRouter);

export default NewAccountContainer;