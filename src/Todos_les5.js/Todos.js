// import { Reducer } from "redux";
// import { ToDo } from "../redux/reducers/ToDo";
// import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { ADDTODO,REMOVETODO } from "../redux/actionTipes";
import { addToDo, removeToDo } from "../redux/actions";
import './style.css'
// import './style.css'
// import Show from "./show";
// import { ADDTODO } from "../redux/actionTipes";

export default function Todoss(){
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.ToDo);

    

    const handleAddTask = () => {
        
        const taskName = document.querySelector('[name="taskName"]').value; 
        const taskId = document.querySelector('[name="taskId"]').value; 
        const taskTime = document.querySelector('[name="taskTime"]').value;

        if (taskName && taskId && taskTime) {
       
            // dispatch(addToDo({ Name: taskName, id: taskId,Time: taskTime }));
            dispatch(addToDo({ id: Number(taskId), Name: taskName, Time: taskTime }));
            document.querySelector('[name="taskName"]').value = ""; 
            document.querySelector('[name="taskId"]').value = ""; 
            document.querySelector('[name="taskTime"]').value = ""; 
           
        }
        
    };

    
    const handleRemoveTask = () => {
        const taskId = document.querySelector('[name="num"]').value; // Get id to remove
        console.log("Removing task with ID:", taskId);
        if (!isNaN(taskId)) {
            dispatch(removeToDo(Number(taskId))); // Dispatch the remove action
        }
    };

    return (
        <>
        <h1>my list📃📃📃</h1>

        <input type="text" name="taskName" placeholder="name of task🤔"/>
        <input type="number" name="taskId" placeholder="id of task"/>
        <input type="time" name="taskTime"/>



        {/* <button onClick={addToDo(taskName,taskDate,taskTime)} type="button">add task</button>  */}

        <button onClick={handleAddTask} type="button">Add new Task</button>
         
        <input type="number" name="num" placeholder="id of task to remove💘"/>

        <button onClick={handleRemoveTask} type="button">Remove Task</button>
        {/* <button onClick={() => dispatch(handleRemoveTask(todos.id))} type="button">remove task</button> */}
        {/* {REMOVETODO(num)} */}

        <div>
          {todos.map((s, index) => (
              <div key={s.id}>id: {s.id} : {s.Name} with id {s.taskId} -added at {s.Time}</div>
        // <div key={s.id}>{s.name}</div>
         ))}

        </div>
        </>
    );
};