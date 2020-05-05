let default_state=
{
    items: [],
    actions_page_auth: true,
    add_window: false,
    add_window_img: "",
    waiting: false
};

const host = "https://astro-margo.ru";
//const host = "http://localhost";

function actions_reducer(state = default_state, action)
{
    let new_state = {...state};
    if(action.type === "LOAD_ITEMS")
    {
        new_state.waiting = true;
    }
    if(action.type === "ACTIONS_ITEMS_RECEIVED")
    {
        new_state.items = [...state.items];
        for(let i=0;i<action.data.length;i++)
        {
            new_state.items[i] = {...action.data[i]};
        }
        new_state.waiting = false;
        return new_state;
    }
    if(action.type === "DISPLAY_ADD_WINDOW")
    {
        new_state.add_window = true;
        new_state.add_window_img = action.img;
    }
    if(action.type === "ADD_WINDOW_CANCEL")
    {
        new_state.add_window = false;
    }
    if(action.type === "ADD_WINDOW_OK_SEND")
    {
        new_state.waiting = true;
    }
    if(action.type === "ADD_WINDOW_OK_RECEIVED")
    {
        new_state.waiting = false;
        new_state.add_window = false;
    }
    return new_state;
}

export default actions_reducer;