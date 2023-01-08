import React,{useState,createContext} from "react";

export const ListContext = createContext();

export const ListProvider = (props) =>{
    const [todos,setTodo] = useState([]);
    return(
        <div>
            <ListContext.Provider value={[todos,setTodo]}>
                {props.children}
            </ListContext.Provider>
        </div>
    )
}