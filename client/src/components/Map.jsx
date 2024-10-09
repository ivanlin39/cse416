import { useContext, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { GlobalContext } from "../context/GlobalContext";
import USBorder from "../data/USBorder.json";

const ZoomedMap = ({ center, zoom }) => {
    const map = useMap();

    useEffect(() =>{
        map.setView(center, zoom);
    }, [center, zoom])
}

const Map = () => {
    const { state : {zoom, center }} = useContext(GlobalContext);
    const [hoveredFeature, setHoveredFeature] = useState(null);

    const getFeatureStyle = (feature) => {
        return {
            fillColor: feature.properties.color, 
            weight:3 , 
            opacity: 1,
            color: "#607d8b"
        }
    }

    return (
        <Box sx={{height: "100%", flex: 1}}>
            <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
                <ZoomedMap center={center} zoom={zoom}/>
                <GeoJSON 
                    data={USBorder}
                    style={() => ({color: "#607d8b", weight: 2, opacity: 1})}
                />
                {/* <GeoJSON
                    data={MDandNM}
                    style={(feature) => getFeatureStyle(feature)}
                    // onEachFeature={(feature, layer) => {
                    //     layer.on({
                    //         mouseover: () => {setHoveredFeature(feature.properties.id)},
                    //         mouseout: () => {setHoveredFeature(null)},
                    //         // click: () => {handleClick(feature)}
                    //     });
                    // }}
                /> */}
            </MapContainer>
        </Box>
    )
}

export default Map;