import React, { useState } from "react";
import Todo from "./Todo";

export default function Todos() {
    const [todos,setTodos] = useState(["walk", "swim", "run"])
    
    console.log(todos)
    return (
        
            todos.map(todo => {
                return <Todo key={todo} todo={todo}/>
            })
        
    )
}
