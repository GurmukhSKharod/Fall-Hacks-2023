
import React, {useState, useEffect} from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const MapContainer = () => {
  const [universities, setUniversities] = useState([]);
  const [map, setMap] = useState(null);

  const mapStyles = {
    margin: 'auto',
    border: '3px solid green',
    padding: '10px',
    height: '75vh',
    width: '75%',
  };

  // Default center coordinates
  const defaultCenter = {
    lat: 49.28165382092186,
    lng: -122.91645297724942,
  };

  return (
    <LoadScript googleMapsApiKey='AIzaSyBn31yotA0ODu_sVaT7nSoDu_yePcAJj7c'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapContainer;
