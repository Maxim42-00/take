import React from "react";
import Home from "./Home/Home";
import "./App.css";
import Container from "./Container/Container";
import {BrowserRouter, Route} from "react-router-dom";
import ForumContainer from "./Forum/ForumContainer";

import PrivateContainer from "./Private/PrivateContainer";
import MyArendContainer from "./MyArend/MyArendContainer";
import ActionsContainer from "./Actions/ActionsContainer";
import NewAccountContainer from "./NewAccount/NewAccountContainer";
import AuthContainer from "./NewAccount/AuthContainer";

class App extends React.Component
{
    render()
    {
        return (
            <BrowserRouter>
                <div className="App"> 
                    <Route exact path="/take" render={()=><Home />} />
                    <Route path={"/take/auth"} render={()=><AuthContainer /> } />
                    <Route path={"/take/new_account"} render={()=><NewAccountContainer /> } />
                    <Route path={"/take/private"} render={()=><Container> <PrivateContainer /> </Container> } />
                    <Route path={"/take/my_arend"} render={()=> <Container> <MyArendContainer /> </Container>} />
                    <Route path={"/take/actions"} render={()=> <Container> <ActionsContainer /> </Container>} />
                    <Route path={"/take/forum"} render={()=> <Container> <ForumContainer /> </Container>} />
                </div>
            </BrowserRouter>
        );
    }
};

export default App;