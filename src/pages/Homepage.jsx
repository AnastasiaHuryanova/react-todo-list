import { Fragment, useContext } from "react";
import { ToDosContext } from "../App";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getDateAsString } from "../utils/datehandler";
import Grid from "@mui/material/Unstable_Grid2";

const Homepage = () => {
  const [toDos] = useContext(ToDosContext);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography>Todo List</Typography>
      <Link style={{ textDecoration: "none" }} to="/addnewtodo">
        <Button variant="contained">manage todos</Button>
      </Link>
      <Grid container sx={{ maxWidth: "70vw", bgcolor: "#ede2e1" }}>
        {toDos.map((toDo, index) => {
          return (
            <Grid key={index} xs={2}>
              <Card variant="outlined" sx={{ m: 2, maxWidth: "300px" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14, float: "right" }}
                    color="text.secondary"
                  >
                    {getDateAsString(toDo.createdAt)}
                  </Typography>
                  <Typography
                    sx={{ overflowWrap: "anywhere", marginTop: "2.5rem" }}
                  >
                    {toDo.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Homepage;
