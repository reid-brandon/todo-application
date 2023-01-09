import React, {useRef} from 'react';
import './NewTodo.css';
import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

/**
 * 
 * @param props object containing a method for creating a Todo
 * @returns Functional Component that displays the form for creating a Todo
 */

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    // prevent browser handling the submit event
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    if (enteredText !== '') {
      props.onAddTodo(enteredText);

      // reset the text in the new todo field
      textInputRef.current!.value = '';
    }    
  };

  return (
    <form onSubmit={todoSubmitHandler} >
      <Card className="form-control">
        <div>
          <label htmlFor="todo-text"></label>
          <input type="text" className="input-padding-new-todo" id="todo-text" ref={textInputRef} placeholder="Add a new task" />
          <Tooltip title="Add To Do to List">
            <IconButton type="submit" color="primary">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
      </Card>
    </form>
  );
}

export default NewTodo;