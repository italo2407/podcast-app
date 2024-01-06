import "./App.css";
import { AppRoutes } from "./AppRoutes";
import { CustomToolbar } from "./components/ToolBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
        contrastText: "rgb(28, 32, 37)",
      },
      secondary: {
        main: "#2196f3",
        contrastText: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CustomToolbar />
      <Box sx={{ paddingX: 8, paddingY: 4 }}>
        <AppRoutes /> 
      </Box>
    </ThemeProvider>
  );
}

export default App;
