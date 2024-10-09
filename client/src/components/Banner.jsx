import { useNavigate } from "react-router";
import { Box, AppBar, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Banner = () => {
    const navigate = useNavigate();
    const { state, Zoom, Center, Name } = useContext(GlobalContext);

    const handleChange = (e) => {
        if(e.target.value == "USA"){
            Zoom(4);
            Center({lat: 39, lng: -96});
            Name("USA");
        }else if(e.target.value == "MD"){
            Zoom(7);
            Center({lat: 39, lng: -76.6});
            Name("MD");
        }else if(e.target.value == "NM"){
            Zoom(6);
            Center({lat: 35, lng: -105});
            Name("NM");
        }
    }

    return (
        <Box sx={{height: "8%"}}>
            <AppBar sx={{display: "flex", flexDirection: "row", justifyContent:"space-between", height:"8%"}}>
                <Box sx={{pl: 10, height: "100%"}}>
                    <Button sx={{height:"100%", textTransform: "none"}} onClick={() => navigate("/")}>
                        Home
                    </Button>
                </Box>
                <Box sx={{pr: 10, pt: 1, width:250}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                        <Select
                            value={state.name}
                            onChange={handleChange}
                        >
                            <MenuItem value="USA">United States</MenuItem>
                            <MenuItem value="MD">Maryland</MenuItem>
                            <MenuItem value="NM">New Mexico</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </AppBar>
        </Box>
    )
}

export default Banner;