import React, { useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import theme from "./components/CreateTheme";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  typoStyle: {
    fontSize: "2.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  containerStyle: {
    width: "60%",
    marginTop: "5rem",
  },
}));
function App() {
  const { list } = useSelector((state) => state);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.containerStyle}>
        <div>
          <div>
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              className={classes.typoStyle}
            >
              오늘은 무엇을 할 예정이세요?
            </Typography>
          </div>
          <Form />
          {list.length > 0 && <TodoList />}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
