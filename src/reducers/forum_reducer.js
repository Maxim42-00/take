const default_state = {
    messages: [],
    new_message: "",
    forum_page_auth: true,
    have_new_messages: false,
    number_of_messages: 0
};

const host = "https://astro-margo.ru";
//const host = "http://localhost";

function forum_reducer(state = default_state, action)
{
    let new_state = {...state};
    new_state.have_new_messages = false;
    if(action.type === "MESSAGES_LOAD_SELF_SEND")
    {
        fetch(host + "/take/php/forum.php")
            .then(data=>data.json())
            .then(data=>{
                let E = new Event("messages_load", {bubbles: true});
                E.data = data;
                document.dispatchEvent(E);
            });
    }
    if(action.type === "MESSAGES_LOAD_RECEIVED")
    {
        if(action.data.status)
        {
            new_state.forum_page_auth = false;
            return new_state;
        }
        
        if(new_state.number_of_messages === action.data.length)
            new_state.have_new_messages = false;
        else
        {
            new_state.messages = action.data;
            new_state.number_of_messages = action.data.length;
            new_state.have_new_messages = true;
        }
    }
    if(action.type === "NEW_MESSAGE_ON_CHANGE")
    {
        new_state.new_message = action.text;
    }
    if(action.type === "MESSAGE_SEND")
    {
        let new_message = state.new_message;
        fetch(host + "/take/php/forum.php?message=send", {method: "POST", body: new_message})
            .then(data=>data.json())
            .then(data=>{
                let E = new Event("messages_load", {bubbles: true});
                E.data = data;
                document.dispatchEvent(E);
            });
        new_state.new_message = "";
    }
    return new_state;
}

export default forum_reducer;