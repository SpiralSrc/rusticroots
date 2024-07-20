"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const defaultPosition: [number, number] = [48.70413, -119.44031];

function Map() {
  const icon: Icon = new Icon({
    iconUrl: "marker.gif",
    iconSize: [30, 35],
    iconAnchor: [20, 30],
  });

  return (
    <div className="leaflet-container">
      <MapContainer center={defaultPosition} zoom={17}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={defaultPosition} icon={icon}>
          <Popup>
            <p>Rustic Roots Salon</p> 
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Map;
