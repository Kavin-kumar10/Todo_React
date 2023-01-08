import React, { useContext, useState } from "react";
import "./Work.scss"
import { ListContext } from "../../Context/ListContext";
import {v4 as uuidv4} from "uuid";

const Work = () =>{
    const [todos,setTodo] = useContext(ListContext);
    const [input,setInput] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        setTodo([...todos,{id:uuidv4(),title:input,completed:false,curDT : new Date().toLocaleString(),
        }]);
        setInput("");
    }
    return(
        <div className="Work">
            <form onSubmit={handleSubmit}>
                <input  type="text" placeholder="Add to my Work" value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button type="submit">+</button>
            </form>
        </div>
    )
}

export default Work