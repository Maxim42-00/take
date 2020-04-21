import React from "react";
import "./Home.css";
import take from "./take.jpg";

class Home extends React.Component
{
    render()
    {
        return (
            <div className="Home">
                <div>
                    <div> <img src={take} /> </div>
                    <div className="btn_panel">
                        <div className="btn"> Вход </div>
                        <div className="btn"> Регистрация </div>
                    </div>
                    
                </div>
            </div>
        );
    }
};

export default Home;