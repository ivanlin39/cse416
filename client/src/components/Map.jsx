import { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { GlobalContext } from "../context/GlobalContext";
import { getBorderAsync } from "../utils";
import USBorder from "../data/USBorder.json";

const ZoomedMap = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
}

const Map = () => {
    const { state : { name, zoom, center }} = useContext(GlobalContext);
    const [borderData, setBorderData] = useState(null);

    useEffect(() => {
        getBorderAsync(name).then((data) => setBorderData(data)).catch((err) => console.log(err));
    }, [name]);

    return (
        <Box sx={{height: "100%", flex: 1}}>
            <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
                <ZoomedMap center={center} zoom={zoom}/>
                {borderData && 
                    <GeoJSON 
                        data={borderData}
                        style={() => ({color: "#607d8b", weight: 2, opacity: 1})}
                    />
                }
            </MapContainer>
        </Box>
    )
}

export default Map;