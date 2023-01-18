import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box, Typography, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { shadows } from "@mui/system";

const EmptyStatePage = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="Typography" sx={{ m: 3 }}>
        Todo List
      </Typography>
      <Link
        style={{ textDecoration: "none", justifyContent: "center" }}
        to="/addnewtodo"
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
      <img
        style={{ width: "40wv", borderRadius: "50%" }} alt="gif"
        src="https://media.tenor.com/fp4qkaHjuTIAAAAC/sponge-bob-to-do.gif"
      />
      <Typography variant="Typography">
        nothing to do rn, add a new todo using the add button or go out for a
        walk
      </Typography>
    </Box>
  );
};

export default EmptyStatePage;
