import {host} from "../host";

function message_send_thunk(msg)
{
    return (dispatch)=>
    {
        if(msg==="") return;
        dispatch({type: "MESSAGE_SEND"});
        fetch(host + "/take/php/forum.php?message=send", {method: "POST", body: msg, credentials: "include"})
            .then(data=>data.json())
            .then(data=>{
                if(data.status)
                {
                    dispatch({type: "SET_AUTH", auth: "error"});
                    return;
                }
                dispatch({type: "SET_AUTH", auth: "ok"});
                dispatch({type: "MESSAGES_LOAD_RECEIVED", data});
            });
    }
}

export default message_send_thunk;