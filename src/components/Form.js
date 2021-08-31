import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setName, addTodo } from "../redux/todoSlice";
function Form() {
  const dispatch = useDispatch();
  const { name, isEditing } = useSelector((state) => state);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo());
      }}
    >
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
        />
        <button>{isEditing ? "edit" : "submit"}</button>
      </div>
    </form>
  );
}

export default Form;
