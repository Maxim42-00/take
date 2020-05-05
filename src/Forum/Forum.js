import React from "react";
import Message from "./Message/Message";
import "./Forum.css";

class Forum extends React.Component
{
    constructor(props)
    {
        super(props);
        this.redirect_to_auth = this.redirect_to_auth.bind(this);
        this.scroll_down = this.scroll_down.bind(this);
    }
    redirect_to_auth()
    {
        this.props.history.push("/take/auth");
    }
    scroll_down()
    {
        document.getElementById("f_content").scrollTop = document.getElementById("f_content").scrollHeight - document.getElementById("f_content").clientHeight;
    }
    componentDidMount()
    {
        this.props.messages_load_self_send();
        this.interval = setInterval(this.props.messages_load_self_send, 5000);
        this.scroll_down();
    }
    componentDidUpdate()
    {
        if(this.props.auth==="error")
        {
            this.redirect_to_auth();
            return;
        }

        if(this.props.have_new_messages)
            this.scroll_down();
    }
    componentWillUnmount()
    {
        clearInterval(this.interval);
    }
    render()
    {
        if(this.props.auth==="error")
            return <div></div>;
        let messages = this.props.messages.map((cur, i)=><Message name={cur.name} ip={cur.ip} time={cur.time} text={cur.text} />);
        return (
            <div className="Forum"> 
                <div className="forum_header">Форум</div>
                <div className="forum_content" id="f_content">
                    {messages}
                </div>
                <div className="new_message">
                    <div> Новое Сообщение </div>
                    <textarea className="new_message" value={this.props.new_message} placeholder="Новое Сообщение" onChange={(e)=>this.props.new_message_on_change(e.target.value)}></textarea>
                    <div className="message_send" onClick={()=>this.props.message_send(this.props.new_message)}>Отправить</div>
                </div>
            </div>
        );
    }
};

export default Forum;