//import logo from "./logo.svg";
import "./App.css";

import TodoInput from "./components/TodoInput";
//import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App m-3">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
