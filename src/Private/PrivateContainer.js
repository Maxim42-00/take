import Private from "./Private";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

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

        private_page_auth: state.new_account.private_page_auth,
        waiting: state.new_account.waiting,
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        auth_confirm_send: ()=>dispatch({type: "AUTH_CONFIRM_SEND"}),
        auth_confirm_received: (data)=>dispatch({type: "AUTH_CONFIRM_RECEIVED", data: data}),
        on_change: (field, value)=>dispatch({type: "ON_CHANGE", field: field, value: value}),
        load_initial_form_data_send: ()=>dispatch({type: "LOAD_INITIAL_FORM_DATA_SEND"}),
        load_initial_form_data_received: (data)=>dispatch({type: "LOAD_INITIAL_FORM_DATA_RECEIVED", data}),
        update_private_data_send: ()=>dispatch({type: "UPDATE_PRIVATE_DATA_SEND"}),
        update_private_data_received: (data)=>dispatch({type: "UPDATE_PRIVATE_DATA_RECEIVED", data})
    };
}

let PrivateWithRouter = withRouter(Private);

let PrivateContainer = connect(mapStateToProps, mapDispatchToProps)(PrivateWithRouter);

export default PrivateContainer;