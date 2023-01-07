import React from 'react';
import {Todo} from '../models/todo.model';
import UpdateTodo from './UpdateTodo';


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
    <li>
      <span>{props.todoItem.text}</span>
      {props.todoItem.completed && <span>COMPLETED</span>}
      <button onClick={props.onEditModeTodo.bind(null, props.todoItem.id)}>Edit</button>
      <button onClick={props.onCompleteTodo.bind(null, props.todoItem.id)}>
        {props.todoItem.completed ? 'In progress' : 'Complete'}
      </button>
      <button onClick={props.onDeleteTodo.bind(null, props.todoItem.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;