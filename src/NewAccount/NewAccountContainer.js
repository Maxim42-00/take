import {connect} from "react-redux";
import NewAccount from "./NewAccount";

function mapStateToProps(state)
{
    return {
        name: state.new_account.name,
        surname: state.new_account.surname,
        e_mail: state.new_account.e_mail,
        password: state.new_account.password,
        waiting: state.new_account.waiting
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        on_change: (field, value)=>dispatch({type: "ON_CHANGE", field: field, value: value}),
        create_new_account: ()=>dispatch({type: "CREATE_NEW_ACCOUNT_SEND"}),
        account_created: (data)=>dispatch({type: "CREATE_NEW_ACCOUNT_RECEIVED", data: data})
    };
}

let NewAccountContainer = connect(mapStateToProps, mapDispatchToProps)(NewAccount);

export default NewAccountContainer;