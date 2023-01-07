import React from 'react';
import './TodoList.css';
import {Todo} from '../models/todo.model';
import TodoItem from './TodoItem';

interface TodoListProps {
  items: Todo[];
  onEditModeTodo: (id: string) => void;
  onUpdateTodo: (id: string, text: string) => void;
  onCompleteTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
};

/**
 * TodoList component for listing out the Todos that are passed to it
 * @param props - object containing an array of Todo's and methods to manipulate them 
 * @returns Functional Component that lists the Todos
 */

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map(todo => (
        <TodoItem
          key={todo.id}
          todoItem={todo}
          onEditModeTodo={props.onEditModeTodo}
          onUpdateTodo={props.onUpdateTodo}
          onCompleteTodo={props.onCompleteTodo}
          onDeleteTodo={props.onDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;