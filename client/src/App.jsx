import { Box, Typography } from "@mui/material";
import Banner from "./components/Header/Banner";
import SideBar from "./components/SideBar";
import Map from "./components/Map";

function App() {
  return (
    <Box sx={{ height: "100vh", width: "100%", display: 'flex', flexDirection: 'column' }}>
      <Banner />
      <Box sx={{ height: "100%", display: 'flex'}}>
        <SideBar />
        <Map />
      </Box>
    </Box>
  )
}

export default App;