import "./style.css"
import React from 'react'
import { useState } from "react"

function TodoApp() {
    const [inputValue, setInputValue] = useState("")
    const [tasks, setTasks] = useState([])
    const [editTask, setEditTask] = useState(0)
    const [isComplete, setIsComplete] = useState([])

    function formSubmit(e){
        e.preventDefault()
        if (editTask) {
            const editTodo = tasks.find((task) => task.id === editTask);
            const updatedTask = tasks.map((t) =>
                t.id === editTodo.id ? (t = { id: t.id, inputValue }) : { id: t.id, inputValue: t.inputValue }
            );
            setTasks(updatedTask);
            setEditTask(0);
            setInputValue("");
            return;
            }
    
        if(inputValue !== ""){
        setTasks([{ id: Date.now(), inputValue }, ...tasks]);
        setInputValue("")
        }
    };

    const handleComplete = (id) => {
        let arr;
        if(isComplete.includes(id))
        {
            arr = isComplete.filter(e => e !== id)

        }else
        {
            arr = [...isComplete, id]
        }
        setIsComplete(arr)
    }


    const handleDelete = (id) => {
        const delTask = tasks.filter((task) => task.id !== id)
        setTasks([...delTask])
    }

    const handleEdit = (id) => {
        const editTodo = tasks.find((task) => task.id === id)
        console.log(editTodo)
        setInputValue(editTodo.inputValue)
        setEditTask(id)
    } 

    // const handleOnchangeEditTask = (event) => { 
    // let editTaskCopy = {...editTask};
    // editTaskCopy.inputValue = event.target.value;
    // setEditTask(editTaskCopy) 
    // }

    return (
        <div className='container'>
        <h3>Todo App</h3>
            <form action="" className="forminput" onSubmit={formSubmit}>
                <input type="text" placeholder='Add your new todo'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                <button>{editTask ? "Edit" : "Go"}</button>
            </form>
            <ul>
                {tasks.map((task) =>{
                return (
                    <div className="task">
                        <li key={task.id}>
                            {isComplete.includes(task.id) ? 
                                <>
                                    <s>{task.inputValue}</s>
                                    <div className="button">
                                        <button onClick={() => handleEdit(task.id)}>Edit</button>
                                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                                        <button onClick={() => handleComplete(task.id)}>Finish</button>
                                    </div>
                                </>
                            : (
                                <>
                                    {task.inputValue}
                                    <div className="button">
                                        <button onClick={() => handleEdit(task.id)}>Edit</button>
                                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                                        <button onClick={() => handleComplete(task.id)}>Finish</button>
                                    </div>
                                </>
                            )}
                        </li>
                    </div>
                )
                })}
            </ul>
    </div>
    )
}

export default TodoApp