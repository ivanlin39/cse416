import { Box } from "@mui/material";
import SideBarHeader from "./SideBarHeader";
import { Routes, Route } from 'react-router-dom';
import Introduction from "./Header/Introduction";
import FRAInfo from "./Header/FRAInfo";
import AboutUs from "./Header/AboutUs";

const SideBar = () => {
    return (
        <Box sx={{ height: "100%", width: "60%" }}>
            <Routes>
                <Route path="/" element={<SideBarHeader />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/frainfo" element={<FRAInfo />} />
                <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
        </Box>
    )
}

export default SideBar;