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
    "@media (max-width:769px)": {
      marginLeft: "2rem",
      width: "38vw",
    },
    "@media (max-width:281px)": {
      width: "35vw",
    },
  },
  editButtonStyle: {
    marginLeft: "2rem",
    padding: "0.4rem",
    textTransform: "capitalize",
    backgroundColor: "#2664ff",
    color: "#fff",
    "&:hover": {
      backgroundColor: "blue",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
      padding: "0.2rem",
    },
    "@media  (max-width:769px)": {
      marginLeft: "2rem",
    },
    "@media (max-width:542px)": {
      marginRight: "1.8rem",
    },
  },
  subMitButtonStyle: {
    marginLeft: "2rem",
    padding: "0.4rem",
    textTransform: "capitalize",
    backgroundColor: "#ff5a5f",
    color: "#fff",
    "&:hover": {
      backgroundColor: "red",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
      padding: "0.2rem",
    },
    "@media (max-width:769px)": {
      marginLeft: "2rem",
    },
    "@media (max-width:542px)": {
      marginRight: "1.8rem",
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
    "@media (max-width:281px)": {
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
            label="???????????? ???????????????"
            className={classes.textField}
            InputLabelProps={{ style: { fontSize: 12 } }}
          />
        </Grid>
        <Grid item>
          {" "}
          {isEditing ? (
            <Button
              className={classes.editButtonStyle}
              size="large"
              variant="contained"
              type="submit"
            >
              edit
            </Button>
          ) : (
            <Button
              className={classes.subMitButtonStyle}
              size="large"
              variant="contained"
              type="submit"
            >
              submit
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
}

export default Form;
