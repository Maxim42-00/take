import React from "react";
import "./NewAccount.css";
import Waiting from "../Waiting/Waiting";

class Auth extends React.Component
{
    componentDidMount()
    {
        document.addEventListener("auth_confirm", (e)=>this.props.auth_confirm_received(e.data));
    }
    componentWillUnmount()
    {
        document.removeEventListener("auth_confirm", ()=>this.props.auth_confirm_received());
    }
    render()
    {
        if(this.props.auth)
        {
            window.location = "/take/private";
        }
        return (
            <div className="NewAccount">
                {(this.props.waiting ? <Waiting /> : "")}
                <div className="input_container">
                    <input type="text" className="new_account_input" placeholder="Электронная Почта" value={this.props.e_mail_input_form} onChange={(e)=>this.props.on_change("e_mail_input_form", e.target.value)} />
                    <input type="password" className="new_account_input" placeholder="Пароль" value={this.props.password_input_form} onChange={(e)=>this.props.on_change("password_input_form", e.target.value)} />
                    <div className="ok_btn new_account_input" onClick={this.props.auth_confirm_send}> Войти </div>
                </div>
            </div>
        );
    }
};

export default Auth;