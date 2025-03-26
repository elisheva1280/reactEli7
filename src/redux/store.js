import {combineReducers, createStore} from 'redux';
import { removetodo } from './actions';
import { addtodo } from './actions';
import { Provider } from 'react-redux';
import { ToDo } from './reducers/ToDo';
import { recycle } from './actions';
import { remforever } from './actions';

const rootReducer=combineReducers({
    ToDo:ToDo,
    Recycle:recycle,
})


export const store=createStore(rootReducer);