import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setName, addTodo } from "../redux/todoSlice";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
function Form() {
  const dispatch = useDispatch();
  const { name, isEditing } = useSelector((state) => state);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <TextField
          id="standard-basic"
          type="text"
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
          label="리스트를 작성하세요"
          style={{ width: "40vw", marginLeft: "3rem" }}
        />
        <Button
          onClick={() => dispatch(addTodo())}
          style={{ marginLeft: "5rem", padding: "0.4rem" }}
          size="large"
          color="primary"
          variant="contained"
        >
          {isEditing ? "edit" : "submit"}
        </Button>
      </div>
    </form>
  );
}

export default Form;
