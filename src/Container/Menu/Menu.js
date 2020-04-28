import React from "react";
import "./Menu.css";
import take from "./../../Home/take.jpg";
import {NavLink} from "react-router-dom";

class Menu extends React.Component
{
    render()
    {
        let menu_items = this.props.menu_items.map((cur, i)=>
            <div><NavLink activeClassName="menu_active_link" className="menu_nav_link" exact to={"/take"+cur.src}> <span className="menu_item"> {cur.name} </span> </NavLink></div>);
        return (
            <div className="Menu">
                <img src={take} className="take_img" />
                <div className="menu_panel">
                    {menu_items}
                </div>
            </div>
        );
    }
};

export default Menu;