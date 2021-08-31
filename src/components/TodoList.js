import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTodo, allClear, editTodo } from "../redux/todoSlice";
function TodoList() {
  const { list } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      {list.map((item) => {
        return (
          <article key={item.id}>
            <div>
              <p>{item.value}</p>
              <button onClick={() => dispatch(deleteTodo(item.id))}>
                delete
              </button>
              <button onClick={() => dispatch(editTodo(item))}>edit</button>
            </div>
          </article>
        );
      })}{" "}
      <button onClick={() => dispatch(allClear())}>clear All</button>
    </>
  );
}

export default TodoList;
