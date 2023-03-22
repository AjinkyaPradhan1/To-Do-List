import React from "react";
import {v4 as uuidv4} from "uuid";
import { useEffect } from "react";

const Form = ({input,setInput,todos,setTodos,editTodo,setEditTodo})=>{

    const updateTodo = (title,id,completed)=>{
        
            const newTodo = todos.map((todo)=>{
                return(todo.id === id ? {title,id,completed}:todo)
            });
            setTodos(newTodo);
            setEditTodo("");
        
    }
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("");
        }
    },[setInput,editTodo]);

    const onFormSubmit = (e)=>{
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos, { id:uuidv4() ,title:input,completed:false}]);
            setInput("")
        }else{
            updateTodo(input,editTodo.id,editTodo.completed);
        }
        
    }

    return(
        <form action="" onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter ToDo Task...." className="task-input"
                value={input}
                required
                onChange={(e)=>setInput(e.target.value)}
                autoComplete="off"
                
            />
            <button className="button-add" type="submit">
                {editTodo ? "OK":"Add"}
            </button>
        </form>
    );
}

export default Form;