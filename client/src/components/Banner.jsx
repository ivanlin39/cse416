import { Box, AppBar, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Banner = ({ pageName, setPageName }) => {

    return (
        <Box sx={{ height: "8%" }}>
            <AppBar sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: "8%" }}>
                <Box sx={{ fontSize: 40, pl: 10, height: "100%", display: "flex", alignItems: "center" }}>
                    Team Raiders
                </Box>
                    <Box sx={{ pr: 10, pt: 1, width: 250 }}>
                        <FormControl fullWidth>
                            <InputLabel id="select-state">State</InputLabel>
                            <Select
                                labelId="select-state"
                                value={pageName}
                                onChange={(e) => setPageName(e.target.value)}
                            >
                                <MenuItem value="USA">United States</MenuItem>
                                <MenuItem value="Maryland">Maryland</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
            </AppBar>
        </Box>
    )
}

export default Banner;