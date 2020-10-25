import React from 'react';
import './App.css';


class Header extends React.Component {
  render() {
    return (
      <h1 className="header">Todo App</h1>
    );
  }
}


function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through": "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Completed</button>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  );
};


function AddTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add item and press enter"
        value={value}
        onChange={e => setValue(e.target.value)}
        />
    </form>
  );
};


function App() {

  const [todos, setTodos] = React.useState([
    {
      text: "Learn React",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Header />

      <div className="todo-list">

        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}

        <AddTodo addTodo={addTodo} />

      </div>
    </div>
  );
}

export default App;
