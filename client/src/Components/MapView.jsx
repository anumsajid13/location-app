import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapView = ({ locations }) => {
  const [map, setMap] = useState(null);

  const ZoomToMarker = ({ lat, lng }) => {
    const map = useMap(); //useMap is a react-leaflet hook to get the map instance
    map.setView([lat, lng], 13);// setting the map view to the specific latidude, longitude and the soom level of 13
    return null;
  };

  useEffect(() => {
    if (map && locations.length > 0) {
      map.setView([locations[0].latitude, locations[0].longitude], 13);
    }
  }, [map, locations]);

  return (
    <MapContainer style={{ height: '90vh', width: '100%', marginTop:"4%" }} center={[51.505, -0.09]} zoom={13} whenCreated={setMap}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map(location => (
        <Marker key={location.name} position={[location.latitude, location.longitude]} />
      ))}
      {locations.length > 0 && (
        <ZoomToMarker lat={locations[0].latitude} lng={locations[0].longitude} />
      )}
    </MapContainer>
  );
};

export default MapView;
