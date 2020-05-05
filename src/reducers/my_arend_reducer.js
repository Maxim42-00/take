const default_state = {
    my_arend_items: [],
    waiting: false,
    my_arend_page_auth: true
};

const host = "https://astro-margo.ru";
//const host = "http://localhost";

function my_arend_reducer(state = default_state, action)
{
    let new_state = {...state};
    if(action.type === "MY_AREND_LOAD_ITEMS_SEND")
    {
        new_state.waiting=true;
    }
    if(action.type === "MY_AREND_LOAD_ITEMS_RECEIVED")
    {
        new_state.waiting=false;
        new_state.my_arend_items = action.data;
    }
    return new_state;
}

export default my_arend_reducer;