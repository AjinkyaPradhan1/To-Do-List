import React from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ToDoListContent = ({todos,setTodos,setEditTodo})=>{

    const handleComplete = (todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id){
                    return {...item,completed:!item.completed}
                }
                return item;
            })
        )
        toast.success('Task Completed Successfully', {
            position: toast.POSITION.TOP_CENTER
            
        });
    }

    const handleDelete = ({id})=>{
        toast.error("Your Task has been deleted Successfully",{
            position: toast.POSITION.TOP_RIGHT
        })
        setTodos(todos.filter((todo)=>todo.id!==id));
        
    };

    const handleEdit = ({id})=>{
        toast.warning("Edit content from the inputBox",{
            position: toast.POSITION.TOP_LEFT
        })
        const findTodo = todos.find((todo)=>todo.id===id);
        setEditTodo(findTodo);
        
    }

    return(
        <div>
            {
                todos.map((todo)=>{
                    return(
                        <li className="list-item" key={todo.id}>

                            <input 
                            type="text"
                            value={todo.title}
                            className={`list ${todo.completed ? "complete" :""}`}
                            onChange={(e)=>e.preventDefault}/>


                            <div>
                                <button className="button-complete task-button" onClick={()=>handleComplete(todo)}>
                                    <i className="fa fa-check-circle"></i>
                                </button>

                                <button className="button-edit task-button" onClick={()=>handleEdit(todo)}>
                                    <i className="fa fa-edit"></i>
                                </button>

                                <button className="button-delete task-button" onClick={()=>handleDelete(todo)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>

                        </li>
                    
                    );
                })
            }
            <ToastContainer/>
        </div>
    );
}

export default ToDoListContent;