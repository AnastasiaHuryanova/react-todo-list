import { Fragment, useContext, useState } from "react";
import { ToDosContext } from "../App";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Box, Typography, Fab } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import PriorityRadioButton from "../components/switch/PriorityRadioButton";



const HandleToDos = () => {
  const [newToDo, setNewToDo] = useState({
    value: "",
    priority:"low",
  });

  const [toDos, setToDos] = useContext(ToDosContext);



  const addNewToDo = () => {
    if (!newToDo.value) return;
    setToDos([
      {
        value: newToDo.value,
        disabled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        priority: newToDo.priority,
      },
      ...toDos,
    ]);
  };

  const editNewToDoValue = (value) => {
    setNewToDo({...newToDo, value})
  }
  
  const editNewToDoPriority = (index, priority) => {
    setNewToDo({...newToDo, priority})
  }
  

  const deleteToDo = (index) => {
    const toDosCopy = [...toDos];
    toDosCopy.splice(index, 1);
    setToDos(toDosCopy);
  };

  const editToDoValue = (value, index) => {
    const toDosCopy = [...toDos];
    toDosCopy[index].value = value;
    setToDos(toDosCopy);
  };

  const editToDoPriority = (index, priority) => {
    const toDosCopy = [...toDos];
    toDosCopy[index].priority = priority;
    setToDos(toDosCopy);
  }

  const editToDoDisabled = (index) => {
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
            editNewToDoValue(event.target.value);
          }}
        />
        <Fab
          aria-label="add"
          margin="normal"
          size="small"
          color="primary"
          onClick={addNewToDo}
        >
          <AddIcon />
        </Fab>
      </Box>
      <PriorityRadioButton priority={newToDo.priority} setPriority = {editNewToDoPriority}/>

      {toDos.map((toDo, index) => {
        return (
          <Box sx={{ display: "flex", alignItems:"center", m:2}} key={index}>
            <></>
            <TextField
              label="edit todo"
              variant="outlined"
              size="small"
              margin="normal"
              value={toDo.value}
              disabled={toDo.disabled}
              onChange={(event) => {
                editToDoValue(event.target.value, index);
              }}
            />
                  <PriorityRadioButton priority={toDo.priority} setPriority={editToDoPriority} index={index}/>

            <Fab
              color="delete"
              aria-label="delete"
              margin="normal"
              size="small"
              onClick={() => {
                deleteToDo(index);
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
                editToDoDisabled(index);
              }}
            >
              <ModeEditIcon />
            </Fab>
          </Box>
        );
      })}

      <Link style={{ textDecoration: "none" }} to="/">
        <Fab aria-label="home" color="primary" sx={{ m: 3 }}>
          <HomeIcon />
        </Fab>
      </Link>
    </Box>
  );
};

export default HandleToDos;
