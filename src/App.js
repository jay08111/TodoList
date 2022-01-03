import React, { useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import theme from "./components/CreateTheme";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  typoStyle: {
    fontSize: "3rem",
    fontFamily: "Dancing Script",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
    "@media (max-width:281px)": {
      fontSize: "1.2rem",
    },
  },
  containerStyle: {
    width: "60%",
    marginTop: "5rem",
  },
  boxStyle: {
    overflow: "hidden",
    height: "100%",
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/backgImg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
function App() {
  const { list } = useSelector((state) => state);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  const classes = useStyle();
  return (
    <Box className={classes.boxStyle}>
      <CssBaseline />
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
                what are your plans for today ?
              </Typography>
            </div>
            <Form />
            {list.length > 0 && <TodoList />}
          </div>
        </Container>
      </ThemeProvider>
    </Box>
  );
}

export default App;
