
export const ADDTODO = 'ADDTODO';
export const REMOVETODO = 'REMOVETODO';
export const RECYCLE='RECYCLE';
export const REMFOREVER='REMFOREVER';

// Action creator for adding a todo
export const addToDo = (todo) => ({
    type: ADDTODO,
    payload: todo,
});

// Action creator for removing a todo
export const removeToDo = (todo) => ({
    type: REMOVETODO,
    payload: todo,
});

export const recycle=(todo)=>({
    type:RECYCLE,
    payload:todo,
});

export const remforever=(todo)=>({
    type:REMFOREVER,
    payload:todo,
})