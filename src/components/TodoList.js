import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTodo, allClear, editTodo } from "../redux/todoSlice";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  paperStyle: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "4px",
  },
  clearButton: {
    width: "25vw",
    marginTop: "30px",
  },
  deleteButton: {
    marginRight: "10px",
  },
  boxStyle: {
    padding: 0,
    marginTop: "5px",
  },
  clearButtonBoxStyle: {
    display: "flex",
    justifyContent: "center",
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
                <div>
                  <p>{value}</p>
                </div>
                <Box className={classes.boxStyle}>
                  <Button
                    onClick={() => dispatch(deleteTodo(id))}
                    variant="outlined"
                    className={classes.deleteButton}
                  >
                    삭제
                  </Button>
                  <Button
                    onClick={() => dispatch(editTodo(item))}
                    variant="outlined"
                    className={classes.editButton}
                  >
                    수정
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        );
      })}{" "}
      <Box className={classes.clearButtonBoxStyle}>
        <Button
          onClick={() => dispatch(allClear())}
          color="secondary"
          variant="contained"
          className={classes.clearButton}
        >
          모두 삭제
        </Button>
      </Box>
    </>
  );
}

export default TodoList;
