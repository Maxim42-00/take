import {host} from "../host";

function load_items_thunk(dispatch)
{
    dispatch({type: "LOAD_ITEMS"});
    fetch(host + "/take/php/actions.php", {credentials: "include"})
        .then(data=>data.json())
        .then(data=>{
            if(data.status !== "error")
            {
                dispatch({type: "SET_AUTH", auth: "ok"});
                dispatch({type: "ACTIONS_ITEMS_RECEIVED", data});
            }
            else
                dispatch({type: "SET_AUTH", auth: "error"});
        });
}

export default load_items_thunk;