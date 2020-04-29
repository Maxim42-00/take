import React from "react";
import "./Private.css";
import Waiting from "../Waiting/Waiting";

class Private extends React.Component
{
    componentDidMount()
    {
        document.addEventListener("auth_confirm", (e)=>this.props.load_initial_form_data_received(e.data));
        document.addEventListener("private_data_received", (e)=>this.props.update_private_data_received(e.data));
        this.props.load_initial_form_data_send();
    }
    componentWillUnmount()
    {
        document.removeEventListener("auth_confirm", (e)=>this.props.load_initial_form_data_received(e.data));
        document.removeEventListener("private_data_received", (e)=>this.props.update_private_data_received(e.data));
    }
    render()
    {
        return (
            <div className="Private">
                {(this.props.waiting ? <Waiting /> : "")}
                <div className="private_header"> Личный кабинет </div>
                <div className="private_caption"> Имя </div>
                <input type="text" value={this.props.name_input_form} className="input_private" onChange={(e)=>this.props.on_change("name_input_form", e.target.value)} />
                <div className="private_caption"> Фамилия </div>
                <input type="text" value={this.props.surname_input_form} className="input_private" onChange={(e)=>this.props.on_change("surname_input_form", e.target.value)} />
                <div className="private_caption"> Электронная Почта </div>
                <input type="text" value={this.props.e_mail_input_form} className="input_private" onChange={(e)=>this.props.on_change("e_mail_input_form", e.target.value)} />
                <div className="private_caption"> Пароль </div>
                <input type="password" value={this.props.password_input_form} className="input_private" onChange={(e)=>this.props.on_change("password_input_form", e.target.value)} />
                <div className="private_btn input_private" onClick={this.props.update_private_data_send}> Сохранить Данные </div>
            </div>
        );
    }
};

export default Private;