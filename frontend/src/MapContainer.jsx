
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '100vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 49.28165382092186,
    lng: -122.91645297724942,
  };

  return (
    <LoadScript googleMapsApiKey={'AIzaSyBn31yotA0ODu_sVaT7nSoDu_yePcAJj7c'}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapContainer;
