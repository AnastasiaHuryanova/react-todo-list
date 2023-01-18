import { Fragment, useContext, useState } from "react";
import { ToDosContext } from "../App";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, Typography, Fab } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";

const AddNewTodo = () => {
  const [newToDo, setNewTodo] = useState("");
  const [toDos, setToDos] = useContext(ToDosContext);

  const addTodo = () => {
    if (!newToDo) return;
    setToDos([
      {
        value: newToDo,
        disabled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ...toDos,
    ]);
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
    toDosCopy[index].updatedAt = new Date();
    setToDos(toDosCopy);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography sx={{ m: 3 }}>Edit todos</Typography>
      <Box sx={{ display: "flex", alignItems:"center"}}>
        <TextField
          value={newToDo.value}
          label="add todo"
          variant="outlined"
          size="small"
       
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
        />
        <Fab
          aria-label="add"
          margin="normal"
          size="small"
          onClick={addTodo}
        >
          <AddIcon />
        </Fab>
      </Box>

      {toDos.map((toDo, index) => {
        return (
          <Box sx={{ display: "flex", alignItems:"center", m:2}} key={index}>
            <TextField
              label="edit todo"
              variant="outlined"
              size="small"
              margin="normal"
              value={toDo.value}
              disabled={toDo.disabled}
              onChange={(event) => {
                editTodo(event, index);
              }}
            />

            <Fab
              color="delete"
              aria-label="delete"
              margin="normal"
              size="small"
              onClick={() => {
                deleteTodo(index);
              }}
            >
              <DeleteIcon />
            </Fab>
            <Fab
              color="edit"
              aria-label="edit"
              margin="normal"
              size="small"
              onClick={() => {
                setDisabled(index);
              }}
            >
              <ModeEditIcon />
            </Fab>
          </Box>
        );
      })}

      <Link style={{ textDecoration: "none" }} to="/">
        <Fab aria-label="home" sx={{ m: 3 }}>
          <HomeIcon />
        </Fab>
      </Link>
    </Box>
  );
};

export default AddNewTodo;
