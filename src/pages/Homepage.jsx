import { Fragment, useContext } from "react";
import { ToDosContext } from "../App";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Homepage = () => {
  const [toDos] = useContext(ToDosContext);

  return (
    <Box sx={{ display: 'flex' , flexDirection:"column", alignItems: 'center'}}>
      <Typography>Todo List</Typography>
      <Link style={{ textDecoration: "none" }} to="/addnewtodo">
        <Button variant="contained">manage todos</Button>
      </Link>
      <Box sx={{display: 'grid', gridTemplateRows: 'repeat(3, 1fr)',gap: 1, width:3/4}}>
        {toDos.map((toDo, index) => {
          return (
            <Card
              variant="outlined"
              sx={{ minWidth: 275, m: 2 }}
              style={{ display: "inline-block" }}
              margin="normal"
              key={index}
            >
              <CardContent>
                <Typography>{toDo.value}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Homepage;
