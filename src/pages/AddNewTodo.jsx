import { Fragment, useContext, useState } from "react";
import { ToDosContext } from "../App";
import { Link } from "react-router-dom";

const AddNewTodo = () => {
  const [newToDo, setNewTodo] = useState("");
  const [toDos, setToDos] = useContext(ToDosContext);
  const []

  const addTodo = () => {
    if (!newToDo) return;
    setToDos([newToDo, ...toDos]);
  };

  

  const deleteTodo = (index) => {
    const toDosCopy = [...toDos];
    toDosCopy.splice(index, 1);
    setToDos(toDosCopy);
  };

  const editTodo = (event,index) => {
    console.log(index);
    console.log(event.target.value);
    const toDosCopy = [...toDos];
    toDosCopy[index] = event.target.value;
    setToDos(toDosCopy);
  };

  const setDisabled = () => {

  }

  return (
    <>
      <h1>Edit todos</h1>
      <input
        value={newToDo}
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
            value={toDo} 
            disabled = {false} 
            onChange={(event)=>{
              editTodo(event,index)
            }}
            />

            <button
              onClick={() => {
                deleteTodo(index);
              }}
            >
              delete task
            </button>
            <button onClick={() => {setDisabled()}}>edit task</button>
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
