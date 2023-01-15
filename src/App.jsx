import { createContext, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import AddNewTodo from "./pages/AddNewTodo";
import EmptyStatePage from "./pages/EmptyStatePage";

export const ToDosContext = createContext();

const App = () => {
  const [toDos, setToDos] = useState([]);

  return (
    <ToDosContext.Provider value={[toDos, setToDos]}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={toDos.length > 0 ? <Homepage /> : <EmptyStatePage />}
          ></Route>
          <Route path="/addnewtodo" element={<AddNewTodo />}></Route>
        </Routes>
      </BrowserRouter>
    </ToDosContext.Provider>
  );
};

export default App;
