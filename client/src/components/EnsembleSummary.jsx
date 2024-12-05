import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Map from "./Map";

const EnsembleSummary = ({ pageName, setPageName }) => {
    const smd = {
        numberOfDistrictPlan: 100,
        averageMinorityRepresentativePerPlan: 12,
        averageEqualPopulation: 11,
        averageRepDemSplit: 55,
    }
    const mmd = {
        numberOfDistrictPlan: 100,
        averageMinorityRepresentativePerPlan: 12,
        averageEqualPopulation: 11,
        averageRepDemSplit: 55,
        layoutOfState: [3, 3, 4]
    }
    const [smdSummary, setSMDSummary] = useState(null);
    const [mmdSummary, setMMDSummary] = useState(null);

    useEffect(() => {

    }, [smdSummary]);

    useEffect(() => {

    }, [mmdSummary])

    return (
        <Box sx={{ display: "flex", width: "100%" }} >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                aa
            </Box>
            <Map pageName={pageName} setPageName={setPageName} />
        </Box>
    )
}

export default EnsembleSummary;