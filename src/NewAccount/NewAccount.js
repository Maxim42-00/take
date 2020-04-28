import React from "react";
import "./NewAccount.css";
import Waiting from "../Waiting/Waiting";

class NewAccount extends React.Component
{
    componentDidMount()
    {
        document.addEventListener("account_created", (e)=>this.props.account_created(e.data));
    }
    componentWillUnmount()
    {
        document.removeEventListener("account_created", ()=>this.props.account_created());
    }
    render()
    {
        return (
            <div className="NewAccount">
                {(this.props.waiting ? <Waiting /> : "")}
                <div className="input_container">
                    <input type="text" className="new_account_input" placeholder="Имя" value={this.props.name} onChange={(e)=>this.props.on_change("name", e.target.value)} />
                    <input type="text" className="new_account_input" placeholder="Фамилия" value={this.props.surname} onChange={(e)=>this.props.on_change("surname", e.target.value)} />
                    <input type="text" className="new_account_input" placeholder="Электронная Почта" value={this.props.e_mail} onChange={(e)=>this.props.on_change("e_mail", e.target.value)} />
                    <input type="password" className="new_account_input" placeholder="Пароль" value={this.props.password} onChange={(e)=>this.props.on_change("password", e.target.value)} />
                    <div className="ok_btn new_account_input" onClick={this.props.create_new_account}> Создать Аккаунт </div>
                </div>
            </div>
        );
    }
};

export default NewAccount;