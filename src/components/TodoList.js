import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTodo, allClear, editTodo } from "../redux/todoSlice";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
function TodoList() {
  const { list } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      {list.map((item) => {
        const { id, value } = item;
        return (
          <Grid key={id} container>
            <Grid item xs={12}>
              <Paper
                elevation={3}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  padding: "10px",
                  borderRadius: "4px",
                }}
              >
                <div>
                  <p>{value}</p>
                </div>
                <ButtonGroup size="small">
                  <Button
                    onClick={() => dispatch(deleteTodo(id))}
                    variant="outlined"
                    color="secondary"
                  >
                    delete
                  </Button>
                  <Button
                    onClick={() => dispatch(editTodo(item))}
                    variant="outlined"
                    color="secondary"
                  >
                    edit
                  </Button>
                </ButtonGroup>
              </Paper>
            </Grid>
          </Grid>
        );
      })}{" "}
      <Button
        onClick={() => dispatch(allClear())}
        color="secondary"
        variant="contained"
        style={{ width: "25vw", marginTop: "3.5rem" }}
      >
        clear All
      </Button>
    </>
  );
}

export default TodoList;
