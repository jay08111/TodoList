import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
function App() {
  const { list } = useSelector((state) => state);
  return (
    <main>
      <div>
        <h1>what are your plans for today?</h1>
        <Form />
        {list.length > 0 && <TodoList />}
      </div>
    </main>
  );
}

export default App;
