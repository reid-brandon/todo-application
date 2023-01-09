import React from 'react';
import {Todo} from '../models/todo.model';
import UpdateTodo from './UpdateTodo';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import PendingIcon from '@mui/icons-material/Pending';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import './TodoItem.css';

interface TodoItemProps {
  todoItem: Todo;
  onEditModeTodo: (id: string) => void;
  onUpdateTodo: (id: string, text: string) => void;
  onCompleteTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
};

/**
 * 
 * @param props - object containing one Todo and methods to manipulate the Todo array
 * @returns Functional Component for one Todo Item
 */

const TodoItem: React.FC<TodoItemProps> = (props) => {
  if (props.todoItem.editing === true) {
    return (
      <UpdateTodo
        todo={props.todoItem}
        onUpdateTodo={props.onUpdateTodo}
      />
    );
  }

  return (
    <li className={props.todoItem.completed ? 'completed' : ''}>
      <span className={"todo-text-span"}>{props.todoItem.text}</span>
      {props.todoItem.completed && <span>Completed<span style={{fontSize: '20px'}}>&#127881;</span></span>}
      <Stack spacing={1} direction="row">
        <Tooltip title="Edit">
          <IconButton onClick={props.onEditModeTodo.bind(null, props.todoItem.id)} color="primary" >
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={props.todoItem.completed ? 'Mark as In progress' : 'Mark as Complete'}>
          <IconButton onClick={props.onCompleteTodo.bind(null, props.todoItem.id)} color="primary" >
            {(props.todoItem.completed) ? <PendingIcon /> : <DoneIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton onClick={props.onDeleteTodo.bind(null, props.todoItem.id)} color="primary" >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </li>
  );
}

export default TodoItem;