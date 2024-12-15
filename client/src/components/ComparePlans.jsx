import {
    Box, Typography
} from "@mui/material";
import InfoTable from "./InfoTable";
import { useEffect, useState } from "react";
import DynamicBarChart from "./DynamicBarChart";

const ComparePlans = () => {
    const [currentPlan, setCurrentPlan] = useState({
        repDemSplit: 1,
        numOpportunityRep: 2,
        voteShare: 3,
        seatShare: 4
    });
    const [averageMMDPlan, setaverageMMDPlan] = useState({
        repDemSplit: 1,
        numOpportunityRep: 2,
        voteShare: 3,
        seatShare: 4
    });

    useEffect(() => {

    }, [currentPlan]);

    useEffect(() => {

    }, [averageMMDPlan]);

    return (
        <Box>
            <Box sx={{ width: "100%", display: "flex" }} >
                <Box sx={{ justifyContent: "center", alignItems: "center" }}>
                    <Typography>
                        Current Enacted Plan
                    </Typography>
                    <InfoTable data={currentPlan} />
                </Box>
                <Box>
                    <Typography>
                        Average Multi-Member District Plan
                    </Typography>
                    <InfoTable data={averageMMDPlan} />
                </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
                <DynamicBarChart />
                <DynamicBarChart />
            </Box>
        </Box>
    )
}

export default ComparePlans;
