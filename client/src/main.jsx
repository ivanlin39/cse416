import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#607d8b"
    },
    typography: {
      button: {
        textTransform: "none",
      },
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <GlobalProvider>
            <App />
          </GlobalProvider>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>,
)
