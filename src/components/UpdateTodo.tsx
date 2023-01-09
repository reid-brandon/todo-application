import React, {useRef} from 'react';
import {Todo} from '../models/todo.model';
import './NewTodo.css';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

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
    <Card>
      <form onSubmit={todoSubmitHandler}>
        <div className="form-control-update">
          <label htmlFor="update-todo-text">Editing the Task</label>
          <input type="text" id="update-todo-text" className="input-padding-update-todo" defaultValue={props.todo.text} ref={updateTextInputRef} />
        </div>
        <Stack spacing={1} direction="row" justifyContent="right">
          <Tooltip title="Update To Do">
            <Button variant="contained" type="submit">Update</Button>
          </Tooltip>
          <Tooltip title="Cancel">
            <Button variant="outlined" onClick={todoCancelHandler}>Cancel</Button>
          </Tooltip>
        </Stack>
      </form>
    </Card>
  );
}

export default UpdateTodo;