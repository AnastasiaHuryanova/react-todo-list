import { useContext } from "react";
import { ToDosContext } from "../App";
import { Link } from "react-router-dom";

const Homepage = () => {

  const [toDos, setToDos] = useContext(ToDosContext);

  return (
    <>
      <h1>Todo List</h1>
      <Link to = "/addnewtodo"><button>add todo</button></Link>
      <ul>
        {toDos.map((toDo, index) => {
          return <li key={index}>{toDo}</li>;
        })}
      </ul>
    </>
  );
};

export default Homepage;
