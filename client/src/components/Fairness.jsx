import { Box } from "@mui/material"
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const Fairness = () => {
    const { state } = useContext(GlobalContext);

    return (
        <Box>
            {state.name === "MD" ? (
                <Box>
                    maryland
                </Box>
            ): (
                <Box>
                    new mexico
                </Box>
            )}
        </Box>
    )
}

export default Fairness;