import Private from "./Private";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import load_initial_form_data_thunk from "./load_initial_form_data_thunk";
import update_private_data_thunk from "./update_private_data_thunk";

function mapStateToProps(state)
{
    return {
        name: state.new_account.name,
        surname: state.new_account.surname,
        e_mail: state.new_account.e_mail,
        password: state.new_account.password,

        name_input_form: state.new_account.name_input_form,
        surname_input_form: state.new_account.surname_input_form,
        e_mail_input_form: state.new_account.e_mail_input_form,
        password_input_form: state.new_account.password_input_form,

        auth: state.new_account.auth,
        waiting: state.new_account.waiting,
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        on_change: (field, value)=>dispatch({type: "ON_CHANGE", field: field, value: value}),
        load_initial_form_data_send: ()=>dispatch(load_initial_form_data_thunk),
        update_private_data_send: (name, surname, e_mail, password)=>dispatch(update_private_data_thunk(name, surname, e_mail, password))
    };
}

let PrivateWithRouter = withRouter(Private);

let PrivateContainer = connect(mapStateToProps, mapDispatchToProps)(PrivateWithRouter);

export default PrivateContainer;