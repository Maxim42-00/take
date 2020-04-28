import React from "react";
import "./Home.css";
import take from "./take.jpg";
import {NavLink} from "react-router-dom";

class Home extends React.Component
{
    render()
    {
        return (
            <div className="Home">
                <div>
                    <div className="div_with_img"> <img className="home_img" src={take} /> </div>
                    <div className="btn_panel">
                        <NavLink to="/take/private" className="nav_link"> <div className="btn"> Вход </div> </NavLink>
                        <NavLink to="/take/new_account" className="nav_link"> <div className="btn"> Регистрация </div> </NavLink>
                    </div>
                    
                </div>
            </div>
        );
    }
};

export default Home;