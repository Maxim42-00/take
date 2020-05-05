import React from "react";
import "./Actions.css";
import AddWindow from "./AddWindow";
import Waiting from "../Waiting/Waiting";

class Actions extends React.Component
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
        this.props.load_items();
    }
    render()
    {
        if(this.props.auth==="error")
        {
            return <div></div>;
        }
        let items = this.props.items.map((cur, i) => <div className="img_bgr"><div className="img_hover" onClick={()=>this.props.display_add_window(cur.img)}></div> <img src={cur.img} className="actions_img" /> </div>);
        return (
            <div className="Actions">
                {this.props.add_window ? <AddWindow img={this.props.add_window_img} add_window_cancel={this.props.add_window_cancel} add_window_ok_send={this.props.add_window_ok_send} /> : ""}
                {(this.props.waiting ? <Waiting /> : "")}
                {items}
            </div>
        );
    }
};

export default Actions;