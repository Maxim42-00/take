import React from "react";
import Home from "./Home/Home";
import "./App.css";
import Container from "./Container/Container";
import {BrowserRouter, Route} from "react-router-dom";

class App extends React.Component
{
    render()
    {
        return (
            <BrowserRouter>
                <div className="App"> 
                    <Route exact path="/take" render={()=><Home />} />
                    <Route path="/take/container" render={()=><Container state={this.props.state} />} />
                </div>
            </BrowserRouter>
        );
    }
};

export default App;