// import { ADDTODO } from "./actionTipes";
// import { REMOVETODO } from "./actionTipes";

// export const addtodo=(task)=>({
//     type:ADDTODO,
//     payload: {task},
// });
// export const removetodo=(taskId)=>({
//     type:REMOVETODO,
//     payload: {id:taskId},
// });
export const ADDTODO = 'ADDTODO';
export const REMOVETODO = 'REMOVETODO';

// Action creator for adding a todo
export const addToDo = (todo) => ({
    type: ADDTODO,
    payload: todo,
});

// Action creator for removing a todo
export const removeToDo = (id) => ({
    type: REMOVETODO,
    payload: id,
});