import React, { useContext ,useEffect} from "react";
import { ListContext } from "../../Context/ListContext";
import {MdDeleteOutline} from 'react-icons/md'
import "./Todo.scss"


const Todo = () =>{
    const [todos,setTodo,setTodosandSave,loadData] = useContext(ListContext);
    const handleDelete = (id) =>{
        setTodosandSave(todos.filter((todo)=>todo.id != id))
    }
    // const handleComplete = (todo) =>{
    //     setTodo(
    //         todos.map((item)=>{
    //             if(item.id == todo.id){
    //                 return {...item,completed:!item.completed}
    //             }
    //         })
    //     )
    // }

    console.log(todos);
    return(
        <div className="Todo">
            {
                (todos.length == 0)?
                <h2 style={{color:"black"}}>- No Data - </h2>
                :
                todos?.map((todo,index)=>{
                    return(
                        <div className="todos" key={index}>
                            <div className="todos__details">
                                <h2>{todo.title}</h2>
                                <p>{todo.curDT}</p>
                            </div>
                            {/* {
                                todo.completed?
                                <div className="todos__details" onClick={()=>handleComplete(todo)}>
                                    <h2><s>{todo.title}</s></h2>
                                    <p><s>{todo.curDT}</s></p>
                                </div>
                                :
                                <div className="todos__details" onClick={()=>handleComplete(todo)}>
                                    <h2>{todo.title}</h2>
                                    <p>{todo.curDT}</p>
                                </div>
                            } */}
                            <div className="todos__del" onClick={()=>handleDelete(todo.id)}>
                                <MdDeleteOutline color="red" size={30}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Todo