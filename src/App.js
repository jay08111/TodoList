import React, { useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { theme } from "./components/CreateTheme";
import { ThemeProvider } from "@material-ui/styles";
import { responsiveStyles } from "@material-ui/core";
function App() {
  const { list } = useSelector((state) => state);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          width: "60%",
          marginTop: "5rem",
        }}
      >
        <div>
          <div>
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              style={{ fontSize: "2.5rem" }}
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
