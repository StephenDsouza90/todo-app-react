import React from 'react';
import './App.css';


function Todo({ todo, index, completeTodo, removeTodo }) {
  {/* Todo is a component that displays the items */}
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through": "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
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
      <div className="todo-list">

        {/* every item in the map() is mapped to an index */}
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
