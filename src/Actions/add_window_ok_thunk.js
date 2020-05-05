const host = "http://localhost";

function add_window_ok_thunk(img, arend_date_time)
{
    return (dispatch)=>
    {
        dispatch({type: "ADD_WINDOW_OK_SEND"});
        let new_data = {...arend_date_time};
        new_data.img = img;
        let new_data_json = JSON.stringify(new_data);
        fetch(host + "/take/php/my_arend_add.php", {method: "POST", body: new_data_json})
            .then(data=>data.json())
            .then(data=>{
                dispatch({type: "ADD_WINDOW_OK_RECEIVED"});
            });
    }
}

export default add_window_ok_thunk;