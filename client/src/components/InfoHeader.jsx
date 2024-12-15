import {
    Box, Button
} from "@mui/material";

const InfoHeader = ({ setInfo }) => {
    return (
        <Box sx={{ backgroundColor: "#272727", width: "100%", height: "4%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <Button style={{ textTransform: 'none' }} onClick={() => setInfo("EnsembleSummary")}> Ensemble Summary </Button>
            <Button style={{ textTransform: 'none' }} onClick={() => setInfo("SimulatedElections")}> Simulated Elections </Button>
            <Button style={{ textTransform: 'none' }} onClick={() => setInfo("ComparePlans")}> Compare Plans </Button>
            <Button style={{ textTransform: 'none' }} onClick={() => setInfo("BoxWhisker")}> Box & Whisker Plot </Button>
            <Button style={{ textTransform: 'none' }} onClick={() => setInfo("DataSources")}> Data Sources </Button>
        </Box>
    )
}

export default InfoHeader;