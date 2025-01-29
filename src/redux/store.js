import {createStore} from 'redux';
import { removetodo } from './actions';
import { addtodo } from './actions';
import { Provider } from 'react-redux';
import { ToDo } from './reducers/ToDo';

export const store=createStore(ToDo);