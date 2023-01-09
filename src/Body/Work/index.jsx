import React, { useContext, useEffect, useState } from "react";
import "./Work.scss"
import { ListContext } from "../../Context/ListContext";
import {TiTick} from "react-icons/ti";
import {v4 as uuidv4} from "uuid";

const Work = () =>{
    const [todos,setTodo,setTodosandSave,loadData] = useContext(ListContext);
    const [input,setInput] = useState("");


//Load from LocalHost
useEffect(()=>{
    loadData();
},[]);


//submit handling

    const handleSubmit = (e) =>{
        e.preventDefault();
        setTodosandSave([...todos,{id:uuidv4(),title:input,completed:false,curDT : new Date().toLocaleString(),
        }]);
        setInput("");
    }
    return(
        <div className="Work">
            <form onSubmit={handleSubmit}>
                <input  type="text" placeholder="Add to my Work" value={input} onChange={(e)=>setInput(e.target.value)} required/>
                <button type="submit"><TiTick size={40}/></button>
            </form>
        </div>
    )
}

export default Work