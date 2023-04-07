import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import "./style.css"

function TodoApp() {

    //const storageTasks = JSON.parse(localStorage.getItem("tasks"))
    const [inputValue, setInputValue] = useState("")
    //const [tasks, setTasks] = useState(storageTasks ?? [])
    const [tasks, setTasks] = useState([])
    const [editTask, setEditTask] = useState(null)
 

    function formSubmit(e){
        e.preventDefault()
        if(!inputValue){
            alert("Missing new todo")
            return;
        }
        setTasks([...tasks, inputValue])
        
        // setTasks(prev => {
        //     const newTasks = [...prev, inputValue]
        //     const jsonTasks = JSON.stringify(newTasks)
        //     localStorage.setItem('tasks', jsonTasks)

        //     return newTasks
        // });
        setInputValue("")
    }

    const onInputChange = ((e) => {
        setInputValue(e.target.value)
    })
    
    const handleEdit = (taskName) => {
        // let emptyArray = [];
        // let isEmptyArr = Array.isArray(emptyArray) && emptyArray.length
        // const findTask = tasks.find((task) => task.id == id)
        // setEditTask(findTask)
    }
        
    // const handleDelete = (id) => {
    //     const removeTask = tasks.splice(id, 1)
    //     console.log("removeTask", removeTask)
    //     console.log("tasks", tasks)
    //     setTasks([...tasks])
    // }  

    const handleDelete = (taskName) => {
        const newTodoList = tasks.filter((task) => task !== taskName)
        setTasks([...newTodoList])
    }
    
    // function checkEmptyArr(){
    //     if(Array.isArray(tasks) && !tasks.length)
    //     {
    //         return true
    //     }
    // }

  return (
    <div className='container'>
        <h3>Todo App</h3>
        <form action="" className="forminput" onSubmit={formSubmit}>
            <input type="text" placeholder='Add your new todo'
            value={inputValue}
            onChange={onInputChange}/>
            <button>ADD</button>
        </form>
        <ul>
            {tasks.map((task, id)=>
            {
                return(
                    <div className='task'>
                        {/* {
                            task === "" ? */}
                            
                            <li key={id}>{task}</li>
                            {/* <li key={task.id}>
                                <input type="text" name="" id="" value={task} onChange={(e)=>e.preventDefault()} />
                            </li> */}
                        {/* :
                            <span><input type="text"
                            value={editTask}
                            onChange={(e) => setInputValue(e.target.value)}>{task}</input></span>
                        } */}
                        <div className="button">
                            <button onClick={() => handleEdit(task)}>Sửa</button>
                            <button onClick={() => handleDelete(task)}>Xóa</button>
                        </div>
                    </div>
                )
            })}
        </ul>
    </div>
  )
}

export default TodoApp