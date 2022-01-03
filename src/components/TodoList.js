import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTodo, allClear, editTodo } from "../redux/todoSlice";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditSharpIcon from "@material-ui/icons/EditSharp";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Typography } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  paperStyle: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    padding: "12px",
    borderRadius: "8px",
    flexWrap: "wrap",
    overflow: "hidden",

    maxWidth: "100%",
    background: "rgba(255,255,255,0.6)",
    [theme.breakpoints.down("xs")]: {
      minWidth: "50vw",
      minHeight: "10vh",
    },
  },
  clearButton: {
    width: "25vw",
    marginTop: "30px",
    textTransform: "capitalize",
    marginBottom: "20px",
    backgroundColor: "#ffe8ee",
    "&:hover": {
      backgroundColor: "#000",
      borderRadius: "10px",
      color: "#fff",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
    "@media (max-width:542px)": {
      fontSize: "1rem",
    },
    "@media (max-width:281px)": {
      fontSize: "0.6rem",
    },
  },
  editButton: {
    [theme.breakpoints.down("xs")]: {
      padding: "1px",
    },
  },
  deleteButton: {
    marginRight: "10px",

    [theme.breakpoints.down("xs")]: {
      padding: "1px",
    },
  },
  boxStyle: {
    padding: 0,
    marginTop: "5px",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      marginTop: "1rem",
    },
  },
  clearButtonBoxStyle: {
    display: "flex",
    justifyContent: "center",
  },
  pStyle: {
    fontFamily: "'sans-serif'",
  },
  wordBreak: {
    wordWrap: "break-word",
  },
}));
function TodoList() {
  const { list } = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useStyle();
  return (
    <>
      {list.map((item) => {
        const { id, value } = item;
        return (
          <Grid key={id} container>
            <Grid item xs={12}>
              <Paper elevation={3} className={classes.paperStyle}>
                <Box className={classes.wordBreak}>
                  <Typography className={classes.pStyle}>{value}</Typography>
                </Box>
                <Box className={classes.boxStyle}>
                  <Button
                    onClick={() => dispatch(deleteTodo(id))}
                    variant="outlined"
                    color="secondary"
                    className={classes.deleteButton}
                  >
                    <DeleteOutlineIcon />
                  </Button>
                  <Button
                    onClick={() => dispatch(editTodo(item))}
                    className={classes.editButton}
                    variant="outlined"
                    color="primary"
                  >
                    <EditSharpIcon />
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        );
      })}
      <Box className={classes.clearButtonBoxStyle}>
        <Button
          onClick={() => dispatch(allClear())}
          variant="contained"
          className={classes.clearButton}
        >
          all
          <HighlightOffIcon />
        </Button>
      </Box>
    </>
  );
}

export default TodoList;
