let default_state=
{
    items:
    [
        {
            name: "tesla",
            img: "https://avatars.mds.yandex.net/get-pdb/2104893/64f693c9-c1d2-4265-8643-982e55e2f11c/s1200?webp=false"
        }
    ]
};


function actions_reducer(state = default_state, action)
{
    let new_state = {...state};
    if(action.type === "LOAD_ITEMS")
    {
        fetch("http://localhost:80/take/php/actions.php")
            .then(data=>data.json())
            .then(data=>{
                let E = new Event("actions_items_loaded", {bubbles: true});
                E.data = data;
                document.dispatchEvent(E);
            });
    }
    if(action.type === "ACTIONS_ITEMS_RECEIVED")
    {
console.log(action.data.error);
        if(action.data.error === "non_auth")
        {
            window.location = "/take/new_account";
        }
        new_state.items = [...state.items];
        for(let i=0;i<action.data.length;i++)
        {
            new_state.items[i] = {...action.data[i]};
        }
    }
    return new_state;
}

export default actions_reducer;