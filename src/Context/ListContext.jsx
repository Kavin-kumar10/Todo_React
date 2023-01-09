import React,{useState,createContext} from "react";

export const ListContext = createContext();

export const ListProvider = (props) =>{
    const [todos,setTodo] = useState([]);
    const LOCAL_STORAGE_KEY = "kavin_10";

    //Local Storage save
    const setTodosandSave = (newTask) =>{
        setTodo(newTask);
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newTask));
    }

    //Loading data from localhost
    const loadData = () =>{
        const datas = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(datas){
            setTodo(JSON.parse(datas));
        }
    }



    return(
        <div>
            <ListContext.Provider value={[todos,setTodo,setTodosandSave,loadData]}>
                {props.children}
            </ListContext.Provider>
        </div>
    )
}