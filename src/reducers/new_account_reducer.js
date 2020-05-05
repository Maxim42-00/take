const default_state={
    name_input_form: "",
    surname_input_form: "",
    e_mail_input_form: "",
    password_input_form: "",
    waiting: false,
    auth: "",
    name: "",
    surname: "",
    e_mail: "",
    password: ""
};

//const host = "https://astro-margo.ru";
const host = "http://localhost:80";

function new_account_reducer(state = default_state, action)
{
    let new_state = {...state};
    if(action.type==="ON_CHANGE")
    {
        new_state[action.field] = action.value;
    }
    if(action.type==="CREATE_NEW_ACCOUNT_SEND")
    {
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
            new_state.auth = "ok";
        }
        else
        {
            new_state.auth = "error";
        }
    }
    if(action.type==="AUTH_CONFIRM_SEND")
    {
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
            new_state.auth = "ok";
        }
        else
        {
            new_state.auth = "error";
        }
    }
    if(action.type === "LOAD_INITIAL_FORM_DATA_SEND")  // в личном кабинете
    {
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

            new_state.auth = "ok";
        }
        else
        {
            new_state.auth = "error";
        }
    }
    if(action.type === "UPDATE_PRIVATE_DATA_SEND")
    {
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

            new_state.auth = "ok";
        }
        else
        {
            new_state.auth = "error";
        }
    }
    if(action.type==="SET_AUTH")
    {
        new_state.auth=action.auth;
    }
    if(action.type === "QUIT")
    {
        fetch(host + "/take/php/quit.php");
        new_state.auth = "";
    }
    return new_state;
}

export default new_account_reducer;