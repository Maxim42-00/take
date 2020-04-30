const default_state = {
    my_arend_items: [],
    waiting: false,
    my_arend_page_auth: true
};

function my_arend_reducer(state = default_state, action)
{
    let new_state = {...state};
    if(action.type === "MY_AREND_LOAD_ITEMS_SEND")
    {
        new_state.waiting=true;
        fetch("http://localhost:80/take/php/get_my_arend.php")
            .then(data=>data.json())
            .then(data=>{
                let E = new Event("my_arend_loaded", {bubbles: true});
                E.data = data;
                document.dispatchEvent(E);
            });
    }
    if(action.type === "MY_AREND_LOAD_ITEMS_RECEIVED")
    {
        new_state.waiting=false;
        if(action.data.status==="error")
        {
            new_state.my_arend_page_auth = false;
        }
        else
        {
            new_state.my_arend_items = action.data;
        }
    }
    return new_state;
}

export default my_arend_reducer;