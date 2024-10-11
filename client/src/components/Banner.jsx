import { Box, AppBar, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Banner = () => {
    const { state, UpdateAll } = useContext(GlobalContext);

    const handleChange = (e) => {
        if(e.target.value == "USA"){
            UpdateAll("USA", 4, {lat: 39, lng: -96});
        }else if(e.target.value == "MD"){
            UpdateAll("MD", 7, {lat: 39, lng: -76.6});
        }
    }

    return (
        <Box sx={{height: "8%"}}>
            <AppBar sx={{display: "flex", flexDirection: "row", justifyContent:"space-between", height:"8%"}}>
                <Box sx={{fontSize: 40, pl: 10, height: "100%", display:"flex", alignItems:"center"}}>
                    Team Raiders
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
                        </Select>
                    </FormControl>
                </Box>
            </AppBar>
        </Box>
    )
}

export default Banner;