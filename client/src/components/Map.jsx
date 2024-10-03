import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import stateBoundaries from "../data/state-border";

const Map = () => {
    const [center, setCenter] = useState({ lat: 39, lng: -96});
    const ZOOM_LEVEL = 4;

    return (
        <Box sx={{height: "100%", flex: 1}}>
            <MapContainer center={center} zoom={ZOOM_LEVEL} style={{ height: "100%", width: '100%' }}>
                <TileLayer
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
                <GeoJSON data={stateBoundaries} />
            </MapContainer>
        </Box>
    )
}

export default Map;