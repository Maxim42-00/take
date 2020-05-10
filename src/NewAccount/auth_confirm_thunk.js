import {host} from "../host";

function auth_confirm_thunk(e_mail_input_form, password_input_form)
{
    return (dispatch)=>
    {
        if(e_mail_input_form==="" || password_input_form==="")
            return;
        dispatch({type: "AUTH_CONFIRM_SEND"});
        let input_account = {
            e_mail: e_mail_input_form,
            password: password_input_form
        };
        let input_account_json = JSON.stringify(input_account);
        fetch(host + "/take/php/auth_confirm.php", {method: "POST", body: input_account_json, credentials: "include"}) 
            .then(data=>data.json())
            .then(data=>{
               dispatch({type: "AUTH_CONFIRM_RECEIVED", data});
            });
    }
}

export default auth_confirm_thunk;