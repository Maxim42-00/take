const default_state={
    name: "",
    surname: "",
    e_mail: "",
    password: "",
    waiting: false
};


function new_account_reducer(state = default_state, action)
{
    let new_state = {...state};
    if(action.type==="ON_CHANGE")
    {
        new_state[action.field] = action.value;
    }
    if(action.type==="CREATE_NEW_ACCOUNT_SEND")
    {
        let new_account = {
            name: state.name,
            surname: state.surname,
            e_mail: state.e_mail,
            password: state.password
        };
        let new_account_json = JSON.stringify(new_account);
        fetch(`http://localhost:80/take/php/create_new_account.php`, {method: "POST", body: new_account_json})
            .then(data=>data.text())
            .then(data=>{
                let E = new Event("account_created", {bubbles: true});
                E.data = data;
                document.dispatchEvent(E);
            });
        new_state["waiting"]=true;
    }
    if(action.type==="CREATE_NEW_ACCOUNT_RECEIVED")
    {
        new_state["waiting"]=false;
        if(action.data === "ok")
        {
            window.location = "http://localhost:3000/take/private";
        }
        alert(action.data); 
    }
    return new_state;
}

export default new_account_reducer;