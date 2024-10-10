import { Box } from "@mui/material";
import Home from "./Home";
import Fairness from "./Fairness";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const SideBar = () => {
    const { state } = useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(state.name === "USA"){
            navigate("/");
        }else{
            navigate("/fairness");
        }
    }, [state]);

    return (
        <Box sx={{ p:2, height: "100%", width: "60%" }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fairness" element={<Fairness />} />
            </Routes>
        </Box>
    )
}

export default SideBar;