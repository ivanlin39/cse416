import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import Banner from "./components/Banner";
import { Routes, Route, useNavigate } from "react-router-dom";
import MarylandPage from "./components/MarylandPage";
import HomePage from "./components/HomePage";

function App() {
  const [pageName, setPageName] = useState("USA");
  const navigate = useNavigate();

  useEffect(() => {
    if (pageName === "USA") {
      navigate("/");
    } else if(pageName === "Maryland") {
      navigate("/Maryland");
    }
  }, [pageName]);

  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Banner pageName={pageName} setPageName={setPageName} />
      <Routes>
        <Route path="/" element={ <HomePage pageName={pageName} setPageName={setPageName}/> }/>
        <Route path="/Maryland" element={ <MarylandPage pageName={pageName} setPageName={setPageName} /> }/>
      </Routes>
    </Box>
  )
}

export default App;