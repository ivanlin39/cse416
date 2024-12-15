import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getBorderAsync, getAreaDataAsync } from "../utils";

const ZoomedMap = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
}

const Map = ({ pageName, setPageName }) => {
    const [currentDistrictPlan, setCurrentDistrictPlan] = useState(null);
    const [selectedDistrictPlan, setSelectedDistrictPlan] = useState(null);
    const [areaData, setAreaData] = useState(null);

    useEffect(() => {
        getBorderAsync("currentDistrictPlan").then((data) => setCurrentDistrictPlan(data)).catch((err) => console.log(err));
        getAreaDataAsync(pageName).then((data) => setAreaData(data)).catch((err) => console.log(err));
    }, [pageName]);

    return (
        currentDistrictPlan && areaData && (
            <MapContainer center={{ lat: areaData.lat, lng: areaData.lng }} zoom={areaData.zoom} minZoom={areaData.zoom} maxBounds={areaData.maxBounds}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
                <ZoomedMap center={{ lat: areaData.lat, lng: areaData.lng }} zoom={areaData.zoom} />
                {currentDistrictPlan &&
                    <GeoJSON
                        data={currentDistrictPlan}
                        style={() => ({ color: "#607d8b", weight: 2, opacity: 1 })}
                        onEachFeature={(feature, layer) => {
                            if (pageName === "USA") {
                                layer.on("click", () => setPageName("Maryland") )
                            } else {
                                layer.on({
                                    "mouseover": () => {
                                        const districtNumber = +feature.properties.CD;
                                        const democratVoteSplit = `${feature.properties.democratSeatShare} %`;
                                        const republicanVoteSplit = `${feature.properties.republicanSeatShare} %`;
                                        const content = `<pre>District: ${districtNumber}\nDemocrat Vote Split: ${democratVoteSplit}\nRepublican Vote Split: ${republicanVoteSplit}</pre>`;
                                        layer.bindTooltip(content).openTooltip();
                                    },
                                    "mouseout": () => {
                                        layer.unbindTooltip();
                                    }
                                })
                            }
                        }}
                    />
                }
            </MapContainer>
        )
    )
}

export default Map;