const host = "http://localhost";

function load_items_thunk(dispatch)
{
    dispatch({type: "LOAD_ITEMS"});
    fetch(host + "/take/php/actions.php")
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