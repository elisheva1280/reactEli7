import { RECYCLE } from "../actionTipes";
import { REMFOREVER } from "../actionTipes";
import { REMOVETODO } from "../actionTipes";


const initRecycle = {
    Recycle: [],
};

export const Recycle=(state = initRecycle, action) => {
    switch (action.type) {
        case RECYCLE: // Use the string 'RECYCLE'
            return {
                ...state,
                Recycle: state.Recycle.filter(item => item.id !== action.payload),
            };
        case REMFOREVER: // Correctly use this case
            return {
                ...state,
                Recycle: state.Recycle.filter(item => item.id !== action.payload),
            };
        case REMOVETODO:
            return{...state,Recycle:[...state.Recycle,action.payload]};  
        default:
            return state;
    }
};

