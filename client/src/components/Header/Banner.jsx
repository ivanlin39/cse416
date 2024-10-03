import { useNavigate } from "react-router";
import { Box, AppBar, Button } from "@mui/material";

const Banner = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{height: "50px"}}>
            <AppBar sx={{display: "flex", flexDirection: "row", justifyContent:"space-between", height:"50px"}}>
                <Box sx={{pl: 10, height: "100%"}}>
                    <Button sx={{height:"100%", textTransform: "none"}} onClick={() => navigate("/")}>
                        Home
                    </Button>
                </Box>
                <Box sx={{pr: 10, height: "100%", width: "35%", display: "flex", justifyContent:"space-between"}}>
                    <Button sx={{textTransform:"none"}} onClick={() => navigate("/introduction")}>
                        Introduction
                    </Button>
                    <Button sx={{textTransform:"none"}} onClick={() => navigate("/frainfo")}>
                        FRA Info
                    </Button>
                    <Button sx={{textTransform:"none"}} onClick={() => navigate("/aboutus")}>
                        About Us
                    </Button>
                </Box>
            </AppBar>
        </Box>
    )
}

export default Banner;