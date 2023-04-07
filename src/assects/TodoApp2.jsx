import React from 'react'
import "./style.css"

function TodoApp2() {
    const [inputValue, setInputValue] = useState("")
    const [tasks, setTasks] = useState([])
    const [editTask, setEditTask] = useState(0)

    function formSubmit(e){
        e.preventDefault()
    
        if (editTask) {
        const editTodo = tasks.find((task) => task.id === editTask);
        const updatedTask = tasks.map((t) =>
            t.id === editTodo.id
            ? (t = { id: t.id, inputValue })
            : { id: t.id, inputValue: t.inputValue }
        );
        setTasks(updatedTask);
        setEditTask(0);
        setInputValue("");
        return;
        }

    // const task = {
    //   id: Date.now(),
    //   taskName: inputValue,
    //   completed: false,
    // };
        if(inputValue !== ""){
        setTasks([{ id: Date.now(), inputValue }, ...tasks]);
        setInputValue("")
        }
  };

// useEffect(() => {
//   if(editTask){
//     setInputValue(editTask.taskName)
//   }else
//   {
//     setInputValue("")
//   }
// }, [setInputValue, editTask])

// const updateTask = (taskName, id, completed) => {
//   const newTask = tasks.map((task) => 
//     task.id === id ? {taskName, id, completed} : task
//   )
//   setTasks(newTask)
//   setEditTask("")
// }


// const handleComplete = (id) => {
//   setTasks(tasks.map((task) => {
//     if(task.id === id)
//     {
//       return {
//         ...tasks, completed: !task.completed
//       };
//     }return task;
//   }))
// }
    const handleDelete = (id) => {
        const delTask = tasks.filter((task) => task.id !== id)
        setTasks([...delTask])
    }

    const handleEdit = (id) => {
    const editTodo = tasks.find((task) => task.id === id)
    setInputValue(editTodo.inputValue)
    setEditTask(id)
    } 

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
                    <li key={task.id}>{task.inputValue}</li>
                    <div className="button">
                        <button onClick={() => handleEdit(task.id)}>Sửa</button>
                        <button onClick={() => handleDelete(task.id)}>Xóa</button>
                    </div>
                    </div>
                )
                })}
            </ul>
        </div>
    )
}

export default TodoApp2