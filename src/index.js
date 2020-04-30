import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import menu_items_reducer from "./reducers/menu_items_reducer";
import new_account_reducer from "./reducers/new_account_reducer";
import actions_reducer from "./reducers/actions_reducer";
import my_arend_reducer from "./reducers/my_arend_reducer";
import forum_reducer from "./reducers/forum_reducer";

let reducers = combineReducers({
    actions: actions_reducer,
    new_account: new_account_reducer,
    menu: menu_items_reducer,
    my_arend: my_arend_reducer,
    forum: forum_reducer
});

let store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector("#root")
);