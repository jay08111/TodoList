import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setName, addTodo } from "../redux/todoSlice";
import { Grid, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  textField: {
    width: "40vw",
    marginLeft: "3rem",
    marginBottom: "3rem",
  },
  buttonStyle: {
    marginLeft: "2rem",
    padding: "0.4rem",
  },
});
function Form() {
  const dispatch = useDispatch();
  const { name, isEditing } = useSelector((state) => state);
  const classes = useStyles();
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
            className={classes.textField}
          />
        </Grid>
        <Grid item>
          {" "}
          <Button
            onClick={() => dispatch(addTodo())}
            className={classes.buttonStyle}
            size="large"
            color="primary"
            variant="contained"
          >
            {isEditing ? "수정" : "작성"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Form;
