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
            // const arr=[];
            // for (let index = 0; index < state.ToDo.length; index++) {
            //     if(index!=action.payload.id)
            //         arr[index]=state.ToDo[index];   
            // }
            // return{...state,ToDo:arr};    
            return {
                ...state,
                ToDo: state.ToDo.filter(todo => todo.id !== action.payload), // Ensure this works correctly
            };
        default:
            return state;       
    };

};
