import React, { useState } from 'react'
 import { v4 } from 'uuid';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import style from "./todoinput.module.css"
import CompletedTask from './CompletedTask';

const Todo = () => {
    const [todo,setTodo] = useState([]);
    const [completedTask,setCompletedTask] = useState([])
   
  let addcompletedTodo =(Value)=>{
   let prevValue= completedTask.filter((el)=>(el.value===Value.value
   ))
  
   if(prevValue.length>0) {
      return
    }else{
      
      setCompletedTask(
        [
         ...completedTask,Value
        ]
      )
    }
    
  }
    let addTodo=(newTodo)=>{
       setTodo([
        ...todo,{
            id:v4(),
            value:newTodo,
            isCompleted:false
        }
       ])
      
    }
    let deleteTodo=(value)=>{
        setTodo(todo.filter((todo)=>todo.id!==value))
    }
    let deleteCompletedTodo=(id)=>{
     // console.log(id)
      setCompletedTask(completedTask.filter((task)=>(task.id!==id)))
      // completedTask.filter((task)=>(console.log(task.value)))
  }
  return (
      
    <div className={style.outer_div}>
        <h1 >Todo</h1>
          
        <TodoInput  addTodo={addTodo} />
        <TodoList todo={todo} deleteTodo={deleteTodo} addcompletedTodo={addcompletedTodo}/>
        <CompletedTask completedTask={completedTask} deleteCompletedTodo={deleteCompletedTodo}/>
    </div>
  )
}

export default Todo