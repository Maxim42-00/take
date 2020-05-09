const host = "http://localhost";

function messages_load_self_thunk(dispatch)
{
    fetch(host + "/take/php/forum.php", {credentials: "include"})
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

export default messages_load_self_thunk;