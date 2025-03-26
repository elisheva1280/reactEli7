import { REMOVETODO,ADDTODO } from "../actionTipes";

const initTodo={
    ToDo:[],
    // ToDo[0]="check",
};

export const ToDo=(state=initTodo,action)=>{
    switch(action.type){
        case ADDTODO:
            return{...state,ToDo:[...state.ToDo,action.payload]};          
        case REMOVETODO: 
            return {
                ...state,
                ToDo: state.ToDo.filter(todo1 => todo1 !== action.payload), // Ensure this works correctly
            };
        default:
            return state;       
    };

};
