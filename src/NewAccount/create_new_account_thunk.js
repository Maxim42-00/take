const host = "http://localhost";

function create_new_account_thunk(name_input_form, surname_input_form, e_mail_input_form, password_input_form)
{
    return (dispatch)=>
    {
        if(name_input_form==="" || surname_input_form==="" || e_mail_input_form==="" || password_input_form==="")
            return;
        let new_account = {
            name: name_input_form,
            surname: surname_input_form,
            e_mail: e_mail_input_form,
            password: password_input_form
        };
        dispatch({type: "CREATE_NEW_ACCOUNT_SEND"});
        let new_account_json = JSON.stringify(new_account);
        fetch(host + "/take/php/create_new_account.php", {method: "POST", body: new_account_json})
            .then(data=>data.json())
            .then(data=>{
                dispatch({type: "CREATE_NEW_ACCOUNT_RECEIVED", data});
            });
    }
}

export default create_new_account_thunk;