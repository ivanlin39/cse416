import { Box } from "@mui/material";
import SimulatedElectionSelector from "./SimulatedElectionSelector";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer, Label } from "recharts";
import InfoTable from "./InfoTable";

const SimulatedElections = () => {
    const items = {
        "extreme smd1": "smd1",
        "extreme smd2": "smd2",
        "extreme smd3": "smd3",
        "extreme smd4": "smd4",
        "extreme smd5": "smd5",
        "extreme mmd1": "mmd1",
        "extreme mmd2": "mmd2",
        "extreme mmd3": "mmd3",
        "extreme mmd4": "mmd4",
        "extreme mmd5": "mmd5",
    };

    return (
        <Box>
            <SimulatedElectionSelector items={items} />
            <Box sx={{ display: "flex", pt: 1 }}>
                <InfoTable data={{
                    numOfDistricts: 4,
                    totalPopulation: 123,
                    whitePopulation: 123,
                    blackPopulation: 123,
                    asianPopulation: 123,
                    hispanicPopulation: 123,
                    republicanDemocratSplit: 0.5,
                    electionUsed: 2022,
                    numOfOpportunityDistricts: 3,
                    opportunityDistrictThreshold: .5,
                    numOfSafeDistricts: 4
                }} />
                <ResponsiveContainer height={400} width={"90%"} style={{ textAlign: "center" }}>
                    <h3>Seats Votes for Maryland 2020</h3>
                    <LineChart data={[
                        {
                            "votes": "0.0",
                            "seatsR": "0.0",
                            "seatsD": "0.0"
                        },
                        {
                            "votes": "0.96",
                            "seatsR": "0.0",
                            "seatsD": "0.0"
                        },
                        {
                            "votes": "1.96",
                            "seatsR": "0.0",
                            "seatsD": "0.0"
                        },
                        {
                            "votes": "100.0",
                            "seatsR": "100.0",
                            "seatsD": "100.0"
                        }
                    ]}>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="votes" interval={20} >
                            <Label value="Percentage of Vote" offset={-20} position="insideBottom" />
                        </XAxis>
                        <YAxis>
                            <Label value="Percentage of Seats" dy={70} offset={10} angle={-90} position="insideLeft" />
                        </YAxis>
                        {/* <Tooltip content={<CustomToolTip />} /> */}
                        <Legend align="right" />
                        <Line type="monotone" dataKey="seatsR" stroke="#FF0000" dot={false} />
                        <Line type="monotone" dataKey="seatsD" stroke="#0000FF" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </Box>
    )
}

export default SimulatedElections;