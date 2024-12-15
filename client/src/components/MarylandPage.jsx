import { Box, Typography } from "@mui/material";
import { PieChart, BarChart } from '@mui/x-charts';
import Map from "./Map";
import { getVotePopulation } from "../utils";
import { useEffect, useState } from "react";
import EnsembleSummary from "./EnsembleSummary";
import SimulatedElections from "./SimulatedElections";
import DataSources from "./DataSources";
import InfoHeader from "./InfoHeader";
import ComparePlans from "./ComparePlans";
import BoxWhisker from "./BoxWhisker";

const MarylandPage = ({ pageName, setPageName }) => {
    const [votePopulation, setVotePopulation] = useState([]);
    const [info, setInfo] = useState("EnsembleSummary");//EnsembleSummary

    useEffect(() => {
        getVotePopulation().then((data) => setVotePopulation(data)).catch((err) => console.log(err));
    }, []);

    return (
        <Box sx={{ height: "92%", width: "100%", display: "flex",  }}>
            <Box sx={{ width: "60%", height: "100%" }}>
                <InfoHeader setInfo={setInfo} />
                {info === "" &&
                    <Box sx={{ display: "flex", width: "100%" }} >
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Typography>
                                        Maryland Voting Age Population
                                    </Typography>
                                    {votePopulation.length === 5 &&
                                        <PieChart
                                            width={480}
                                            height={200}
                                            colors={["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"]}
                                            series={[
                                                {
                                                    data: votePopulation,
                                                },
                                            ]}
                                        // tooltip={{ trigger: 'none' }}
                                        />
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                }
                {info === "EnsembleSummary" && <EnsembleSummary />}
                {info === "SimulatedElections" && <SimulatedElections />}
                {info === "ComparePlans" && <ComparePlans />}
                {info === "BoxWhisker" && <BoxWhisker />}
                {info === "DataSources" && <DataSources />}
            </Box>
            <Box sx={{ width: "40%", height: "100%" }}>
                <Map pageName={pageName} setPageName={setPageName} />
            </Box>
        </Box>
    )
}

export default MarylandPage;