import React from "react";
import "./Body.scss"
import Todo from "./Todo";
import Work from "./Work";

const Body = () =>{
    return(
        <div className="Body">
            <Work />
            <Todo />
        </div>
    )
}

export default Body;