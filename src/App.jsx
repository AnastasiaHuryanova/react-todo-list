import { createContext, useState } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import AddNewTodo from "./pages/AddNewTodo";

export const ToDosContext = createContext();

const App = () => {
  const [toDos, setToDos] = useState(["buy a microwave", "clean the house"]);

  return (
    <ToDosContext.Provider value={[toDos, setToDos]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/addnewtodo" element={<AddNewTodo />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </ToDosContext.Provider>
  );
};

export default App;
