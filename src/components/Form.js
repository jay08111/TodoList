import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setName, addTodo } from "../redux/todoSlice";
import { Grid, TextField } from "@material-ui/core";
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
      <Grid container>
        <Grid item>
          <TextField
            id="standard-basic"
            type="text"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            label="리스트를 작성하세요"
            error={name.lenght === 0}
            style={{ width: "40vw", marginLeft: "3rem" }}
          />
        </Grid>
        <Grid item>
          {" "}
          <Button
            onClick={() => dispatch(addTodo())}
            style={{ marginLeft: "2rem", padding: "0.4rem" }}
            size="large"
            color="primary"
            variant="contained"
          >
            {isEditing ? "edit" : "submit"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Form;
