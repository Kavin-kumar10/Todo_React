import React, { useContext } from "react";
import "./Header.scss";
import { ListContext } from "../Context/ListContext";

const Header = () =>{
    const [todos] = useContext(ListContext);
    return(
        <div className="Header">
            <div className="box">
                <h2>Todo App</h2>
                <h2></h2>
            </div>
            <div className="count">
                <h3>Todos count : <span>{todos.length}</span></h3>
            </div>
        </div>
    )
}

export default Header