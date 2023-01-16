import { Fragment, useContext, useState } from "react";
import { ToDosContext } from "../App";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, Typography, Fab} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';


const AddNewTodo = () => {
  const [newToDo, setNewTodo] = useState("");
  const [toDos, setToDos] = useContext(ToDosContext);

  const addTodo = () => {
    if (!newToDo) return;
    setToDos([{ value: newToDo, disabled: true, createdAt:new Date(), updatedAt:new Date()}, ...toDos]);
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
      <Typography>Edit todos</Typography>
      <Box sx={{ display: "flex" }}>
        <TextField
          value={newToDo.value}
          label="add todo"
          variant="outlined"
          size="small"
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
        />
        <Fab color="primary" aria-label="add" onClick={addTodo}>
          <AddIcon/>
        </Fab>
      </Box>

      {toDos.map((toDo, index) => {
        return (
          <Box sx={{ display: "flex", m: 2}}  key={index}>
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
                color="error" aria-label="delete"
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                <DeleteIcon />
              </Fab>
              <Fab
                color="secondary" aria-label="edit"
                onClick={() => {
                  setDisabled(index);
                }}
              >
               <ModeEditIcon/>
              </Fab>
          </Box>
        );
      })}

      <Link style={{ textDecoration: "none" }} to="/">
        <Fab color="primary" aria-label="home"><HomeIcon/></Fab>
      </Link>
    </Box>
  );
};

export default AddNewTodo;
