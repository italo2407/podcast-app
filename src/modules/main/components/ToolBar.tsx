import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useGlobalAppState } from "../store/context";
import { Link } from "react-router-dom";

export function CustomToolbar() {
  const { isFetching } = useGlobalAppState();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: 3, paddingInline: 5 }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              color="secondary"
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { sm: "block" } }}
            >
              Podcaster
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: "flex" } }}>
            {isFetching && <CircularProgress color="secondary" />}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
