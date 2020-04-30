const default_state={
    name_input_form: "",
    surname_input_form: "",
    e_mail_input_form: "",
    password_input_form: "",
    waiting: false,
    auth: false,
    private_page_auth: true,
    name: "",
    surname: "",
    e_mail: "",
    password: ""
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
            name: state.name_input_form,
            surname: state.surname_input_form,
            e_mail: state.e_mail_input_form,
            password: state.password_input_form
        };
        let new_account_json = JSON.stringify(new_account);
        fetch(`http://localhost:80/take/php/create_new_account.php`, {method: "POST", body: new_account_json})
            .then(data=>data.json())
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
        if(action.data.status === "ok")
        {
            new_state.name = action.data.name;
            new_state.surname = action.data.surname;
            new_state.e_mail = action.data.e_mail;
            new_state.password = action.data.password;
            new_state.auth = true;
        }
        else
        {
         //   alert("error");
            new_state.auth = false;
        }
    }
    if(action.type==="AUTH_CONFIRM_SEND")
    {
        let input_account = {
            e_mail: state.e_mail_input_form,
            password: state.password_input_form
        };
        let input_account_json = JSON.stringify(input_account);
        fetch("http://localhost:80/take/php/auth_confirm.php", {method: "POST", body: input_account_json}) 
            .then(data=>data.json())
            .then(data=>{
                let E = new Event("auth_confirm", {bubbles: true});
                E.data = data;
                document.dispatchEvent(E);
            });
        new_state["waiting"]=true;
    }
    if(action.type==="AUTH_CONFIRM_RECEIVED")
    {
        new_state["waiting"]=false;
        if(action.data.status === "ok")
        {
            new_state.name = action.data.name;
            new_state.surname = action.data.surname;
            new_state.e_mail = action.data.e_mail;
            new_state.password = action.data.password;
            new_state.auth = true;
        }
        else
        {
            new_state.auth = false;
          //  alert("error");
        }
    }
    if(action.type === "LOAD_INITIAL_FORM_DATA_SEND")  // в личном кабинете
    {
        fetch("http://localhost:80/take/php/private_auth.php") 
            .then(data=>data.json())
            .then(data=>{
                let E = new Event("auth_confirm", {bubbles: true});
                E.data = data;
                document.dispatchEvent(E);
            });
        new_state["waiting"]=true;
    }
    if(action.type==="LOAD_INITIAL_FORM_DATA_RECEIVED")
    {
        new_state["waiting"]=false;
        if(action.data.status === "ok")
        {
            new_state.name = action.data.name;
            new_state.surname = action.data.surname;
            new_state.e_mail = action.data.e_mail;
            new_state.password = action.data.password;

            new_state.name_input_form = action.data.name;
            new_state.surname_input_form = action.data.surname;
            new_state.e_mail_input_form = action.data.e_mail;
            new_state.password_input_form = action.data.password;

            new_state.private_page_auth = true;
        }
        else
        {
            new_state.private_page_auth = false;
          //  alert("error");
        }
    }
    if(action.type === "UPDATE_PRIVATE_DATA_SEND")
    {
        let new_account = {
            name: state.name_input_form,
            surname: state.surname_input_form,
            e_mail: state.e_mail_input_form,
            password: state.password_input_form
        };
        let new_account_json = JSON.stringify(new_account);
        fetch("http://localhost:80/take/php/private_update_data.php", {method: "POST", body: new_account_json})
            .then(data=>data.json())
            .then(data=>{
                let E = new Event("private_data_received", {bubbles: true});
                E.data = data;
                document.dispatchEvent(E);
            });
        new_state["waiting"]=true;
    }
    if(action.type==="UPDATE_PRIVATE_DATA_RECEIVED")
    {
        new_state["waiting"]=false;
        if(action.data.status === "ok")
        {
            new_state.name = action.data.name;
            new_state.surname = action.data.surname;
            new_state.e_mail = action.data.e_mail;
            new_state.password = action.data.password;

            new_state.name_input_form = action.data.name;
            new_state.surname_input_form = action.data.surname;
            new_state.e_mail_input_form = action.data.e_mail;
            new_state.password_input_form = action.data.password;

            new_state.private_page_auth = true;
        }
        else
        {
            new_state.private_page_auth = false;
         //   alert("error");
        }
    }
    if(action.type === "QUIT")
    {
        fetch("http://localhost:80/take/php/quit.php");
        new_state.auth = false;
    }
    return new_state;
}

export default new_account_reducer;