import "./style.css"
import React from 'react'
import { useState } from "react"

function TodoApp3() {
    const [inputValue, setInputValue] = useState("")
    const [tasks, setTasks] = useState([])
    const [editTask, setEditTask] = useState({})

    function formSubmit(e){
        e.preventDefault()
    
        if(inputValue !== ""){
        setTasks([{ id: Date.now(), inputValue }, ...tasks]);
        setInputValue("")
        }
    };


    const handleDelete = (id) => {
        const delTask = tasks.filter((task) => task.id !== id)
        setTasks([...delTask])
    }

    const handleEdit = (task) => {
    let isEmptyObj = Object.keys(editTask).length === 0; //7 

    //save
    if (isEmptyObj === false && editTask.id === task.id) { // isEmptyObj === false -> editTask khác rỗng -> đang tồn tại 1 cái editTask

        let listTasksCopy = [...tasks];

        let objIndex = listTasksCopy.findIndex((t => t.id === task.id)); //8 //

        listTasksCopy[objIndex].inputValue = editTask.inputValue;

        setTasks(listTasksCopy)
        setEditTask({}) //9 // từ save chuyển qua trạng thái edit
        return;
    }

    //edit
    setEditTask(task)// khi bấm nút Edit editTask = task //1
    } 

    const handleOnchangeEditTask = (event) => { //5 //chỉnh sửa được trên thanh input của li khi nhất nút Edit
    let editTaskCopy = {...editTask};
    // console.log(...editTask)
    editTaskCopy.inputValue = event.target.value;
    setEditTask(editTaskCopy) 
    }
    return (
        <div className='container'>
        <h3>Todo App</h3>
        <form action="" className="forminput" onSubmit={formSubmit}>
            <input type="text" placeholder='Add your new todo'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button>{editTask ? "Add" : "Go"}</button>
        </form>
        <ul>
            {tasks && tasks.length > 0 &&
                tasks.map((task) =>{
                    return (
                        <div className="task" key={task.id}>
                            {(Object.keys(editTask).length === 0) ? //editTask rỗng là ta chưa edit nó //2
                                <li>{task.inputValue}</li>// in ra bình thường
                                :
                                    <>
                                        {editTask.id === task.id ? //3
                                            <li>
                                                <input
                                                    value={editTask.inputValue}
                                                    onChange={(event) => handleOnchangeEditTask(event)}
                                                />
                                            </li>
                                            :
                                                <li>
                                                    {task.inputValue //4
                                                    } 
                                                </li>
                                        }
                                    </>
                            }
                                <div className="button">
                                    <button className="edit" onClick={() => handleEdit(task)}>
                                        {(Object.keys(editTask).length !== 0)  && editTask.id === task.id ? //6
                                            'Save' : 'Edit' }
                                    </button>
                                    
                                    <button className="delete" onClick={() => handleDelete(task.id)} >Delete</button>
                                </div>
                        </div>
                    )
                })
            }
        </ul>
    </div>
    )
}

export default TodoApp3