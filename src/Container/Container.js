import React from "react";
import "./Container.css";
import Menu from "./Menu/Menu";
import {Route} from "react-router-dom";
import Private from "./Private/Private";
import MyArend from "./MyArend/MyArend";
import Actions from "./Actions/Actions";

class Container extends React.Component
{
    render()
    {
        return (
            <div className="Container">
                <Menu state={this.props.state} />
                <div className="container_main">
                    <Route path={"/take/container/private"} render={()=><Private />} />
                    <Route path={"/take/container/my_arend"} render={()=><MyArend />} />
                    <Route path={"/take/container/actions"} render={()=><Actions />} />
                </div>
            </div>
        );
    }
};

export default Container;