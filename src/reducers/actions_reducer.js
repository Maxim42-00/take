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
        fetch(host + "/take/php/actions.php")
            .then(data=>data.json())
            .then(data=>{
                let E = new Event("actions_items_loaded", {bubbles: true});
                E.data = data;
                document.dispatchEvent(E);
            });
        new_state.waiting = true;
    }
    if(action.type === "ACTIONS_ITEMS_RECEIVED")
    {
        if(action.data.status !== "error")
        {
            new_state.items = [...state.items];
            for(let i=0;i<action.data.length;i++)
            {
                new_state.items[i] = {...action.data[i]};
            }
            new_state.actions_page_auth = true;
            new_state.waiting = false;
            return new_state;
        }
        else
        {
            new_state.actions_page_auth = false;
        }
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
        let new_data = {...action.arend_date_time};
        new_data.img = new_state.add_window_img;
        let new_data_json = JSON.stringify(new_data);
        fetch(host + "/take/php/my_arend_add.php", {method: "POST", body: new_data_json})
            .then(data=>data.json())
            .then(data=>{
                let E = new Event("add_new_arend", {bubbles: true});
                E.data = data;
                document.dispatchEvent(E);
            });
        new_state.waiting = true;
    }
    if(action.type === "ADD_WINDOW_OK_RECEIVED")
    {
        new_state.waiting = false;
        new_state.add_window = false;
        if(action.data.status === "ok")
        {
          //  alert("your id: " + action.data.id);
        }
    }
    return new_state;
}

export default actions_reducer;