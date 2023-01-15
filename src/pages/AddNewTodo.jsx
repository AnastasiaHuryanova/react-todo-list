import { Fragment, useContext, useState } from "react";
import { ToDosContext } from "../App";
import { Link } from "react-router-dom";

const AddNewTodo = () => {
  const [newToDo, setNewTodo] = useState("");
  const [toDos, setToDos] = useContext(ToDosContext);

  const addTodo = () => {
    if (!newToDo) return;
    setToDos([{ value: newToDo, disabled: true }, ...toDos]);
  };

  const deleteTodo = (index) => {
    const toDosCopy = [...toDos];
    toDosCopy.splice(index, 1);
    setToDos(toDosCopy);
  };

  const editTodo = (event, index) => {
    const toDosCopy = [...toDos];
    toDosCopy[index].value = event.target.value;
    setToDos(toDosCopy);
  };

  const setDisabled = (index) => {
    const toDosCopy = [...toDos];
    toDosCopy[index].disabled = !toDosCopy[index].disabled;
    setToDos(toDosCopy);
  };

  return (
    <>
      <h1>Edit todos</h1>
      <input
        value={newToDo.value}
        placeholder="write here your todo"
        onChange={(event) => {
          setNewTodo(event.target.value);
        }}
      ></input>
      <button onClick={addTodo}>add todo</button>
      <br />
      <br />
      {toDos.map((toDo, index) => {
        return (
          <Fragment key={index}>
            <input
              value={toDo.value}
              disabled={toDo.disabled}
              onChange={(event) => {
                editTodo(event, index);
              }}
            />

            <button
              onClick={() => {
                deleteTodo(index);
              }}
            >
              delete task
            </button>
            <button
              onClick={() => {
                setDisabled(index);
              }}
            >
              edit task
            </button>
            <br />
          </Fragment>
        );
      })}

      <Link to="/">
        <button>go to todos list</button>
      </Link>
    </>
  );
};

export default AddNewTodo;
