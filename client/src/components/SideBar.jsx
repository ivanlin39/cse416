import { Box, Button } from "@mui/material";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Fairness from "./Fairness";
import { useNavigate } from "react-router";

const SideBar = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ p:2, height: "100%", width: "60%" }}>
            <Box>
                <Button onClick={() => navigate("/fairness")} sx={{textTransform:"none"}} variant="contained">
                    Fairness
                </Button>
            </Box>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fairness" element={<Fairness />} />
            </Routes>
        </Box>
    )
}

export default SideBar;