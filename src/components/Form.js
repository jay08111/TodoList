import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setName, addTodo } from "../redux/todoSlice";
import { Grid, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "40vw",
    marginLeft: "3rem",
    marginBottom: "3rem",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      width: "39vw",
      marginLeft: "3px",
    },
    "@media (min-width:280px) and (max-width:281px)": {
      width: "35vw",
    },
    "@media (min-width:640px) and (max-width:769px)": {
      marginLeft: "2rem",
      width: "38vw",
    },
  },
  buttonStyle: {
    marginLeft: "2rem",
    padding: "0.4rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
      padding: "0.2rem",
    },
    "@media (min-width:540px) and (max-width:542px)": {
      marginRight: "1.8rem",
    },
    "@media (min-width:640px) and (max-width:769px)": {
      marginLeft: "2rem",
    },
  },
  grid: {
    direction: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      minWidth: "62vw",
    },
  },
  inputLabelPropStyle: {
    fontSize: 10,
    "@media (min-width:280px) and (max-width:281px)": {
      fontSize: 10,
    },
  },
}));
function Form() {
  const dispatch = useDispatch();
  const { name, isEditing } = useSelector((state) => state);
  const classes = useStyles();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo());
      }}
    >
      <Grid container className={classes.grid}>
        <Grid item xs={3}>
          <TextField
            id="standard-basic"
            type="text"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            label="리스트를 작성하세요"
            className={classes.textField}
            InputLabelProps={{ style: { fontSize: 12 } }}
          />
        </Grid>
        <Grid item>
          {" "}
          <Button
            className={classes.buttonStyle}
            size="large"
            color="primary"
            variant="contained"
            type="submit"
          >
            {isEditing ? "수정" : "작성"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Form;
