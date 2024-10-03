import { Box, Button } from "@mui/material";

const SideBarHeader = () => {
    return (
        <Box sx={{pt: 2, display: "flex", justifyContent: "space-around"}}>
            <Button sx={{textTransform:"none"}} variant="contained">
                District Data
            </Button>
            <Button sx={{textTransform:"none"}} variant="contained">
                Fairness
            </Button>
        </Box>
    )
}

export default SideBarHeader;