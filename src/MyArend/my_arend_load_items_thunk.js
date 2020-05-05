const host = "http://localhost";

function my_arend_load_items_thunk(dispatch)
{
    dispatch({type: "MY_AREND_LOAD_ITEMS_SEND"});
    fetch(host + "/take/php/get_my_arend.php")
        .then(data=>data.json())
        .then(data=>{
console.log(data);
            if(data.status==="error")
            {
                dispatch({type: "SET_AUTH", auth: "error"});
            }
            else
            {
                dispatch({type: "SET_AUTH", auth: "ok"});
                dispatch({type: "MY_AREND_LOAD_ITEMS_RECEIVED", data});
            }
        });
}

export default my_arend_load_items_thunk;