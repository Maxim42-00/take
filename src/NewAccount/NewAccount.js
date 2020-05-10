import React from "react";
import "./NewAccount.css";
import Waiting from "../Waiting/Waiting";
import AuthNav from "./AuthNav";

class NewAccount extends React.Component
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
        const name = this.props.name;
        const surname = this.props.surname;
        const e_mail = this.props.e_mail;
        const password = this.props.password;
        return (
            <div className="NewAccount">
                {(this.props.waiting ? <Waiting /> : "")}
                <div className="input_container">
                    <AuthNav />
                    <input type="text" className="new_account_input" placeholder="Имя" value={name} onChange={(e)=>this.props.on_change("name_input_form", e.target.value)} />
                    <input type="text" className="new_account_input" placeholder="Фамилия" value={surname} onChange={(e)=>this.props.on_change("surname_input_form", e.target.value)} />
                    <input type="text" className="new_account_input" placeholder="Электронная Почта" value={e_mail} onChange={(e)=>this.props.on_change("e_mail_input_form", e.target.value)} />
                    <input type="password" className="new_account_input" placeholder="Пароль" value={password} onChange={(e)=>this.props.on_change("password_input_form", e.target.value)} />
                    <div className="ok_btn new_account_input" onClick={()=>this.props.create_new_account(name, surname, e_mail, password)}> Создать Аккаунт </div>
                </div>
            </div>
        );
    }
};

export default NewAccount;