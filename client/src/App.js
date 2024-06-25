import React, { useState } from 'react';
import LocationSearch from './Components/Search';
import MapView from './Components/MapView';
import 'leaflet/dist/leaflet.css';

const App = () => {
  const [locations, setLocations] = useState([]);

  return (
    <div>
      <LocationSearch setLocations={setLocations} />
      <MapView locations={locations} />
    </div>
  );
};

export default App;
