import React from "react";
import "./NewAccount.css";
import Waiting from "../Waiting/Waiting";
import AuthNav from "./AuthNav";

class Auth extends React.Component
{
    constructor(props)
    {
        super(props);
        this.redirect_to_private = this.redirect_to_private.bind(this);
    }
    redirect_to_private()
    {
        this.props.history.push("/take/private");
    }
    componentDidMount()
    {
        if(this.props.auth==="ok") this.redirect_to_private();
    }
    componentDidUpdate()
    {
        if(this.props.auth==="ok") this.redirect_to_private();
    }
    render()
    {
        if(this.props.auth==="ok")
        {
            return <div></div>;
        }
        const e_mail = this.props.e_mail_input_form;
        const password = this.props.password_input_form;
        return (
            <div className="NewAccount">
                {(this.props.waiting ? <Waiting /> : "")}
                <div className="input_container">
                    <AuthNav />
                    <input type="text" className="new_account_input" placeholder="Электронная Почта" value={e_mail} onChange={(e)=>this.props.on_change("e_mail_input_form", e.target.value)} />
                    <input type="password" className="new_account_input" placeholder="Пароль" value={password} onChange={(e)=>this.props.on_change("password_input_form", e.target.value)} />
                    <div className="ok_btn new_account_input" onClick={()=>this.props.auth_confirm_send(e_mail, password)}> Войти </div>
                </div>
            </div>
        );
    }
};

export default Auth;