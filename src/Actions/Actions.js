import React from "react";
import "./Actions.css";

class Actions extends React.Component
{
    componentDidMount()
    {
        document.addEventListener("actions_items_loaded", (e)=>this.props.items_received(e.data));
        this.props.load_items();
    }
    render()
    {
        let items = this.props.items.map((cur, i) => <div> <img src={cur.img} className="actions_img" /> </div>);
        return (
            <div className="Actions">
                {items}
            </div>
        );
    }
};

export default Actions;