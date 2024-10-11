import { Box, Typography } from "@mui/material";
import { PieChart, BarChart } from '@mui/x-charts';
import Map from "./Map";
import { getVotePopulation } from "../utils";
import { useEffect, useState } from "react";

const MarylandPage = () => {
    const [votePopulation, setVotePopulation] = useState([]);

    useEffect(() => {
        getVotePopulation().then((data) => setVotePopulation(data)).catch((err) => console.log(err));
    }, []);

    return (
        <Box sx={{ height:"100%", display:"flex"}}>
            <Box sx={{display:"flex", alignItems:"center"}}>
                <Box>
                    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
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
                <BarChart
                    title="2022 New Maryland Voter Turnout"
                    colors={["#d8031c", "#01016f"]}
                    xAxis={[{ scaleType: 'band', data: ['District 1', 'District 2', 'District 3', 'District 4', 'District 5', 'District 6', 'District 7', 'District 8'] }]}
                    series={[{ label: "2022 Maryland Republican Voter Turnout", data: [159673, 109081, 115801, 15441, 94000, 115771, 32737, 47965] }, { label: "2022 Maryland Democrat Voter Turnout", data: [126511, 159000, 175514, 144204, 182478, 140295, 151640, 211842] }]}
                    width={500}
                    height={300}
                    margin={{ left: 60 }}
                />
            </Box>
            <Map />
        </Box>
    )
}

export default MarylandPage;