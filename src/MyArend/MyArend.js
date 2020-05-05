import React from "react";
import "./MyArend.css";
import ItemBox from "./ItemBox/ItemBox";
import Waiting from "../Waiting/Waiting";

class MyArend extends React.Component
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
        this.props.my_arend_load_items_send();
    }
    render()
    {
        if(this.props.auth==="error")
            return <div></div>;
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