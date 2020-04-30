import React from "react";
import "./Message.css";
import timestamp_to_string from "../../functions/timestamp_to_string";

class Message extends React.Component
{
    render()
    {
        const time_str = timestamp_to_string(this.props.time*1000);
        return (
            <div className="Message">
                <div className="message_name"> {this.props.name} </div>
                <div className="message_ip"> {this.props.ip} </div>
                <div className="message_time"> {time_str} </div>
                <div className="message_text"> {this.props.text} </div>
            </div>
        );
    }
};

export default Message;