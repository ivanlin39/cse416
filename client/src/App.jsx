import { useEffect, useContext } from "react";
import { Box } from "@mui/material";
import Banner from "./components/Banner";
import { GlobalContext } from "./context/GlobalContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import MarylandPage from "./components/MarylandPage";

function App() {
  const { state } = useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(state.name === "USA"){
            navigate("/");
        }else{
            navigate("/Maryland");
        }
    }, [state]);

  return (
    <Box sx={{ height: "100vh", width: "100%"}}>
      <Banner />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Maryland" element={<MarylandPage />} />
      </Routes>
    </Box>
  )
}

export default App;