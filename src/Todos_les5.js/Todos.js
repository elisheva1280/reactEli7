import {useDispatch, useSelector } from "react-redux";
import { ADDTODO,REMOVETODO } from "../redux/actionTipes";
import { addToDo, removeToDo } from "../redux/actions";
import { recycle } from "../redux/actions";
import './style.css'

export default function Todoss(){
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.ToDo.ToDo);
    const rec = useSelector((state) => state.Recycle.Recycle);
   

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
   
 
    const handleRemoveTask = (todo) => {
        // const taskId = document.querySelector('[name="num"]').value; // Get id to remove
        // console.log("Removing task with ID:", taskId);
        // if (!isNaN(taskId)) {
            // dispatch
            dispatch(removeToDo(todo)); // Dispatch the remove action
        // }
    };

    return (
        <>
        <h1>my list📃📃📃</h1>

        <input type="text" name="taskName" placeholder="which task🤔"/>
        <input type="number" name="taskId" placeholder="id of task"/>
        <input type="time" name="taskTime"/>

        <button onClick={handleAddTask} type="button">Add new Task</button>
         
        {/* <input type="number" name="num" placeholder="id of task to remove💘"/> */}


    
          {todos.map((s, index) => (
              <>
              <div key={s.id}>the id: {s.id} : the name of task: {s.Name}🐥 
                 in ocklock {s.Time}🐧      
                 </div>
                <button onClick={handleRemoveTask(s)} type="button">Remove Task</button>
                 </>
                 
         ))}

       
        </>
    );
};