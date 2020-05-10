import {host} from "../host";

function update_private_data_thunk(name, surname, e_mail, password)
{
    return (dispatch)=>
    {
        if(name==="" || surname==="" || e_mail==="" || password==="")
            return;
        dispatch({type: "UPDATE_PRIVATE_DATA_SEND"});
        let new_account = {
            name,
            surname,
            e_mail,
            password
        };
        let new_account_json = JSON.stringify(new_account);
        fetch(host + "/take/php/private_update_data.php", {method: "POST", body: new_account_json, credentials: "include"})
            .then(data=>data.json())
            .then(data=>{
                dispatch({type: "UPDATE_PRIVATE_DATA_RECEIVED", data});
            });
    }
}

export default update_private_data_thunk;