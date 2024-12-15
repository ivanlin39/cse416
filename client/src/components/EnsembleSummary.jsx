import { Box, Typography } from "@mui/material";
import InfoTable from "./InfoTable";
import { useState, useEffect } from "react";
import { getEnsembleSummary } from "../utils";

const EnsembleSummary = () => {
    const [smdSummary, setsmdSummary] = useState({});
    const [mmdSummary, setmmdSummary] = useState({});

    useEffect(() => {
        getEnsembleSummary("smd").then((data) => setsmdSummary(data)).catch((err) => console.log(err));
    }, [])

    useEffect(() => {
        getEnsembleSummary("mmd").then((data) => setmmdSummary(data)).catch((err) => console.log(err));
    }, [])

    return (
        smdSummary && mmdSummary && (
            <Box sx={{ height: "92%", width: "100%" }} >
                <Box sx={{ pt:1, display: 'flex', justifyContent: "space-around" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography>
                            Single Member District Summary
                        </Typography>
                        <InfoTable detail={"ensemble"} data={smdSummary} />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography>
                            Multi-Member District Summary
                        </Typography>
                        <InfoTable detail={"ensemble"} data={mmdSummary} />
                    </Box>
                </Box>
                <Box>
                    jaja
                </Box>
            </Box>
        )
    )
}

export default EnsembleSummary;