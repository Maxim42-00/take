import React from "react";
import "./MyArend.css";
import ItemBox from "./ItemBox/ItemBox";
import Waiting from "../Waiting/Waiting";

class MyArend extends React.Component
{
    componentDidMount()
    {
        document.addEventListener("my_arend_loaded", (e)=>this.props.my_arend_load_items_received(e.data));
        this.props.my_arend_load_items_send();
    }
    componentWillUnmount()
    {
        document.removeEventListener("my_arend_loaded", (e)=>this.props.my_arend_load_items_received(e.data));
    }
    render()
    {
        if(!this.props.my_arend_page_auth)
            this.props.history.push("/take/auth");
        let my_arend_items = this.props.my_arend_items.map((cur, i)=><ItemBox img={cur.img} start={cur.start} end={cur.end} id_num={cur.id} />);
        return (
            <div className="MyArend">
                {my_arend_items}
                {(this.props.waiting ? <Waiting /> : "")}
            </div>
        );
    }
};

export default MyArend;