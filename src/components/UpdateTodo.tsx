import React, {useRef} from 'react';
import {Todo} from '../models/todo.model';
import './NewTodo.css';

interface UpdateTodoProps {
  todo: Todo;
  onUpdateTodo: (todoId: string, todoText: string) => void;
}

/**
 * 
 * @param props - object containing a Todo that is being edited and the function to edit it
 * @returns - Functional component that allows updating a Todo
 */

const UpdateTodo: React.FC<UpdateTodoProps> = (props) => {
  const updateTextInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    // prevent browser handling the submit event
    event.preventDefault();

    const enteredText = updateTextInputRef.current!.value;
    if (enteredText !== '') {
      props.onUpdateTodo(props.todo.id, enteredText);
    } else {
      todoCancelHandler();
    }
    
  };

  const todoCancelHandler = () => {
    props.onUpdateTodo(props.todo.id, props.todo.text);
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="update-todo-text">Editing Todo</label>
        <input type="text" id="update-todo-text" defaultValue={props.todo.text} ref={updateTextInputRef} />
      </div>
      <button type="submit">Update Todo</button>
      <button onClick={todoCancelHandler}>Cancel</button>
    </form>
  );
}

export default UpdateTodo;