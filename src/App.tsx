import React, {useEffect, useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import './App.css';
import {Todo} from './models/todo.model';
import Typography from '@mui/material/Typography';

/**
 * 
 * @returns - Main Functional Component (App) that displays the main application (NewTodo and TodoList)
 */

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const todosStorage:Todo[] = JSON.parse(window.localStorage.getItem('todos')!);

    if (todosStorage && todosStorage instanceof Array && todosStorage.length > 0) {
      setTodos(todosStorage);
    }
    
  }, []);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  

  const todoAddHandler = (text: string) => {
    // pass the function to the setTodos state function so that always have the most updated items
    setTodos(prevTodos => [
      ...prevTodos,
      {id: Math.random().toString(), text: text, completed: false, editing: false},
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }

  const todoUpdateHandler = (todoId: string, newTodoText: string) => {
    setTodos(prevTodos => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return {id: todoId, text: newTodoText, completed: todo.completed, editing: false};
        } else {
          return todo;
        }
      })
    })
  };

  const todoEditModeHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return {id: todoId, text: todo.text, completed: todo.completed, editing: true};
        } else {
          return todo;
        }
      })
    })
  }

  const todoCompleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return {id: todoId, text: todo.text, completed: !todo.completed, editing: false};
        } else {
          return todo;
        }
      })
    })
  };

  return (
    <div className="App">
      <Typography variant="h5"><strong>Simple To Do</strong></Typography>
      <NewTodo onAddTodo={todoAddHandler} />
      <Typography variant="h6"><strong>Current To Do List</strong></Typography>
      <TodoList
        items={todos}
        onUpdateTodo={todoUpdateHandler}
        onCompleteTodo={todoCompleteHandler}
        onDeleteTodo={todoDeleteHandler}
        onEditModeTodo={todoEditModeHandler}
      />
    </div>
  );
}

export default App;
