import {
    Box, FormControl, InputLabel, Select, MenuItem
} from "@mui/material";
import { useState } from "react";

const SimulatedElectionSelector = ({ items }) => {

    return (
        <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
            <FormControl sx={{ width: "200px" }}>
                <InputLabel id="select-simulated-election">Simulated Elections</InputLabel>
                <Select
                    labelId="select-simulated-election"
                    value={''}
                    onChange={(e) => console.log(e.target.value)}
                    sx={{ width: "100%" }}
                >
                    {Object.entries(items).map(([key, value]) => (
                        <MenuItem key={key} value={value}>
                            {key}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SimulatedElectionSelector;