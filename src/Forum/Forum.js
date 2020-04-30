import React from "react";
import Message from "./Message/Message";
import "./Forum.css";

class Forum extends React.Component
{
    componentDidMount()
    {
        document.addEventListener("messages_load", (e)=>this.props.messages_load_received(e.data));
        this.props.messages_load_self_send();
        document.getElementById("f_content").scrollTop = document.getElementById("f_content").scrollHeight - document.getElementById("f_content").clientHeight;
    }
    componentDidUpdate()
    {
        setTimeout(this.props.messages_load_self_send, 5000);
        document.getElementById("f_content").scrollTop = document.getElementById("f_content").scrollHeight - document.getElementById("f_content").clientHeight;
    }
    componentWillUnmount()
    {
        document.removeEventListener("messages_load", (e)=>this.props.messages_load_received(e.data));
    }
    render()
    {
        if(!this.props.forum_page_auth)
            this.props.history.push("/take/auth");
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
                    <div className="message_send" onClick={this.props.message_send}>Отправить</div>
                </div>
            </div>
        );
    }
};

export default Forum;