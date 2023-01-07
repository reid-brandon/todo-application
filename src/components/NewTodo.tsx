import React, {useRef} from 'react';
import './NewTodo.css';

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
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
}

export default NewTodo;