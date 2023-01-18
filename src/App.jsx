import { createContext, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import HandleTodos from "./pages/HandleTodos";
import EmptyStatePage from "./pages/EmptyStatePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ThemeModeSwitch from "./components/switch/ThemeModeSwitch";
import CssBaseline from "@mui/material/CssBaseline";

export const ToDosContext = createContext();

const getDesignTokens = (mode) => {
  const lightMode = {
    palette: {
      pippo: "pluto",
      mode: "light",
      primary: {
        main: "#cccc00",
      },
      secondary: {
        main: "#cd6b0f",
      },
      delete: {
        main: "#b41414",
      },
      edit: {
        main: "#d454b4",
      },
      text: {
        primary: "#020709",
        secondary: "#61808a",
      },
      background: {
        primary: "#f3f7f9",
        secondary: "#a0a3a3",
      },
    },
  };
  const darkMode = {
    palette: {
      pippo: "pluto",
      mode: "dark",
      primary: {
        main: "#210853",
      },
      secondary: {
        main: "#3d094f",
      },
      delete: {
        main: "#b41414",
      },
      edit: {
        main: "#d454b4",
      },
      text: {
        primary: "#ffffff",
        secondary: "#e6f7bc",
      },
      background: {
        primary: "#1c1b1b",
        secondary: "#a0a3a3",
      },
    },
  };

  return mode === "light" ? lightMode : darkMode;
};

const App = () => {
  const [mode, setMode] = useState("light");
  const [theme, setTheme] = useState(createTheme(getDesignTokens(mode)));

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setTheme(createTheme(getDesignTokens(mode)));
  }, [mode]);

  const [toDos, setToDos] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeModeSwitch
        onClick={toggleColorMode}
        sx={{ m: 1 }}
        checked={mode === "dark"}
      />
      <ToDosContext.Provider value={[toDos, setToDos]}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={toDos.length > 0 ? <Homepage /> : <EmptyStatePage />}
            ></Route>
            <Route path="/addnewtodo" element={<HandleTodos />}></Route>
          </Routes>
        </BrowserRouter>
      </ToDosContext.Provider>
    </ThemeProvider>
  );
};

export default App;
