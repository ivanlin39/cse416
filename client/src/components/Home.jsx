import { Box, Typography } from "@mui/material";
import { PieChart, BarChart } from '@mui/x-charts';
import MarylandVoting from "../data/MarylandVoting.json";
import NewMexicoVoting from "../data/NewMexicoVoting.json"

const sumPopulationByDistrict = (data) => {
    const raceSum = []
    let id=1;
    Object.keys(data.population).forEach((race) =>{
        const temp = {}
        const sum = Object.values(data.population[race]).reduce((acc, curr) => acc + curr, 0);
        temp["value"] = sum;
        temp["id"] = id;
        temp["label"] = (race.length===13) ?  "Two Or More Race" : race.charAt(0).toUpperCase() + race.slice(1);;
        id++;
        raceSum.push(temp);
    })
    return raceSum;
}

const marylandRacePopulation = sumPopulationByDistrict(MarylandVoting);
const newMexicoRacePopulation = sumPopulationByDistrict(NewMexicoVoting);

const Home = () => {
    return (
        <Box sx={{pt: 2, justifyContent: "space-around"}}>
            <Box sx={{display: "flex"}}>
                <Box>
                    <Typography>
                        Maryland
                    </Typography>
                    <PieChart
                        width={500}
                        height={200}
                        colors={["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"]}
                        series={[
                            {
                                data: marylandRacePopulation,
                            },
                        ]}
                        // tooltip={{ trigger: 'none' }}
                    />
                </Box>
                <BarChart
                    colors={["#d8031c", "#01016f"]}
                    xAxis={[{ scaleType: 'band', data: ['District 1', 'District 2', 'District 3', 'District 4', 'District 5', 'District 6', 'District 7', 'District 8'] }]}
                    series={[{ data: [159673, 109081, 115801, 15441, 94000, 115771, 32737, 47965] }, { data: [126511, 159000, 175514, 144204, 182478, 140295, 151640, 211842] }]}
                    width={480}
                    height={300}
                />
            </Box>
            <Box sx={{display: "flex"}}>
                <Box>
                    <Typography>
                        New Mexico
                    </Typography>
                    <PieChart
                        width={500}
                        height={200}
                        colors={["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#c9c9ff", "#bae1ff"]}
                        series={[
                            {
                                data: newMexicoRacePopulation,
                            },
                        ]}
                        // tooltip={{ trigger: 'none' }}
                    />
                </Box>
                <BarChart
                    colors={["#d8031c", "#01016f"]}
                    xAxis={[{ scaleType: 'band', data: ['District 1', 'District 2', 'District 3'] }]}
                    series={[{ data: [124115, 95638, 96560] }, { data: [156386, 96984, 134195] }]}
                    width={480}
                    height={300}
                />
            </Box>
        </Box>
    )
}

export default Home;