import React from "react";
import "./Actions.css";
import AddWindow from "./AddWindow";
import Waiting from "../Waiting/Waiting";

class Actions extends React.Component
{
    componentDidMount()
    {
        document.addEventListener("actions_items_loaded", (e)=>this.props.items_received(e.data));
        this.props.load_items();
        window.addEventListener("add_new_arend", (e)=>this.props.add_window_ok_received(e.data));
    }
    componentWillUnmount()
    {
        document.removeEventListener("actions_items_loaded", (e)=>this.props.items_received(e.data));
        window.removeEventListener("add_new_arend", (e)=>this.props.add_window_ok_receive(e.data));
    }
    render()
    {
        if(!this.props.actions_page_auth)
            this.props.history.push("/take/auth");
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