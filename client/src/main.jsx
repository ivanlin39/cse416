import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import "./global.css"

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#607d8b"
    }
  },
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          color: "#607d8b",
          "& td": {
            color: "#607d8b",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#607d8b",
        },
      },
    },
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>,
)
