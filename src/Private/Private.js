import React from "react";
import "./Private.css";
import Waiting from "../Waiting/Waiting";

class Private extends React.Component
{
    constructor(props)
    {
        super(props);
        this.redirect_to_auth = this.redirect_to_auth.bind(this);
    }
    redirect_to_auth()
    {
        this.props.history.push("/take/auth");
    }
    componentDidUpdate()
    {
        if(this.props.auth==="error") this.redirect_to_auth();
    }
    componentDidMount()
    {
        this.props.load_initial_form_data_send();
    }
    render()
    {
        if(this.props.auth==="error")
        {
            return <div></div>;
        }
        const name = this.props.name_input_form;
        const surname = this.props.surname_input_form;
        const e_mail = this.props.e_mail_input_form;
        const password = this.props.password_input_form;
        return (
            <div className="Private">
                {(this.props.waiting ? <Waiting /> : "")}
                <div className="private_header"> Личный кабинет </div>
                <div className="private_caption"> Имя </div>
                <input type="text" value={name} className="input_private" onChange={(e)=>this.props.on_change("name_input_form", e.target.value)} />
                <div className="private_caption"> Фамилия </div>
                <input type="text" value={surname} className="input_private" onChange={(e)=>this.props.on_change("surname_input_form", e.target.value)} />
                <div className="private_caption"> Электронная Почта </div>
                <input type="text" value={e_mail} className="input_private" onChange={(e)=>this.props.on_change("e_mail_input_form", e.target.value)} />
                <div className="private_caption"> Пароль </div>
                <input type="password" value={password} className="input_private" onChange={(e)=>this.props.on_change("password_input_form", e.target.value)} />
                <div className="private_btn input_private" onClick={()=>this.props.update_private_data_send(name, surname, e_mail, password)}> Сохранить Данные </div>
            </div>
        );
    }
};

export default Private;