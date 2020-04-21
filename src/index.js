import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

let state = {
    menu_items: [
        {
            name: "Личный кабинет",
            src: "/container/private"
        },
        {
            name: "Моя Аренда",
            src: "/container/my_arend"
        },
        {
            name: "Действия",
            src: "/container/actions"
        },
        {
            name: "Выйти",
            src: ""
        }
    ]
};

ReactDOM.render(
    <App state={state}/>, 
    document.querySelector("#root")
);