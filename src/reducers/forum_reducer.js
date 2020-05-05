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
    if(action.type === "MESSAGES_LOAD_RECEIVED")
    {
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
        new_state.new_message = "";
    }
    return new_state;
}

export default forum_reducer;