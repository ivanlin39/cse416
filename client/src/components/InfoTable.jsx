import {
    Paper, TableContainer, Table, TableBody, TableRow, TableCell
} from "@mui/material";

const InfoTable = ({ data, detail }) => {
    const ensembleMapping = {
        "numOfDistrictPlan": "Number of District Plans",
        "avgMinorityRepresentative": "Average Minority Representatives Per Plan",
        "avgEqualPopulation": "Average Equal Population Measure",
        "avgRepDemSplit": "Average Republican/Democratic Split",
        "rangeOfRepresentative": "Range of Opportunity Representatives",
        "rangeOfRepDemSplit": "Range of Republican/Democratic Splits",
        "layout": "Layout"
    };

    return (
        <TableContainer sx={{ width: "390px", pl: 2 }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        {detail == "ensemble" ? (
                            Object.entries(data).map(([key, value]) => (
                                ensembleMapping[key] && value && (
                                    <TableRow key={key}>
                                        <TableCell sx={{ padding: "10px" }}>{ensembleMapping[key]}</TableCell>
                                        <TableCell sx={{ padding: "10px", textAlign: "right" }}>{key == "layout" ? value.join(', ') : value}</TableCell>
                                    </TableRow>
                                )
                            ))) : console.log("jaja")
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </TableContainer>
    )
}

export default InfoTable;